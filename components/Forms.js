// import usestate module from react to use it, inshort all the useS...
import { useState } from 'react';

// this can still work as export default function then define your consts
export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    // the submit handler
    function handleSubmit(e)  {
        e.preventDefault();
        console.log(`Name : ${name}\nEmail: ${email}`);
    }

    // your regular return to display what you want 
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 rext-gray-700 leading-tight focus:outline-none"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 rext-gray-700 leading-tight focus:outline-none"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button 
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Submit
        </button>
      </form>
    );
}