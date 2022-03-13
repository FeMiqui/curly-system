// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const usersTemplate = [
  {
    name: "User1",
    lastSeen: new Date('1/1/16'),
    status: {
      safe: true,
      comments: "Felling a lil bit hungry but safe"
    }
  },
  {
    name: "User2",
    lastSeen: new Date('1/1/16'),
    status: {
      safe:false,
      comments: "In need of some supplies"
    }
  },
  {
    name: "User3",
    lastSeen: new Date('1/1/16'),
    status: {
      safe: false,
      comments: "Need medication"
    }
  },
  {
    name: "User4",
    lastSeen: new Date('1/1/16'),
    status: {
      safe: true,
      comments: "Crossed the border already"
    }
  },
  {
    name: "User5",
    lastSeen: new Date('1/1/16'),
    status: {
      safe: true,
      comments: "On vacation"
    }
  },
];
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
