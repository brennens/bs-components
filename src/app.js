import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ThemeWrapper from './theme/components/ThemeWrapper'

import Base from './layout/Base'
// import './sass/main.scss';

ReactDOM.render(
  <ThemeWrapper>
    <HashRouter>
      <Base />
    </HashRouter>
  </ThemeWrapper>,
  document.querySelector('.bs-content')
)
