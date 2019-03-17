module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./private/api_key.json":
/*!******************************!*\
  !*** ./private/api_key.json ***!
  \******************************/
/*! exports provided: key, default */
/***/ (function(module) {

module.exports = {"key":"AIzaSyDzpwjWGeHZ8rtxnX9GYwk9aDW2nd_oZ7w"};

/***/ }),

/***/ "./private/credentials.json":
/*!**********************************!*\
  !*** ./private/credentials.json ***!
  \**********************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = {"type":"service_account","project_id":"vvhcs-dev","private_key_id":"b39284d51d8031f2a235b92dbc963b0c265065c0","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCMKAIUSp3dCQRX\n8iho59o24VtCg0TN5m84Po/qNaaGyPJ8lokaKrJ6MPTSzFoZhcsG7cF7HNlSLcN9\n5BuT3lHwEwvapZL6gqj0LCuiKkS+LetOFiEZGaF7blKUNiGBc96rmmD5DOnxixEz\nkQJK6wkwzWuoovzsADDNrRP5k96VIq+nOyj2cpbh4Nq6gMSsTy9BrmtnTAZwrik4\nV/CYcP/IY7ZnPoScE/Xc67/foQPE29PNSG9d5iEjkCNHiBKN/UtF/C4wrg2yXEUt\nfHFAnEJHe+5WPCzieml4e0uOP8JPG8qkcwJNRaVEn6sPMGoR8EPdbxwDSjB1D6eD\nroCZSd93AgMBAAECggEADm7sT+SjPyj3jor8iFkgCrjIaiAUjNOnLnaa4Xam8Ihv\nGE90TQKKoLS78Z1jxe8WSl9fpmsBIkpeMG+2O1MQwxVjCiA086FS/toxoCCUNbWK\n3t6+h9Qw4gIpdOPiLW+eRbO/OsaOrPYyTkonn0l3B9SPuq0WOMOIQxYI0ZHdwSPL\nSKhW/dr/Pjw4BEWd+U5jKHdIEb15t8WQRcZen6uQ0wu+8T8+K2pY7mCyYCgKict1\nQjrryJDiM83juQiB1ht7aGKUQDmZvuGA3bVHcgj3l/xr8YWC/7aY/DQN4tzRe6pF\no4rJcNUuGd5VSkJOjX9kEL2EJdDZHBmT4Hl8p59kaQKBgQC/72uJS6ssY1ukdWC+\n2DOM0M//FiSEtwqpaISM/7uDIT+8vzCPAHYBPMWp1cSZMVWzV/0eyy2GXkhTK/O6\nZ8YWXvwb5RIIwmiGkTHG8vYkarnnSFqlhkD+rT7rPxOJoBDQE7uJe8yUbq84LJhi\nwH46HkX+n2C7bh1xyBIQlKYqGwKBgQC68CdVsXSR270TWrjW8rR7Jj2mH7V3loqT\nmWhUw4bGQTwZog3n2ghg2s4YIVzdNiyuoy8+sFu4EMx6O9AD/mnTYqhZgBMMseyy\n62lO4Fo6zk4v8lNNu9O77+BQHZt/3OlSa/uY/6Zlfz/LqREmsehTQMnfeTETILao\ngwDgGgf11QKBgA9vG0ChGxSosLfa0HrIO+z45aDnkOwzI+JXi0EjV1rGE7AD183I\nBbU3w9VSYUrIUtHnI22UfQavEjXN9P1qVt15qeA8XWTi7TDVACG1a+Gly2kzwkZJ\nM3THTaXxHosUmgWBcLUvhVXySJjFzUMzo3Lc+FfvTQIFasy5f+phabM9AoGANt8p\nXKEDK5FJlbXKjeWeDovyCqJCHQFGWf7svfzKwcUCRC/qTwUT8oInfrPEU3aEdRqX\nUppnwcbEjpih/ZofLBpIekT60n4jkX1CYxG9yocmMjK6OxYIF6FYwYt/Sm/o2PWz\nW3ynNiG88yYET8xm+pEI8JzdR9URaLNTfXSGo6UCgYEAgwmSJisKGpcBlL7d1CoQ\n0Z6j0ZMJbQgACc85S5denhcd7hQGxkZceoPzXC0qEBc6nZ5urYDH5Ad5DG5M7n+b\nDHkZp8R24hPPpiGgamSjgBzJ9w01r/h+sUzDYvrG3hgbNejgftstOuiSaksICP2A\nxT1f28H0ybW59Q0qxKFMqeg=\n-----END PRIVATE KEY-----\n","client_email":"spreadsheets@vvhcs-dev.iam.gserviceaccount.com","client_id":"117365961667676001599","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/spreadsheets%40vvhcs-dev.iam.gserviceaccount.com"};

/***/ }),

