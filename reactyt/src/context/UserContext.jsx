// Store User's Data

import React, { children, createContext } from "react";
export const DataContext = createContext() 

const UserContext = ({ children }) => {
  // how to access children data (App) so here is pass into object {children} like this.

//   console.log(children);
//   const UserName = "irfan";

    const userdata = {
        username: "irfan",
        age: 20,
        city:"pune",
    }

  return <div>

        <DataContext.Provider value={userdata}>
            {children}
        </DataContext.Provider>
        
    </div>;
};

export default UserContext;
