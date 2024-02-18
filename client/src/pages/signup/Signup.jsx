import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md shadow-black bg-dprussian_blue-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-Anton font-semibold text-dcharcoal-600 text-center mb-8">
        SignUp
      </h1>
      <form action="submit" className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="p-2 rounded-md shadow-md shadow-black text-black"
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="username" className="text-white">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="p-2 rounded-md shadow-md shadow-black text-black"
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 rounded-md shadow-md shadow-black text-black"
            autoComplete="current-password"
          />
        </div>
        <div className="flex flex-col space-y-1">
            <label htmlFor="confirmpassword" className="text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              className="p-2 rounded-md shadow-md shadow-black text-black"
              autoComplete="current-password"
            />
          </div>
        <button
          type="submit"
          className="bg-dmidnight_green-500 text-white p-2 rounded-md shadow-md shadow-black hover:bg-dmidnight_green-600 transition duration-200"
        >
          SignUp
        </button>
      </form>
      <p className="text-xs mt-3">
        Already have an account? <Link to="/login" className="font-semibold hover:underline">Login!</Link>
      </p>
    </div>
  </div>
  )
}

export default Signup