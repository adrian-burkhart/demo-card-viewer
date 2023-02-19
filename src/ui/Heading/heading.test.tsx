import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './heading'

describe('Heading', () => {
  it('should render a heading with level 1', () => {
    render(<Heading level={1}>Test</Heading>)
    const heading = screen.getByRole('heading', { name: 'Test' })
    expect(heading.className).toContain('text-4xl')
    expect(heading.tagName).toBe('H1')
  })

  it('should render a heading with level 2', () => {
    render(<Heading level={2}>Test</Heading>)
    const heading = screen.getByRole('heading', { name: 'Test' })
    expect(heading.className).toContain('text-2xl')
    expect(heading.tagName).toBe('H2')
  })

  it('should render a heading with level 3', () => {
    render(<Heading level={3}>Test</Heading>)
    const heading = screen.getByRole('heading', { name: 'Test' })
    expect(heading.className).toContain('text-xl')
    expect(heading.tagName).toBe('H3')
  })
})
