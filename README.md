*Psst — looking for an app template? Go here --> [sveltejs/template](https://github.com/sveltejs/template)*

---

# svelte-component-template

An opinionated base for building shareable Svelte components.
It includes by default:

- Typescript
- svelte-testing-library & jest
- Storybook
- Rollup, configured to build .js (umd), .min.js (iife), .mjs (es)

[Demo](https://romdim.github.io/svelte-component-template/)

## Install / Clone

Use the big green button up & right that says `Use this template` to generate your own repo.

Or clone it with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/component-template my-new-component
cd my-new-component
```

Your component's source code lives in `src/Component.svelte`.

You can create a package that exports multiple components by adding them to the `src` directory and editing `src/index.ts` to reexport them as named exports.

## Setting up

- Run `yarn`
- Replace this README with your own
- Replace the `name, version, author, license, homepage, repository.url, bugs.url, keywords` from within the `package.json`.

## Testing

Comes with tests out of the box using svelte-testing-library + Jest.

To Run tests: `yarn test`

## Storybook
To serve development build: `yarn storybook`.
To build static storybook site (default output folder is /docs for easily sharing on github pages):
`yarn build-storybook`

## Based on [sveltejs/component-template](https://github.com/sveltejs/component-template) & [svelte-component-library-template](https://github.com/nirmaoz/svelte-component-library-template)

Added upon the great opinionated template from [nirmaoz](https://github.com/nirmaoz) to use Typescript + Storybook addons
