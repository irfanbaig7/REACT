import React from 'react'
import Ex2 from './Ex2'

const Ex = (Props) => {
  return (
    <div>
        main hoon {Props.username}
        <Ex2 user = {Props.username} />
    </div>
  )
}

export default Ex