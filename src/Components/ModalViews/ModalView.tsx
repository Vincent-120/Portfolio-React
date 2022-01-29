import './ModalView.css'
import React, { Children, FunctionComponent, ReactNode } from 'react';

interface Props {
    title : string,
    children: ReactNode,
    setNavMenu:(state:string) => void
}

const ModalView: FunctionComponent<Props> = ({title, children,setNavMenu}) =>{
  return (<section className='modal'>
          <span onClick={()=>setNavMenu('Home')} className='closeBtn'>X</span>
          <main>
            <header>
                <h2>{title}</h2>
            </header>
            <section>
                {children}
            </section>
          </main>
      </section>
  )
}

export default ModalView;
