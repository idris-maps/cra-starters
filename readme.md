# Starters for `@react-components-attempt` testing

## With `create-react-app`

```
npx degit idris-maps/rca-starter/cra-p my-app
cd my-app
npm install
npm run start
```

**Warning** `react-scripts` insists on setting `jsx` to `react-jsx` in `tsconfig`, you need to set it back to `jsx` manually when you get strange typescript errors.

## With `rollup`

```
npx degit idris-maps/rca-starter/react-rollup my-app
cd my-app
npm install
npm run dev
```
