import { gql } from "@apollo/client";


export const ALL_BOOKS = gql`
  query{
    allBooks{
      title
      author
      published
    }
  }
`

export const ADD_BOOK = gql`
mutation addBook($title:String!,
      $published:Int!,
      $author:String!,
      $genres:[String]!){
  addBook(
    title:$title,
    published:$published,
    author:$author,
    genres:$genres
  ){
    title
    author
    published
  }
}`

export const ALL_AUTHORS = gql`
    query{
      allAuthors{
        name
        born
        bookCount
      }
    }
  `

 export const EDIT_AUTHOR = gql`
    mutation editAuthor($name:String! , $born:Int){
      editAuthor(name:$name , setBornTo:$born){
        name
        born
        bookCount                                                  
      }
    }
  `
  export const LOGIN = gql`
  mutation login($username:String!, $password:String!){
    login(username:$username,password:$password){
        value
    }
  }
`