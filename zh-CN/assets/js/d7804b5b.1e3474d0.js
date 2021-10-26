(self.webpackChunk=self.webpackChunk||[]).push([[2989],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(a),p=r,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57950:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>h,default:()=>u});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i=["components"],s={id:"learn-security",title:"Security of the network",sidebar_label:"Security of the network",description:"Learn about pooled security and how it is maintained.",slug:"../learn-security"},c=void 0,l={unversionedId:"learn/learn-security",id:"learn/learn-security",isDocsHomePage:!1,title:"Security of the network",description:"Learn about pooled security and how it is maintained.",source:"@site/../docs/learn/learn-security.md",sourceDirName:"learn",slug:"/learn-security",permalink:"/zh-CN/docs/learn-security",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-security.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1634966829,formattedLastUpdatedAt:"2021/10/23",frontMatter:{id:"learn-security",title:"Security of the network",sidebar_label:"Security of the network",description:"Learn about pooled security and how it is maintained.",slug:"../learn-security"},sidebar:"docs",previous:{title:"DOT",permalink:"/zh-CN/docs/learn-DOT"},next:{title:"Polkadot Consensus",permalink:"/zh-CN/docs/learn-consensus"}},h=[{value:"Shared security",id:"shared-security",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"FAQ",id:"faq",children:[{value:"Is security correlated to the number of validators? What about the number of parachains?",id:"is-security-correlated-to-the-number-of-validators-what-about-the-number-of-parachains",children:[],level:3},{value:"Will parachains ever need their own security? In what scenarios do parachains need their own security?",id:"will-parachains-ever-need-their-own-security-in-what-scenarios-do-parachains-need-their-own-security",children:[],level:3}],level:2}],d={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"shared-security"},"Shared security"),(0,o.kt)("p",null,"Shared security, sometimes referred in documentation as ",(0,o.kt)("em",{parentName:"p"},"pooled security"),", is one of the unique\nvalue propositions for chains considering to become a ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-parachains"},"parachain")," and join the\nPolkadot network. On a high level, shared security means that all parachains that are connected to\nthe Polkadot Relay Chain by leasing a parachain slot will benefit from the economic security\nprovided by the Relay Chain ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-validator"},"validators"),"."),(0,o.kt)("p",null,"The notion of shared security is different from interchain protocols that build on an architecture\nof bridges. For bridge protocols, each chain is considered sovereign and must maintain its own\nvalidator set and economic security. One concern in these protocols is on the point of scalability\nof security. For example, one suggestion to scale blockchains is that of ",(0,o.kt)("em",{parentName:"p"},"scale by altcoins,")," which\nsuggests that transaction volumes will filter down to lower market cap altcoins as the bigger ones\nfill their blocks. A major flaw in this idea is that the lower market cap coins will have less\neconomic security attached, and be easier to attack. A real life example of a 51% attack occurred\nrecently (\n",(0,o.kt)("a",{parentName:"p",href:"https://cointelegraph.com/news/ethereum-classic-51-attack-the-reality-of-proof-of-work"},"Ethereum Classic attack on January 10"),"\n), in which an unknown attacker double spent 219_500 ETC (~1.1 million USD). This was followed by\ntwo more 51% attacks on ETC."),(0,o.kt)("p",null,"Polkadot overcomes security scalability concerns since it gravitates all the economic incentives to\nthe Relay Chain and allows the parachains to tap into stronger guarantees at genesis. Sovereign\nchains must expend much more effort to grow the value of their coin so that it is sufficiently secure against well-funded attackers."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's compare the standard sovereign security model that exists on current proof-of-work (PoW)\nchains to that of the shared security of Polkadot. Chains that are secured by their own security\nmodel like Bitcoin, Zcash, Ethereum, and their derivatives all must bootstrap their own independent\nnetwork of miners and maintain a competitive portion of honest hashing power. Since mining is\nbecoming a larger industry that increasingly centralizes on key players, it is becoming more real\nthat a single actor may control enough hash power to attack a chain."),(0,o.kt)("p",null,"This means that smaller chains that cannot maintain a secure amount of hash power on their networks\ncould potentially be attacked by a large mining cartel at the simple whim of redirecting its hash\npower away from Bitcoin and toward a new and less secure chain.\n",(0,o.kt)("a",{parentName:"p",href:"https://www.crypto51.app"},"51% attacks are viable today")," with attacks having been reported on\nEthereum Classic (see above),\n",(0,o.kt)("a",{parentName:"p",href:"https://coincentral.com/verge-suffers-51-attack-hard-forks-in-response/"},"Verge"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://bitcoingold.org/responding-to-attacks/"},"Bitcoin Gold"),", and other cryptocurrencies."),(0,o.kt)("p",null,"On Polkadot, this disparity between chain security will not be present. When a parachain connects to\nPolkadot, the Relay Chain validator set become the securers of that parachain's state transitions.\nThe parachain will only have the overhead of needing to run a few collator nodes to keep the\nvalidators informed with the latest state transitions and proofs/witness. Validators will then check\nthese for the parachains to which they are assigned. In this way, new parachains instantly benefit\nfrom the overall security of Polkadot even if they have just been launched."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"is-security-correlated-to-the-number-of-validators-what-about-the-number-of-parachains"},"Is security correlated to the number of validators? What about the number of parachains?"),(0,o.kt)("p",null,"Security is independent of the number of parachains that are connected to the Polkadot Relay Chain.\nThe correlation of security and the number of validators exists as the higher number of validators\nwill give the network stronger decentralization properties and make it harder to try to take down.\nHowever, the biggest indicator of the security of the network is the economic signal of the number\nof DOT that are bonded and staked. The greater the number of DOT staked by honest validators and\nnominators, the higher the minimum amount of DOT an attacker would need to acquire a validator slot."),(0,o.kt)("h3",{id:"will-parachains-ever-need-their-own-security-in-what-scenarios-do-parachains-need-their-own-security"},"Will parachains ever need their own security? In what scenarios do parachains need their own security?"),(0,o.kt)("p",null,"Most parachains will not need to worry about their own security, since all state transitions will be\nsecured by the Polkadot Relay Chain validator set. However, in some cases (which are considered more\nexperimental), parachains may require their own security. In general, these cases will revolve\naround lack of data available to Relay Chain validators."),(0,o.kt)("p",null,"One example is if the state transition function is some succinct or zero-knowledge proof, the\nparachain would be responsible for keeping its data available as the Relay Chain won't have it.\nAdditionally, for chains with their own consensus, like the one that enables fast payments on\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sf5GMDlG7Uk"},"Blink Network"),", there would probably need to be a\nByzantine agreement between stakers before a parachain block is valid. The agreement would be\nnecessary because the data associated with the fast consensus would be unknown to Relay Chain\nvalidators."))}u.isMDXComponent=!0}}]);