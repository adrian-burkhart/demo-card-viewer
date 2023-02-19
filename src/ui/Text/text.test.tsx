import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Text } from './text'

describe('Text', () => {
  it('should render a text with primary color', () => {
    render(<Text color='text-primary'>Test</Text>)
    const text = screen.getByText('Test')
    expect(text.className).toContain('text-primary')
  })

  it('should render a text with truncate', () => {
    render(<Text truncate>Test</Text>)
    const text = screen.getByText('Test')
    expect(text.className).toContain('truncate')
  })
})
