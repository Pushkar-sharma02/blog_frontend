exports.id=868,exports.ids=[868],exports.modules={6636:(e,t,r)=>{let n=r(7147),o=r(1017),i=r(2037),s=r(6113),a=r(1564).version,l=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function u(e){console.log(`[dotenv@${a}][DEBUG] ${e}`)}function c(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function d(e){let t=null;if(e&&e.path&&e.path.length>0){if(Array.isArray(e.path))for(let r of e.path)n.existsSync(r)&&(t=r.endsWith(".vault")?r:`${r}.vault`);else t=e.path.endsWith(".vault")?e.path:`${e.path}.vault`}else t=o.resolve(process.cwd(),".env.vault");return n.existsSync(t)?t:null}function p(e){return"~"===e[0]?o.join(i.homedir(),e.slice(1)):e}let f={configDotenv:function(e){let t;let r=o.resolve(process.cwd(),".env"),i="utf8",s=!!(e&&e.debug);e&&e.encoding?i=e.encoding:s&&u("No encoding is specified. UTF-8 is used by default");let a=[r];if(e&&e.path){if(Array.isArray(e.path))for(let t of(a=[],e.path))a.push(p(t));else a=[p(e.path)]}let l={};for(let r of a)try{let t=f.parse(n.readFileSync(r,{encoding:i}));f.populate(l,t,e)}catch(e){s&&u(`Failed to load ${r} ${e.message}`),t=e}let c=process.env;return(e&&null!=e.processEnv&&(c=e.processEnv),f.populate(c,l,e),t)?{parsed:l,error:t}:{parsed:l}},_configVault:function(e){console.log(`[dotenv@${a}][INFO] Loading env from encrypted .env.vault`);let t=f._parseVault(e),r=process.env;return e&&null!=e.processEnv&&(r=e.processEnv),f.populate(r,t,e),{parsed:t}},_parseVault:function(e){let t;let r=d(e),n=f.configDotenv({path:r});if(!n.parsed){let e=Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);throw e.code="MISSING_DATA",e}let o=c(e).split(","),i=o.length;for(let e=0;e<i;e++)try{let r=o[e].trim(),i=function(e,t){let r;try{r=new URL(t)}catch(e){if("ERR_INVALID_URL"===e.code){let e=Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw e.code="INVALID_DOTENV_KEY",e}throw e}let n=r.password;if(!n){let e=Error("INVALID_DOTENV_KEY: Missing key part");throw e.code="INVALID_DOTENV_KEY",e}let o=r.searchParams.get("environment");if(!o){let e=Error("INVALID_DOTENV_KEY: Missing environment part");throw e.code="INVALID_DOTENV_KEY",e}let i=`DOTENV_VAULT_${o.toUpperCase()}`,s=e.parsed[i];if(!s){let e=Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${i} in your .env.vault file.`);throw e.code="NOT_FOUND_DOTENV_ENVIRONMENT",e}return{ciphertext:s,key:n}}(n,r);t=f.decrypt(i.ciphertext,i.key);break}catch(t){if(e+1>=i)throw t}return f.parse(t)},config:function(e){if(0===c(e).length)return f.configDotenv(e);let t=d(e);if(!t){var r;return r=`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`,console.log(`[dotenv@${a}][WARN] ${r}`),f.configDotenv(e)}return f._configVault(e)},decrypt:function(e,t){let r=Buffer.from(t.slice(-64),"hex"),n=Buffer.from(e,"base64"),o=n.subarray(0,12),i=n.subarray(-16);n=n.subarray(12,-16);try{let e=s.createDecipheriv("aes-256-gcm",r,o);return e.setAuthTag(i),`${e.update(n)}${e.final()}`}catch(n){let e=n instanceof RangeError,t="Invalid key length"===n.message,r="Unsupported state or unable to authenticate data"===n.message;if(e||t){let e=Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw e.code="INVALID_DOTENV_KEY",e}if(r){let e=Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw e.code="DECRYPTION_FAILED",e}throw n}},parse:function(e){let t;let r={},n=e.toString();for(n=n.replace(/\r\n?/mg,"\n");null!=(t=l.exec(n));){let e=t[1],n=t[2]||"",o=(n=n.trim())[0];n=n.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),'"'===o&&(n=(n=n.replace(/\\n/g,"\n")).replace(/\\r/g,"\r")),r[e]=n}return r},populate:function(e,t,r={}){let n=!!(r&&r.debug),o=!!(r&&r.override);if("object"!=typeof t){let e=Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw e.code="OBJECT_REQUIRED",e}for(let r of Object.keys(t))Object.prototype.hasOwnProperty.call(e,r)?(!0===o&&(e[r]=t[r]),n&&(!0===o?u(`"${r}" is already defined and WAS overwritten`):u(`"${r}" is already defined and was NOT overwritten`))):e[r]=t[r]}};e.exports.configDotenv=f.configDotenv,e.exports._configVault=f._configVault,e.exports._parseVault=f._parseVault,e.exports.config=f.config,e.exports.decrypt=f.decrypt,e.exports.parse=f.parse,e.exports.populate=f.populate,e.exports=f},8585:(e,t,r)=>{"use strict";var n=r(1085);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}})},1085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return s},RedirectType:function(){return n.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(3953),o=r(6399);class i extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class s extends URLSearchParams{append(){throw new i}delete(){throw new i}set(){throw new i}sort(){throw new i}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return v},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return d},permanentRedirect:function(){return c},redirect:function(){return u}});let o=r(4580),i=r(2934),s=r(8586),a="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=s.RedirectStatusCode.TemporaryRedirect);let n=Error(a);n.digest=a+";"+t+";"+e+";"+r+";";let i=o.requestAsyncStorage.getStore();return i&&(n.mutableCookies=i.mutableCookies),n}function u(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),i=Number(o);return t===a&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(i)&&i in s.RedirectStatusCode}function p(e){return d(e)?e.digest.split(";",3)[2]:null}function f(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function v(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:e=>{"use strict";e.exports=JSON.parse('{"name":"dotenv","version":"16.4.5","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"types":"./lib/main.d.ts","require":"./lib/main.js","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"funding":"https://dotenvx.com","keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3","decache":"^4.6.1","sinon":"^14.0.1","standard":"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0","tap":"^16.3.0","tar":"^6.1.11","typescript":"^4.8.4"},"engines":{"node":">=12"},"browser":{"fs":false}}')}};