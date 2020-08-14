


const vs let
> Always use const unless you need to change


npm install firebase
npm install @material-ui/icon
npm install @material-ui/core
npm install react-router-dom

npm install react-tinder-card


```js
// React way
const [people, setPeople] = useState([])
setPeople(['a', 'b'])
setPeople([...people, 'c'])

// normal (bad) way
// const people = []
// people = ['a', 'b']
// people.push('c)
```


* Always give keys in React
  * allow react to efficiently re-render a list
  * make your app fast
  

```js
  // Piece of code which runs based on a condition
  useEffect(() => {
    // this is where the runs

    
  }, []) // this will run ONCE when the componet loads
```