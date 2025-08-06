import React from 'react'

function FriutList() {


    // const fruits = ["apple", "banana", "mango", "Coconuts", 'Starwaberry']

    // const users = [
    //     { id: 1, name: "Irfan" },
    //     { id: 2, name: "Ali" },
    //     { id: 3, name: "Sara" }
    // ];

    const books = [
        { id: 101, title: "Atomic Habits" },
        { id: 102, title: "Deep Work" },
        { id: 103, title: "Clean Code" }
    ];



    return (
        <div>
            {/* <ul>
                {
                    fruits.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))
                }
            </ul> */}

            {/* <ul>
                {
                    users.map(({id, name}) => (
                        <li key={id}>{name}</li>
                    ))
                }
            </ul> */}

                <p>Book Count : {books.length}</p>
            <ul>
                {
                    books.map(({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FriutList