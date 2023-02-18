import React from 'react'
import Subject from './components/MySubject'
const subjectPage = () => {
  return (
    <React.Fragment>
      <div className=' h-full w-full'>
        <div className='flex h-1/2 w-full'>
          <div className="mt-20 mr-0 flex-wrap inline-box p-0 flex bg-yellow-400 w-1/2 ">subjectPage</div>
          <div className="mt-20 mr-0 p-0 inline-box flex faculty bg-red-600  w-1/2 "> faculty</div>
        </div><div className=" material bg-green-800 h-1/2 w-full">study material</div>
      </div>
    </React.Fragment>)
}
export default subjectPage 