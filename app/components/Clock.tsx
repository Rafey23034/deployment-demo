"use client"; // this allows rendering on client side and using hooks like useState and useEffect 

import { useEffect, useState } from "react";

export default function Clock() {

  const [time, setTime] = useState(new Date()); // manage time state, initialized to current date and time 

  useEffect(() => { // useEffect allows us to perform side effects in function components, here we set up an interval to update the time every second

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update time every 1000 milliseconds (1 second) 

    return () => clearInterval(interval); // return a cleanup function to clear the interval when the component unmounts to prevent memory leaks

  }, []); 

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">

      <h2 className="text-xl font-semibold mb-4">
        Current Time
      </h2>

      <p className="text-4xl font-bold">
        {time.toLocaleTimeString()}
      </p>

      <p className="text-zinc-400 mt-2">
        {time.toDateString()}
      </p>

    </div>
  );
}