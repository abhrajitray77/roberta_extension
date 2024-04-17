import React from 'react'
import ChatInput from './ChatInput'

const GptHome = () => {
  return (
    <div className='space-y-4'>
      <header className='flex justify-center'>
        <h1 className="absolute top-4 right-4 text-xl font-medium text-neutral-900">
          Suicidal text detector
        </h1>
      </header>
      <main className="flex flex-col justify-center">
        <ChatInput />
      </main>
    </div>
  )
}

export default GptHome