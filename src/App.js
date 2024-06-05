import React,{useState} from 'react';
import Product from './Product';

const App = () => {
  const [search,setSearch]=useState('');
  const [data,setData]=useState([]);
  const YOUR_APP_ID = "d54f69bb";
  const YOUR_APP_KEY ="f5ba70b06d0c798b9f66307cab310000";
  const handler=e=>{
    setSearch(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response =>response.json()
    ).then(data=>setData(data.hits))
    
  }
  return (
    <div>
      <center>
        <h1>Food Recipe App</h1>
        <form onSubmit={submitHandler}><br></br>
          <input type='text' value={search} onChange={handler}/><br/><br/>
          <input type='submit' value='search' className='btn btn-primary'></input>
        </form>
        {data.length>=1 ? <Product data={data} />:null}
      </center>
    </div>
  );
}

export default App;
