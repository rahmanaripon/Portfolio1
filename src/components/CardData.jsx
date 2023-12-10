import React, { useEffect, useState } from 'react'
import Card from './Card';
import lll from '../../public/Skills.json'



const CardData = () => {
    const [skill, setskill] = useState([]);
    
    useEffect(() => {
       fetch('Skills.json')
         .then((res) => res.json())
         .then((data) => setskill(data)); 
    },[])

  return (
    <div className='grid grid-cols-3'>
      {
        
        skill?.map((eachSkillData) => (
          <Card key={eachSkillData.id} eachSkillData={eachSkillData}></Card>
        ))
      }
    </div>
  );
}

export default CardData