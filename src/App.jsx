
import { useState } from 'react'
import './App.css'
import Allplayers from './Components/AllPlayers/Allplayers'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navber from './Components/Navber/Navber'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const[balance,setBalance]=useState(0);

    const handleBalance=(price)=>{
          setBalance(balance+price)
          toast("Wow! claimed 6000000 Coin");
    }

   

    const [chosePlyer,setChosePlayer]=useState([])

    const handleDelate=(idx)=>{
       const remainingDelate=chosePlyer.filter(p=>p.id!==idx.id)
       setChosePlayer(remainingDelate);
       setBalance(balance+idx.price);
       setPlayerNum(playerNum-1);
    }
    
    const [playerNum,setPlayerNum]=useState(0)
    
    const handlePlayer=(player)=>{
      
      const isExit=chosePlyer.find(p=>p.id===player.id)
      

      if(!isExit){
         if(balance>=player.price)
         {
            if(playerNum>=6)
            {
              toast("Player Limit Over");
            }else{

            
            const remainingPlayer=[...chosePlyer,player];
            setChosePlayer(remainingPlayer);
            setBalance(balance-player.price)
            toast("Wow! you Choose a Player")
            setPlayerNum(playerNum+1);
            }
         }else{
          toast("Not have enought Balance")
         }
      }else{
        toast("Already Selected!")
      }

    
    }

  return (
    <>
      
      <Navber
      balance={balance}
      ></Navber>
      <ToastContainer />
      <Banner
      handleBalance={handleBalance}
      ></Banner>
      <Allplayers
      handlePlayer={handlePlayer}
      chosePlyer={chosePlyer}
      handleDelate={handleDelate}
      ></Allplayers>
      <Footer></Footer>
      
    </>
  )
}

export default App
