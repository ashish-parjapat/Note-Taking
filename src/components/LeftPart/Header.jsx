import React,{useState,useRef,useEffect} from 'react'
import styles from './Header.module.css'
import Main from '../../Page/Main';
// import Popwindow from './Popwindow';
import { v4 as uuidv4 } from 'uuid';


function Header({onClose,onCreate}) {

  
const handleClose=()=>{
  onClose();
}

// const getTitle=(event)=>{
// NoteTitle(event.target.value)
// }

// const getColor=(event)=>{
//   NoteColor(event.target.value)
// }

const [title, setTitle] = useState("");
const [color, setColor] = useState("");



const handleSubmit = () => {

  onCreate(title, color);
  setTitle("");
  setColor("");
 
  
};

 


  
   


  return (
    <div className='container'>
      <div className={styles.popupoverlay}>
          <div className={styles.popupmodal}>


            <div>
           
        
            <div style={{display:"flex"}}>
            <p>Group Name</p>
            <input type="text"  value={title}     onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div style={{display:"flex"}}>
              <div>Choose colour</div>
              <div> 
           <button className='rounded-full'value='#B38BFA'     onClick={(event) => setColor(event.target.value)}    style={{backgroundColor:"#B38BFA",width:'40px',height:'40px',marginRight:'10px'}}></button>
           <button className='rounded-full'value='#FF79F2'     onClick={(event) => setColor(event.target.value)}    style={{backgroundColor:"#FF79F2",width:'40px',height:'40px',marginRight:'10px'}}></button>
           <button className='rounded-full'value='#43E6FC'     onClick={(event) => setColor(event.target.value)}    style={{backgroundColor:"#43E6FC",width:'40px',height:'40px',marginRight:'10px'}}></button>
           <button className='rounded-full'value='#F19576'     onClick={(event) => setColor(event.target.value)}    style={{backgroundColor:"#F19576",width:'40px',height:'40px',marginRight:'10px'}}></button>
           <button className='rounded-full'value='#0047FF'     onClick={(event) => setColor(event.target.value)}    style={{backgroundColor:"#0047FF",width:'40px',height:'40px',marginRight:'10px'}}></button>
           <button className='rounded-full'value='#6691FF'     onClick={(event) => setColor(event.target.value)}    style={{backgroundColor:"#6691FF",width:'40px',height:'40px',marginRight:'10px'}}></button></div>
          


            </div>
           

            </div>
            <div>
        <button onClick={handleClose}  >Close</button>
        <button  onClick={handleSubmit} >Create</button>
      </div>

    
           
          </div>
        </div>


      
      
  
      
    
      <div>
    

      </div>

    
    
</div>


 
  )
}

export default Header