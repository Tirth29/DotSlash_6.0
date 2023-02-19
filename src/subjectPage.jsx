import React from 'react'
import Subject from './components/MySubject'
const subjectPage = () => {
  return (
    <React.Fragment>
      <div className=' h-full w-full'>
        <div className='h-20'></div>
        <div className='flex h-1/2 w-full'>
          <div className="mt-0 mr-0 flex-wrap inline-box p-0 flex  w-1/2 bg-[url('./Subject-page.jpg')] bg-center rounded-lg">
           <h1 className="inline-block text-5xl text-center bg-blue-500 mx-auto my-auto rounded-full p-10 ">Sub-01</h1>

          </div>
          <div className="mt-0 mr-0 p-0 inline-box flex faculty   w-1/2">
            <h1 className='inline-block text-2xl text-center mx-auto my-auto bg-blue-400 rounded-full p-10'>faculty</h1>
          </div>
        </div><div className=" material bg-violet-400 h-1/2 w-full text-center pt-10 mx-auto my-auto rounded-t-3xl underline decoration-solid">study material</div>
      </div>
    </React.Fragment>)
}
export default subjectPage 