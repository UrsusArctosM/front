import React from 'react';
import './App.css';
import axios from 'axios'
import { useCallback, useState } from 'react'


function App() {
  interface ICategory { id:number, name:string}

  
  const [data, setData] = useState<ICategory[]>([])
  const [name, setName] = useState();
  const getCategories = async() => {
  const { data } = await axios.create({ baseURL: 'http://localhost:3334/api'}).get('/category')
      setData(data)
    }
    const sendItem = useCallback(async () => {
      console.log(111111)
    },[])


  return (
    <div className="App">
      <button onClick={() => getCategories() }> Получить данные </button>
      
      {data && data !== null && data.map((value) => (<>
      <p key={value.id}>{value.name}</p></>))}
        
        {/* <form>
          <input type='text' name={'name'} onChange={(event) => setName(event.target.value)}/>
          <button type='button' onClick={() => sendItem()}> Отправить </button>
        </form> */}



    </div>
  );
}

export default App;
