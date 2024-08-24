// Login page

import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm p-6 border rounded-lg shadow-md bg-white">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
              <input type="password" id="password" className="w-full p-2 border rounded-md" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
            <div className="text-center mt-4">
              <p>Or login with</p>
              <button className="bg-gray-500 text-white py-2 px-4 rounded mt-2">Google</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
