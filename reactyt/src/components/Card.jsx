// import React from 'react'

// const card = (Props) => {

//   console.log(Props.a)

//   return (
//     <div>
//       <h1 className='text-3xl'> Username is {Props.a}
//       </h1>
//     </div>
//   )
// }

// export default card

// ******* One More Props Example ********


import React from "react";

const Card = (Props) => {
  console.log(Props.city);

  return (
    <div className="bg-white text-black inline-block p-6 text-center rounded mr-7">
      <img
        className="ml-8 h-32 w-32 rounded-full mb-3"
        src={Props.profilePhoto}
        alt=""
      />
      <h1 className="text-xxl font-semibold mb-4">
        {Props.username}
      </h1>
      <h4 className="text-blue-800">{Props.profession}</h4>
      <h2>
        {Props.city} , {Props.age}
      </h2>
      <button className="bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-5">
        Add Friend
      </button>
    </div>
  );
};

export default Card;





