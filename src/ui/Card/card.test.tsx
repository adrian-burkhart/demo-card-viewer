import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Card } from './card'

describe('Card', () => {
  it('should render a highlighted card', () => {
    render(<Card highlighted>Test</Card>)
    const card = screen.getByText('Test')
    expect(card.className).toContain('shadow-inner')
  })

  it('should render a big card', () => {
    render(<Card big>Test</Card>)
    const card = screen.getByText('Test')
    expect(card.className).toContain('min-h-[15rem]')
  })

  it('should render a boucing card', () => {
    render(<Card bouncing>Test</Card>)
    const card = screen.getByText('Test')
    expect(card.className).toContain('mb-2 -mt-2')
  })

  it('should call onClick', () => {
    const onClick = vi.fn()
    render(
      <Card clickable={true} onClick={onClick} role={'button'}>
        Test Name
      </Card>
    )

    const card = screen.getByRole('button', { name: 'Test Name' })
    fireEvent.click(card)

    expect(onClick).toHaveBeenCalled()
  })

  it('should not call onClick when not clickable', () => {
    const onClick = vi.fn()
    render(
      <Card clickable={false} onClick={onClick} role={'button'}>
        Test Name
      </Card>
    )

    const card = screen.getByRole('button', { name: 'Test Name' })
    fireEvent.click(card)

    expect(onClick).not.toHaveBeenCalled()
  })
})
