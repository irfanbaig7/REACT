import React from 'react'

function ListForMemo({ users, onClick }) {
    console.log("userlist re-rendered");
    return (
        <div>
            <ul>
                {
                    users.map(user => (<li key={user} onClick={onClick}>{user}</li>))
                }
            </ul>
        </div>
    )
}

export default ListForMemo