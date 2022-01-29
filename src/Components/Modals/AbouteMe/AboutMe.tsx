import React, { FunctionComponent } from 'react';
import ModalView from '../../ModalViews/ModalView';

interface Props {
    setNavMenu: (state:string) => void
}

const AboutMe: FunctionComponent <Props> = ({setNavMenu})=> {
  return( 
    <ModalView setNavMenu={setNavMenu} title='About me'>
        <p>Je m'appel vins</p>
    </ModalView>)
}

export default AboutMe;
