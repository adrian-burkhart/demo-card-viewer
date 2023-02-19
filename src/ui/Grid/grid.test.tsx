import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Grid } from './grid'

describe('Grid', () => {
  it('should render a grid with 2 columns', () => {
    render(
      <Grid columns={2}>
        <div>Test 1</div>
        <div>Test 2</div>
        <div>Test 3</div>
        <div>Test 4</div>
      </Grid>
    )

    const grid = screen.getByRole('grid')
    expect(grid.className).toContain('grid-cols-2')
  })

  it('should render a grid with 3 columns', () => {
    render(
      <Grid columns={3}>
        <div>Test 1</div>
        <div>Test 2</div>
        <div>Test 3</div>
        <div>Test 4</div>
      </Grid>
    )

    const grid = screen.getByRole('grid')
    expect(grid.className).toContain('grid-cols-3')
  })

  it('should render a grid with 1 column if columns is undefined', () => {
    render(
      <Grid>
        <div>Test 1</div>
        <div>Test 2</div>
        <div>Test 3</div>
        <div>Test 4</div>
      </Grid>
    )

    const grid = screen.getByRole('grid')
    expect(grid.className).not.toContain('grid-cols-2')
    expect(grid.className).not.toContain('grid-cols-3')
  })

  it('should render a grid with 2 rows', () => {
    render(
      <Grid rows={2}>
        <div>Test 1</div>
        <div>Test 2</div>
        <div>Test 3</div>
        <div>Test 4</div>
      </Grid>
    )

    const grid = screen.getByRole('grid')
    expect(grid.className).toContain('grid-rows-2')
  })
})
