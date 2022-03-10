export const userSchema = {
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    { name: "Address", title: "Wallet Address", type: "string" },
    { name: "userName", title: "User Name", type: "string" },
    {
      name: "transaction",
      title: "Transactions",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "transaction" }],
        },
      ],
    },
  ],
};
