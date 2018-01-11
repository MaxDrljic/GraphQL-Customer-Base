const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Hardcoded data
const customers = [
    {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        age: 35
    },
    {
        id: '2',
        name: 'Martha Doe',
        email: 'marthadoe@gmail.com',
        age: 30
    },
    {
        id: '3',
        name: 'Max Drljić',
        email: 'maxdrljic@gmail.com',
        age: 20
    }
]


// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    customer: {
        type: CustomerType,
        args: {
            id: {GraphQLString}
        },
        resolve(parentValue, args) {
            for (let i = 0; i < customers.length; i++) {
                if (customers[i].id === args.id) {
                    return customers[i];
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    
});