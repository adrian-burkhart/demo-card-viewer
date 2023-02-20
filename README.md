# Demo Card Viewer

## Setup

You can try out the app locally by running

```sh
% npm run dev
```

Or visit the live web app here: https://demo-card-viewer.netlify.app/

You can run the unit and integrations tests by using

```sh
% npm run test
```

Or for e2e testing, use

```sh
% npm run cypress
```

## Considerations

I decided to use Vite because it provides a way to quickly set up an app and a framework like Next.js would have been overkill for a small app like this.

I fetch the players from the API and format their real names by splitting them up into first and last names. This allows me to sort players by last names instead of first names. I use zod to check the types at runtime.

I added a shadow and animations for hover and active pseudoclasses to make it clear to the user, that the player cards can be clicked. I also added a small animation to the detail view when the submit button is clicked.

There is also a loading and an errored state, so cards are only shown once the actual data is loaded. You can add a setTimeout to usePlayers.ts to simulate slow loading in order to test the loading state.
