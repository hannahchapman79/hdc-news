import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({
            username: "grumpy19",
            name: "johnny",
            avatar_url: "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg"
    })

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {props.children}
        </UserContext.Provider>
    )
}