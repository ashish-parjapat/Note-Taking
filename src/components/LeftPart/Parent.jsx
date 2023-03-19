import React,{useEffect,useState} from 'react'
import styles from './Parent.module.css'
import Header from './Header'
import Group from './Group'



function Parent(){

 
  const [groupNameColor, setGroupNameColor] = useState(null);

  const handleSubmit = (data) => {
    setGroupNameColor(data);
  };
 

  return (
    <div className={styles.leftPart}>

<div>

<div className={styles.pocketNote}>
        Pocket Notes
        </div>

<div>

<button className={styles.addGroups} onClick={handleButtonClick}>

<span>Create Note</span>


  
  </button>
</div>
      {groupNameColor ? (
        <Group groupNameColor={groupNameColor} />
      ) : (
        <Header onSubmit={handleSubmit} />
      )}
    </div>









    </div>
  )
}

export default Parent