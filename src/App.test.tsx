import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Grid } from './ui'
import { DetailView, PlayerOverview, SettingsCard } from './components'

describe('Demo Card Viewer before loading', () => {
  const handleClick = vi.fn()
  const handleCardClick = vi.fn()
  const handleSubmit = vi.fn()

  it('should render an error message when loading fails', () => {
    const loadingState = 'errored'

    render(
      <Grid columns={2}>
        <DetailView player={undefined} />
        <SettingsCard
          activePlayer={undefined}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          loadingState={loadingState}
        />
        <PlayerOverview
          activePlayer={undefined}
          handleCardClick={handleCardClick}
          loadingState={loadingState}
          players={[]}
        />
      </Grid>
    )

    const errorMessage = screen.getByText('Error loading players...')
    expect(errorMessage).toBeTruthy()
  })

  it('should render a detail view without player data', () => {
    const loadingState = 'loading'

    render(
      <Grid columns={2}>
        <DetailView player={undefined} />
        <SettingsCard
          activePlayer={undefined}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          loadingState={loadingState}
        />
        <PlayerOverview
          activePlayer={undefined}
          handleCardClick={handleCardClick}
          loadingState={loadingState}
          players={[]}
        />
      </Grid>
    )

    const detailView = screen.getByText('Click a player card to inspect.')
    expect(detailView).toBeTruthy()
  })
})

describe('Demo Card Viewer', () => {
  const PLAYERS = [
    {
      firstNames: 'Brianna',
      lastName: 'Forbes',
      playerName: 'Dreamlurk The Unstoppable',
      asset: 'Foghammer Lead',
    },
    {
      firstNames: 'Darcy Candice',
      lastName: 'Ball',
      playerName: 'Crystaldash',
      asset: 'Secret Glowquake Gold',
    },
    {
      firstNames: 'Elva Becky',
      lastName: 'Hammond',
      playerName: 'Seekvenom The Mystic',
      asset: "Valkyries' Opal Adamant",
    },
    {
      firstNames: 'Enid',
      lastName: 'Rose',
      playerName: 'Coincurse The Ghoul',
      asset: 'Jewelevil Bronze Of Goddesses',
    },
    {
      firstNames: 'Esmeralda',
      lastName: 'Carrillo',
      playerName: 'Skulldart',
      asset: 'Yellow Orichalcum Of Paladins',
    },
    {
      firstNames: 'Hillary',
      lastName: 'Gibbs',
      playerName: 'Speedsoul',
      asset: 'Shifting Rainshadow Iron',
    },
  ]

  beforeEach(() => {
    const handleClick = vi.fn()
    const handleCardClick = vi.fn()
    const handleSubmit = vi.fn()
    const loadingState = 'success'

    render(
      <Grid columns={2}>
        <DetailView cardBouncing player={PLAYERS[0]} />
        <SettingsCard
          activePlayer={PLAYERS[0]}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          loadingState={loadingState}
        />
        <PlayerOverview
          activePlayer={PLAYERS[0]}
          handleCardClick={handleCardClick}
          loadingState={loadingState}
          players={PLAYERS}
        />
      </Grid>
    )
  })

  it('should render all cards and three buttons', () => {
    const cards = screen.getAllByRole('button')
    expect(cards).toHaveLength(9) // 6 cards + 3 buttons
  })

  it('should render a card with names and asset in it', () => {
    const card = screen.getByRole('button', {
      name: 'Brianna Forbes Dreamlurk The Unstoppable Foghammer Lead',
    })
    expect(card).toBeTruthy()
  })
})
