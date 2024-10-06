 import React from "react"
 import facebook from "../Registration/facebook.png"

 
 function Registration() {
    return (
      <>       
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up
            </h2>
            
            <h2 className="mt-6 text-center text-lg leading-9 tracking-tight text-gray-900">
              Already a member? <span className="text-indigo-700"> Log in</span>
            </h2>
          </div>
  
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>   

                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full h-12 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  />          
                
                 </div>  
              </div>              

              <div className="flex h-12">                
                <div className="flex w-full justify-center text-lg bg-blue-500 px-3 py-1.5  leading-6 text-white"
                  >
                  <img  src={facebook}        
                    className="bg-white mx-auto h-8 w-auto ml-3 rounded-2xl"          
                  />
                  Sign up with Facebook
                 </div>                 
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                
              
                </div>

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full  h-12 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
  
              <div class="flex h-12 justify-center text-lg bg-blue-500 px-3 py-1.5 leading-6 text-white">               
                <div className="flex  w-full">
                   <img  src={facebook}        
                    className="mx-auto h-8  ml-3 w-auto bg-white rounded-2xl"
                   />
                 <div className="ml-5"> Sign up with Facebook</div>
                </div>
              </div>

              <div>          

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full  h-12 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
  
            </form>
  
            {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
          </div>
        </div>
      </>
    )
  }
  export default Registration
  