import React from 'react'
//context import
import { useUser } from '../contexts/user'

function Home() {
    const { user } = useUser()
    return (
        <div>
            <h1> Welcome, { user.name } </h1>
        </div>
    )
}

export default Home
