# e2e tests template
* Adjust the package.json for the new project: 
    * name
    * url
    * homepage
    * if necessary adjust the requirement versions.
* Start your Shopware6 environment in productive mode: **.env** file: ```APP_ENV=prod```
* Go to the directory for the domain *(Storefront / Administration)* you want to execute the e2e tests. **Like:** Resources/app/*(Storefront/Administration)*/test/e2e
* Here you execute: ```npm install```
* For development execute: ```npm run open```
* For test execution only execute: ```npm run cypress:run``` 