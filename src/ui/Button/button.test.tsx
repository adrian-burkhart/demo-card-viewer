import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('should call onClick', () => {
    const onClick = vi.fn()
    render(<Button label='test' onClick={onClick} />)

    const button = screen.getByRole('button', { name: 'test' })
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should not call onClick when inactive', () => {
    const onClick = vi.fn()
    render(<Button inactive label='test' onClick={onClick} />)

    const button = screen.getByRole('button', { name: 'test' })
    fireEvent.click(button)

    expect(onClick).not.toHaveBeenCalled()
  })
})
