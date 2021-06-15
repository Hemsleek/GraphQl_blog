import React from 'react'
import {useQuery, gql} from '@apollo/client'

const ALL_AUTHORS = gql`
    query{
      allAuthors{
        name
        born
        bookCount
      }
    }
  `

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)

  if (!props.show) {
    return null
  }
  
  
  if(result.loading) return (
  <div>
    loading....
  </div>)
  
  return (
    <>
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>
              Born
            </th>
            <th>
              Books
            </th>
          </tr>
          {result.data.allAuthors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
    <form>
       <div>
          Name
          <input
            value={name}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Born
          <input
            value={born}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <button type='submit'>update author</button>
        
    </form>
    </>
  )
}

export default Authors