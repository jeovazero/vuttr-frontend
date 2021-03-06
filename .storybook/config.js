import theme from '../src/theme.js'
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from 'emotion-theming'
import { configure, addDecorator, addParameters } from '@storybook/react'

import './index.css'

addDecorator(
  withInfo({
    inline: true,
    header: false
  })
)

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

const req = require.context('../src/components', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)

addParameters({
  options: {
    url: 'https://github.com/jeovazero/vuttr-frontend',
    name: 'VUTTR'
  }
})

configure(loadStories, module)
