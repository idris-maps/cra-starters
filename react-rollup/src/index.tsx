import React from 'react'
import { render } from 'react-dom'
import Avatar from '@react-components-attempt/avatar'
import './index.scss'

const App = () =>
  <div>
    <h1>Hello</h1>
    <Avatar theme="primary" title="AA">AA</Avatar>
  </div>

render(App(), document.getElementById('app'))

