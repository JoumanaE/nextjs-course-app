// const {
//   PHASE_PRODUCTION_BUILD,
//   PHASE_DEVELOPMENT_SERVER,
// } = require("next/constants");

// // changing the configuration, depending on what Next.js is doing
// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("Im in dev mode here");
//     return defaultConfig;
//   }
//   return defaultConfig;
// };

// /*------------------------------------*/

//next config object

const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withNextEnv = nextEnv();
module.exports = withNextEnv();
