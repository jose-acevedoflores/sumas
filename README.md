# SuMAS

SuMAS project landing page. To setup the project follow these steps:

```shell
 #from inside the `sumas` directory
 $ npm run install-azcopy
 $ npm run build
 $ npm run deploy-all
```

After successful deployment, navigate to [SuMAS](https://uprm-sumas.azurewebsites.net/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run install-azcopy`

Fetches the azcopy executable in order to run the `deploy-<somescript>` series of scripts

### `npm run deploy-all`

Deploys everything in the `build` folder to azure

### `npm run deploy-js`

Deploys everything in the `build/static` folder to azure

### `npm run deploy-locales`

Deploys everything in the `build/locales` folder to azure

### `npm run deploy-img`

Deploys everything in the `build/media/img` folder to azure
