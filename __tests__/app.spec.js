import React from 'react'
import App from '../src/App.jsx'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

jest.mock('../helpers/useApiVuttr.js')

const mockUseApi = require('../helpers/useApiVuttr.js')

describe('should render the app', () => {
  beforeEach(() => {
    mockUseApi.__reset()
  })

  it('in loading state', () => {
    mockUseApi.__setStateMock({ isLoading: true })

    const { container } = render(<App />)
    expect(container).toBeVisible()

    const loader = container.getElementsByClassName('vuttr__loader-wrapper')
    expect(loader[0]).toBeVisible()
  })

  it('in error state', () => {
    mockUseApi.__setStateMock({ isError: true })

    const { container, getByText } = render(<App />)
    expect(container).toBeVisible()

    const errorItem = getByText('Error in fetch data')
    expect(errorItem).toBeVisible()
    expect(errorItem).toHaveTextContent('Error in fetch data')
  })

  it('in success state', () => {
    mockUseApi.__setStateMock({
      data: [
        {
          title: 'tool1',
          description: 'description1',
          tags: ['tag1.1', 'tag1.2'],
          link: 'http://tag1',
          highlightTag: '',
          id: 1
        },
        {
          title: 'tool2',
          description: 'description2',
          tags: ['tag2.1', 'tag2.2'],
          link: 'http://tag2',
          highlightTag: '',
          id: 2
        }
      ]
    })

    const { container, getByText } = render(<App />)
    expect(container).toBeVisible()

    const tool1 = getByText('tool1')
    expect(tool1).toBeVisible()

    const tool2 = getByText('tool2')
    expect(tool2).toBeVisible()

    const cardHeader = container.getElementsByClassName('vuttr__card__header')
    expect(cardHeader.length).toBe(2)
  })
})
