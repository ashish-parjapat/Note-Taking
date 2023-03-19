import React from 'react'
import '../App.css'


function Sidebar({notes,Addnote,activeGroup,setactiveGroup}) {
  return (
    <div className='container'>
<h3>Pocket Notes</h3>

<div>

<button className="addGroups"  onClick={Addnote}>
{/* <img className={styles.plus} src={circlePlus}/> */}
<span>Create Note</span>
  </button>
  </div>

<div className="sidebar-notes">

    {notes.map((note)=>(
        <div className="sidebar-note">
        <div className="sidebar-note symbol rounded-full" >
            <button  onClick={setactiveGroup(note.id)} style={{backgroundColor:note.color}}  >{note.title.slice(0,2)}</button>
            <strong>{note.title}</strong>
            </div>
        
           
         
        
        
        
        </div>

    ))}





</div>



  </div>
  )
}

export default Sidebar