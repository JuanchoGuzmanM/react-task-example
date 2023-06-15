import React, { useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import TastkForm from './components/TastkForm'

function HolaMundo() {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TastkForm />
        <TaskList />
      </div>
    </main>
  )
}

export default HolaMundo