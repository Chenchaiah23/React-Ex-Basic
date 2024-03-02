#Project Setup:
##Online :
By default app status set to online in .env file. App fetches live swiggy data.
This requires a chrome extension "Allow CORS: Access-Control-Allow-Origin" to fetch swiggy live data.
Install CORS extension and turn it on to run app.
Start app : npm start
Access app : http://localhost:1234

##Offline:
We can run the app without chrome extension using mocked data inside root "data" folder.
Set APP_START = "offline" in .env file
To serve local data run "node OfflineData.js" in project root dir.
Start app: npm start
Access app : http://localhost:1234

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