/***/ "./src/Common/BasePropsClass.ts":
/*!**************************************!*\
  !*** ./src/Common/BasePropsClass.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BasePropsClass {
    constructor(props) {
        this.props = props;
    }
}
exports.default = BasePropsClass;


/***/ }),

/***/ "./src/Repositories/ActivitiesRepository.ts":
/*!**************************************************!*\
  !*** ./src/Repositories/ActivitiesRepository.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BasePropsClass_1 = __webpack_require__(/*! ../Common/BasePropsClass */ "./src/Common/BasePropsClass.ts");
const SpreadsheetRepository_1 = __webpack_require__(/*! ./SpreadsheetRepository */ "./src/Repositories/SpreadsheetRepository.ts");
class ActivitiesRepository extends BasePropsClass_1.default {
    constructor(props) {
        super(props);
        let spreadSheetId = this.props.spreadSheetId;
        console.log("Geting activities from spreadsheetrepository", spreadSheetId);
        this._spreadsheetRepository = new SpreadsheetRepository_1.default({
            spreadsheetId: this.props.spreadSheetId
        });
    }
    async getActivities() {
        let activities = [];
        try {
            let results = await this._spreadsheetRepository.get();
            results.shift();
            if (results.length >= 1) {
                activities = results.map(result => ({
                    Date: result[0],
                    Name: result[1],
                    StartTime: result[2],
                    SubscriptionType: result[3]
                }));
            }
            console.log("Activities from spread sheet repository", activities);
        }
        catch (ex) {
            console.log("Getting data error", ex);
        }
        return activities;
    }
}
exports.default = ActivitiesRepository;


/***/ }),

/***/ "./src/Repositories/SpreadsheetRepository.ts":
/*!***************************************************!*\
  !*** ./src/Repositories/SpreadsheetRepository.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BasePropsClass_1 = __webpack_require__(/*! ../Common/BasePropsClass */ "./src/Common/BasePropsClass.ts");
const googleapis_1 = __webpack_require__(/*! googleapis */ "googleapis");
const credentials = __webpack_require__(/*! ../../private/credentials.json */ "./private/credentials.json");
const apikey = __webpack_require__(/*! ../../private/api_key.json */ "./private/api_key.json");
class SpreadsheetRepository extends BasePropsClass_1.default {
    constructor(props) {
        super(props);
    }
    async get() {
        var jwt = this.getJwt();
        var apiKey = this.getApiKey();
        var spreadsheetId = this.props.spreadsheetId;
        var range = 'Activiteiten';
        const sheets = googleapis_1.google.sheets({ version: "v4" });
        console.log("Google API - Get sheets values - SpreadSheetId", this.props.spreadsheetId);
        let data = await sheets.spreadsheets.values.get({
            auth: jwt,
            key: apiKey,
            range: range,
            spreadsheetId: this.props.spreadsheetId,
        });
        console.log("SpreadSheet repository got this as data", data.data.values);
        return data.data.values;
    }
    append(row) {
    }
    getJwt() {
        const { client_email, private_key } = credentials;
        return new googleapis_1.google.auth.JWT(client_email, null, private_key, ['https://www.googleapis.com/auth/spreadsheets']);
    }
    getApiKey() {
        const { key } = apikey;
        return key;
    }
}
exports.default = SpreadsheetRepository;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ActivitiesRepository_1 = __webpack_require__(/*! ./Repositories/ActivitiesRepository */ "./src/Repositories/ActivitiesRepository.ts");
async function activitiesGet(req, res) {
    console.log("Getting activities");
    try {
        let activities;
        activities = await new ActivitiesRepository_1.default({
            spreadSheetId: "1pKgSrD2nPqn2eZYhbZRplnRQZ9aNhz872ADlOdnnZwA"
        }).getActivities();
        console.log("Got this as data.", activities);
        res.status(200).json(activities);
    }
    catch (_a) {
    }
}
exports.default = activitiesGet;
exports.activities = activitiesGet;


/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("googleapis");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map