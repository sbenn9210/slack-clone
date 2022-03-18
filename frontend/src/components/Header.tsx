import React from 'react'
import History from './History'
import Search from './Search'
import User from './User'

function Header() {
  return (
    <div className='bg-slate-700 text-white p-3 flex justify-around'>
        <History />
        <Search />
        <User />
    </div>
  )
}

export default Header