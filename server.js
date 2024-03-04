const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(/* GraphQL */ `
  input CreateUserInfoInput {
    name: String!
    email: String!
    avatar: String
	 gender:Gender = erkak
  }
  enum Gender {
    erkak
    ayol
  }
  type Query {
    user(userData: CreateUserInfoInput): UserInfo
  }

  type UserInfo{
	  name:String!
	  email:String!
	  avatar:String
	  gender:Gender
  }

`);

const resolver = {
  user: ({userData}) => {
    return userData;
  },
};
graphql(
	schema,
	`
	query {
	  user(userData:{
		  name: "John Doe",
		  email: "John@gamil.com",
		  avatar: "https://www.google.com",
	  }) 
	  {
		name
		email
		avatar
		gender
	  }
	}
	`,
	resolver
 ).then((response) => {
	console.log(response.data.user);
 });