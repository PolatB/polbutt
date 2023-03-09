import React from 'react'
import { Buttons } from 'polbutt'
import 'polbutt/dist/index.css'
import './app.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <div>
          <Buttons type='primary' text='Primary Button' />
        </div>
        <div>
          <Buttons text='Default Button' />
        </div>
        <div>
          <Buttons type='dashed' text='Dashed Button' />
        </div>
        <div>
          <Buttons type='text' text='Text Button' />
        </div>
        <div>
          <Buttons type='link' text='Link Button' />
        </div>
      </div>
    </>
  )
}

export default App
