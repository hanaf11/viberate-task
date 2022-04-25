import React from 'react';
import '../../html-css-sample/styles/styles.css'
import Header from '../../Layout/Header/Header';
import Main from '../../Layout/Main/Main';

function PageContainer() {
  return (
   <div className='container'>
       <Header/>
       <Main/>
   </div>
  );
}

export default PageContainer;