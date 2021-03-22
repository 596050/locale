## How to use

To run locally, navigate to the root of the project, then:

# Install

```bash
yarn install:all
```

# Run

```bash
yarn start
```

# Run production

```bash
yarn build:run
```

Then navigate to http://localhost:3000

## Purposes of some of the libraries used

> > Razzle - server side rendering https://razzlejs.org/

- Razzle is really nice because it provides ssr without too much configuration, when using Next and Gatsby there is quite a bit more

offline-plugin
razzle-plugin-serviceworker

- The Service Worker plugin is intended to cache the HTML shell and static assets and would allow for progressive web app features

> > SWR - data fetching https://swr.vercel.app/

- Awesome library which does a lot, it handles polling, deduplication and errors really well by default

> > React virtual https://github.com/tannerlinsley/react-virtual#installation

- Preventing the app from rendering all the items in the DOM is important for performance,
