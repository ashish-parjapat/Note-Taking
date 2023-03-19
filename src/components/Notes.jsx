import React,{useState} from 'react'
import styles from './Notes.module.css'


function Notes({activeGroup,notes,messages}) {

  // const onEditField = (field, value) => {
  //   onUpdateNote({
  //     ...activeGroup,
  //     [field]: value,
  
  //   });
  // };


  const[notetext,setnotenext]=useState('')




   function getactiveGroup(){
       return (notes.find((note)=> note.id===activeGroup))
      
   }

   function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      myFunction();
   
    }
  }

  function myFunction() {
    
        
  }


 
   if (!activeGroup) return <div className="no-active-note">No Active Note</div>;





  return (
    <div className= {styles.appmain}>
        <div className={styles.appsavednotes}>


         <div>

        {getactiveGroup().title}
         
          </div> 

          <div>
        {getactiveGroup().body}
          </div>
   
      

        </div>

        <div className={styles.appenternotes}>
        <textarea
          id="body"
          placeholder="Write your note here..."
          onChange={(event) => setnotenext(event.target.value)} 
          value={getactiveGroup().body}
          onKeyDown={handleKeyDown}
       
        />

        </div>
    
  </div>  )
}

export default Notes