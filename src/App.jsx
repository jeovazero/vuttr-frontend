// @flow
import React from 'react'
import styled from '@emotion/styled'
import theme from './theme.js'
import { ThemeProvider } from 'emotion-theming'

type Props = {
  className: string
}

const App = ({ className }: Props) => (
  <ThemeProvider theme={theme}>
    <span>Huehue</span>
  </ThemeProvider>
)

export default styled(App)`
  background-color: white;
`
