import { Navbar } from './Navbar/Navbar';
import { Main } from './Main/Main';
import { Profile } from './Profile/Profile';
import './Index.css'
import { useEffect, useState } from "react";

function App() {
  const [loading,setLoading]= useState(true);

  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false);
    },2000)
  })
  if (loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  return (
    <>
    <Navbar/>
    <Profile/>
    <Main/>
    </>
  );
}

export const Loading = () => {
  return (
    <>
    <div className='loading'>

      <h2>Loading....</h2>
      <p>This website is under development, so its not responsive at present.</p>

    </div>
    </>
  )
}
export default App;
