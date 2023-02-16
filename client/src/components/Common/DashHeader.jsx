import React from 'react';
import DashNavigation from '../Common/DashNavigation';

const DashHeader = () => {
  return (
    <>
      <header className='header-style-2'>
        <div className='sticky-header main-bar-wraper'>
          <div className='main-bar header-botton nav-bg-secondry'>
            <div className='container'>
              <DashNavigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashHeader;
