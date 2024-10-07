import React from 'react'

function Account() {
      return (
       
//         <section className='flex'>
          
//            <section className='mx-auto max-w-4xl '>
//         <div className='space-x-7'>
//         <span> My Account</span>
//         <span>My Subscription</span>
//         <span>My Wallet </span>
//        </div>
//        <br/>
//        <hr/>
//           <div className='flex '>
//            <div>
//            <h2 className='font-bold text-purple-950 text-xl '>Account</h2>
//            <h6 className=''>View and edit your personal info below</h6>
//            </div>
//            <div className='space-x-3 ml-80 my-6'>
//            <button className='text-gray-500 bg-zinc-50 px-5 py-1 border rounded'>Discard</button>
//            <button className='text-white bg-purple-700 rounded px-5 py-1'>Update Info</button>
//            </div>
//           </div>
//           <br/>
//           <hr/>
//           <div className='gap-4'>
//             <h2 className='font-bold text-purple-950 text-xl'>Personal Info</h2>
//             <h3>Update your personal information</h3>
//             <form className='grid grid-cols-2 mid:grid-cols-2 gap-20'>
//              <div className=''>
//              <label className='text-gray-500 flex '>First Name</label>
//              <input type='text' placeholder='Pb' className='rounded border w-full px-3'></input>
//              </div>
//              <div>
//              <label className='flex text-gray-500'>Last Name</label>
//              <input type='text' placeholder='WebCraft'className='rounded border w-full px-3 ' ></input>
//              </div>
//              <div className='-my-16'>
//              <label className='flex text-gray-500'>Phone</label>
//              <input type='text' className='rounded border w-full px-3'></input>
//              </div>
//             <div>
//             <div className='flex'></div>
//             <div className='flex space-x-3 mx-28'>
//             <button className='text-gray-500 bg-zinc-50  px-5 py-1 border rounded'>Discard</button>
//             <button className='text-white bg-purple-700 rounded px-5 py-1'>UpdateInfo</button>
//             </div>
//             </div>
//             </form>
//           </div>
//           <br/>
//           <hr/>
//           <div>
//             <h2>Login info</h2>
//             <h3>View and update your login email and password</h3>
//             <h3>Login email:</h3>
//             <h3>pwwebcraft@gmail.com</h3>
//             <h3>Site owners can only change their login email in Wix Account Settings</h3>
//             <h2>password</h2>
//             <h2>......</h2>
//             <h3>Site owners can only change their password in Wix Account Settings</h3>
//           </div>
//           </section>
//           <section className='h-16 w-10 '>
// <img src="https://cdn-icons-png.flaticon.com/128/1370/1370907.png"/>
//           </section>
//         </section>
<section className="flex flex-col md:flex-row">
{/* Left Side Section */}
<section className="mx-auto max-w-4xl p-4 w-full md:w-3/4">
  {/* Tab Links */}
  <div className="flex justify-start space-x-7 mb-4">
    <span className="text-gray-700">My Account</span>
    <span className="text-gray-700">My Subscription</span>
    <span className="text-gray-700">My Wallet</span>
  </div>

  <hr className="mb-4" />

  {/* Account Section */}
  <div className="flex justify-between items-center mb-4">
    <div>
      <h2 className="font-bold text-purple-900 text-2xl">Account</h2>
      <h6 className="text-gray-500">View and edit your personal info below</h6>
    </div>
    <div className="space-x-3">
      <button className="text-gray-500 bg-zinc-50 px-4 py-2 border rounded">Discard</button>
      <button className="text-white bg-purple-700 px-4 py-2 rounded">Update Info</button>
    </div>
  </div>

  <hr className="mb-6" />

  {/* Personal Info Form */}
  <div className="mb-6">
    <h2 className="font-bold text-purple-900 text-xl mb-2">Personal Info</h2>
    <p className="text-gray-500 mb-4">Update your personal information</p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="text-gray-600 mb-2 block">First Name</label>
        <input
          type="text"
          placeholder="Pb"
          className="rounded border w-full p-3 text-gray-700"
        />
      </div>
      <div>
        <label className="text-gray-600 mb-2 block">Last Name</label>
        <input
          type="text"
          placeholder="WebCraft"
          className="rounded border w-full p-3 text-gray-700"
        />
      </div>
      <div>
        <label className="text-gray-600 mb-2 block">Phone</label>
        <input
          type="text"
          placeholder="Phone"
          className="rounded border w-full p-3 text-gray-700"
        />
      </div>
    </form>

    <div className="flex space-x-4 mt-6">
      <button className="text-gray-500 bg-zinc-50 px-4 py-2 border rounded">Discard</button>
      <button className="text-white bg-purple-700 px-4 py-2 rounded">Update Info</button>
    </div>
  </div>

  <hr className="mb-6" />

  {/* Login Info Section */}
  <div>
    <h2 className="font-bold text-purple-900 text-xl mb-2">Login Info</h2>
    <p className="text-gray-500 mb-2">View and update your login email and password</p>
    <p className="text-gray-700 mb-4">Login email: pbwebcraft@gmail.com</p>
    <p className="text-gray-500">
      Site owners can only change their login email in Wix Account Settings.
    </p>

    <p className="text-gray-700 mt-4">Password: ******</p>
    <p className="text-gray-500">
      Site owners can only change their password in Wix Account Settings.
    </p>
  </div>
</section>

{/* Right Side Section for Image */}
<section className="hidden md:block md:w-1/4">
  <img
    src="https://cdn-icons-png.flaticon.com/128/1370/1370907.png"
    alt="Side Icon"
    className="w-16 h-16 mx-auto"
  />
</section>
</section>
        
      );
    }; 

export default Account