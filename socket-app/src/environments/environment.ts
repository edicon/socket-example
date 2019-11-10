// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCpKEHzIPnVUFMIpJBB1fu20-0m2B8htzA',
    authDomain: 'mbm-dash.firebaseapp.com',
    databaseURL: 'https://mbm-dash.firebaseio.com',
    projectId: 'mbm-dash',
    storageBucket: 'mbm-dash.appspot.com',
    messagingSenderId: '1079498986469',
    appId: '1:1079498986469:web:0ae054570310a15ecf950c',
    measurementId: 'G-JZCPWRL4E1'
  },
  socket: {
    url: 'http://192.168.11.3:52200'
    // url: 'http://localhost:4444'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
