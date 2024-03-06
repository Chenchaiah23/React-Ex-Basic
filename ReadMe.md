# Project Setup:
### Online :
By default app status set to online in .env file. App fetches live swiggy data.<br/>
This requires a chrome extension "Allow CORS: Access-Control-Allow-Origin" to fetch swiggy live data.<br/>
Install CORS extension and turn it on to run app.<br/>

Start app : <br/>
npm install<br/>
npm start<br/>
Access app : http://localhost:1234<br/>

### Offline:
We can run the app without chrome extension using mocked data inside root "data" folder.<br/>
Set APP_START = "offline" in .env file<br/>
To serve local data run "node OfflineData.js" in project root dir.<br/>
Start app: <br/>
npm install<br/>
npm start<br/>
Access app : http://localhost:1234<br/>

#parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement(Uses File watching Algorithm written in c++)
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking - remove unused code
- Different dev and prod bundles

## Redux

- Install @reduxjs/toolkit and react-redux<br/>
- Build our store<br/>
- Connect out store to app<br/>
- create Slice<br/>
- dispatch action<br/>
- Reducer<br/>
- Selector<br/>

## Types of Developer Testing:
- Unit Testing<br/>
- Integration Testing<br/>
- e2e Testing<br/>

## Setting up Test lib
- Install Raact Testing Library
- Install jest
- Install Babel dependencies
- Configure babel.config.js
- Configure parcel config file to disable default babel transpilation
- Jest configuration : npx jest --init
- Install jsdom library 
- Install @babel/preset-react -  to make JSX work in test cases
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom - toBeInTheDocument()
- Mock images in test files using below config in jest.config.js
 moduleNameMapper: {<br/>
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":<br/>
      "<rootDir>/src/__mocks__/fileMock.js",<br/>
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",<br/>
  },<br/>
  
  

