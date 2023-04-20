import { useEffect, useState } from "react"

import { createContract } from "../utils/constants"
import { useAccount } from "wagmi"

export const useAirbnb = () => {
  const [contract, setContract] = useState(null)
  const [userAddress, setUserAddress] = useState("")
  const [properties, setProperties] = useState([])

  // Hook to get the account from wagmi
  const { address } = useAccount()

  // UseEffect to set the state of userAddress
  useEffect(() => {
    address && setUserAddress(address)
    console.log("address", address)
    setContract(createContract())
  }, [address])

  // UseEffect Get all properties
  useEffect(() => {
    getProperties()
    console.log("properties", properties)
  }, [contract])

  // Get Properties function
  const getProperties = async () => {
    if (contract) {
      try {
        const noOfProps = await contract.methods.counter().call()
        setProperties([])
        for (let index = 0; index < noOfProps; index++) {
          const property = await contract.methods.properties(index).call()
          const formattedProperty = {
            id: property["id"],
            name: property["name"],
            description: property["description"],
            pricePerDay: property["pricePerDay"],
            imgUrl: property["imgUrl"],
            isBooked: property["isBooked"],
            address: property["propertyAddress"],
          }
          setProperties((prevState) => [...prevState, formattedProperty])
        }
      } catch (err) {
        console.log("Error getting properties", err)
      }
    }
  }

  // Add Listing function
  const addListing = async (
    name,
    propertyAddress,
    description,
    imgUrl,
    pricePerDay
  ) => {
    if (contract) {
      try {
        await contract.methods
          .listProperty(name, propertyAddress, description, imgUrl, pricePerDay)
          .send({ from: address, gas: 3000000, gasLimit: null })
      } catch (err) {
        console.log("Error add listing", err)
      }
    }
  }

  // Book Listing function
  const bookProperty = async (id, startAt, endAt) => {
    if (contract) {
      try {
        const duePrice = await contract.methods
          .getDuePrice(id, startAt, endAt)
          .call()
        console.log("duePrice", duePrice, id, startAt)
        await contract.methods.bookProperty(id, startAt, endAt).send({
          from: userAddress,
          value: duePrice,
          gas: 3000000,
          gasLimit: null,
        })

        getProperties()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return { properties, userAddress, addListing, bookProperty }
}
