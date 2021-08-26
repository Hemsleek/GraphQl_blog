import React, { useState } from 'react'
import {useQuery, useMutation} from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'



const  Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)
  const [editAuthor] = useMutation(EDIT_AUTHOR,{
    refetchQueries:[{query:ALL_AUTHORS}]
  })

  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  if (!props.show) {
    return null
  }
  console.log({result})
  
  if(result.loading) return (
  <div>
    loading....
  </div>)

const updateAuthor = async (event) => {
  event.preventDefault()
  
  editAuthor({variables:{ name, born:parseInt(born,10)}})

  setName('')
  setBorn('')
  
}
  
  return (
    <>
    <div style={{marginBottom:"5rem"}}>
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
    <form onSubmit={updateAuthor}>
       <div>
          Name
          <select defaultValue="none" onChange={({ target }) => setName(target.value)}>
            <option value="none" disabled>Select</option>
            {
              result.data.allAuthors.map( a => (
                <option value={a.name}>
                  {a.name}
                </option>
              ))
            }
          </select>
        </div>
        <div>
          Born
          <input
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type='submit'>update author</button>
        
    </form>
    </>
  )
}

export default Authors