import React from 'react'
import Avatar from '../images/avatar.svg'

const Chat = () => {
  return (
    <>
    <div className='bg-blue-300 h-screen flex justify-center items-center '>
        {/* Dashboard */}
        <div className='w-screen flex'>
            <div className='w-1/4 border border-black h-screen bg-slate-300'>
                <div className='flex justify-center items-center my-8'>
                    <img src={Avatar} alt="" width={75} height={75} />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Khaliq Randibaaz</h3>
                        <p className='text-lg font-light'>My Account</p>

                    </div>
                </div>
                <hr />
            </div>
        </div>
        {/* Dashboard */}
        {/* <div>DASHBOARD</div> */}
    </div>
    {/* <section>Chat</section> */}
    {/* <div>Chat</div> */}
    </>
  )
}

export default Chat