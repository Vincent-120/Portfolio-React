import React, { FunctionComponent } from 'react';
import ModalView from '../../ModalViews/ModalView';
import ProjectItems from '../../ProjectItems/ProjectItems';
import {iconesList} from '../../../Icones/iconesList'

interface Props {
    setNavMenu: (state:string) => void
}

const Projects: FunctionComponent <Props> = ({setNavMenu})=> {
  return( 
    <ModalView setNavMenu={setNavMenu} title='Pojects'>
        <p>Api in comming</p>
        <ProjectItems name='Projet 1' description='Ma description de project' date='29/01/2022' icones={[
            iconesList.html,
            iconesList.js,
        ]}/>
    </ModalView>)
}

export default Projects;
