import React, { FunctionComponent } from 'react';
import './ProjectItems.css'

interface Props {
  name:string,
  description:string,
  date:string,
  icones:Array<string>
}
const ProjectItems: FunctionComponent<Props> = ({name,description,date,icones}) => {
  return (
    <div className='projectCard'>
        <h3>{name}</h3>
        <p>Some image</p>
        <p className='textCard'>{description}</p>
        <p>{date}</p> 
        <div className='iconescontainer'>
          {icones.map((icone)=><img className='icones' src={icone} alt='logo Image'/>)}
        </div>
    </div>
  )
}
export default ProjectItems;
