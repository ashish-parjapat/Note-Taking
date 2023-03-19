import React,{useState,useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Notes from '../components/Notes'
import styles from './Main.module.css'
import Header from '../components/LeftPart/Header'
import { v4 as uuidv4 } from 'uuid';


function Main(props) {
const[notes,setnotes]=useState([])

const[isOpen,setIsOpen]=useState(false)


const Addnote=()=>{
 setIsOpen(true)

}
const closemodel=()=>{
  setIsOpen(false)
}

const onCreate = (title, color) => {
  const newNote = { title, color,
  id:uuidv4(),
  body:''

  
  };
  setnotes([...notes, newNote]);
  setactiveGroup(newNote.id)
 
  };

// const messages=(notetext)=>{
//   const newMessage={
//     body:notetext
//   };
//   setnotes([...notes, newMessage]);

// }






  
//  console.log(notes);

 const[activeGroup,setactiveGroup]=useState(false)

//  const getactiveGroup=()=>{
//   return notes.find((note)=> note.id===activeGroup)
//  }

//  console.log(getactiveGroup());


// const onUpdateNote = (updatedNote) => {
//   const updatedNotesArr = notes.map((note) => {
//     if (note.id === updatedNote.id) {
//       return updatedNote;
//     }

//     return note;
//   });

//   setnotes(updatedNotesArr);
// };







  return (


    <div className='container flex'>
        <div>

       



          <Sidebar notes={notes}
          Addnote={Addnote}
          activeGroup={activeGroup}
          setactiveGroup={setactiveGroup}
        
          />
             {isOpen && <Header/>}
             {isOpen && (
        <Header onClose={closemodel}
      // NoteTitle={NoteTitle}
      // NoteColor={NoteColor}
      onCreate={onCreate}
        
        
        />
      )}
       {/* {isOpen && (
        <Header oninput={oninput} />
      )} */}

        </div>
        <div>
          <Notes activeGroup={activeGroup}
            notes={notes}
           
            // onUpdateNote={onUpdateNote}
          
          />
        </div>
        
       






    </div>
  )
}

export default Main