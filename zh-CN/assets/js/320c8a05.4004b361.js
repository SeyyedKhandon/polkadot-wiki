(self.webpackChunk=self.webpackChunk||[]).push([[5005],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76184:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>p});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],l={id:"maintain-networks",title:"Networks",sidebar_label:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",slug:"../maintain-networks"},s=void 0,c={unversionedId:"maintain/maintain-networks",id:"maintain/maintain-networks",isDocsHomePage:!1,title:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",source:"@site/../docs/maintain/maintain-networks.md",sourceDirName:"maintain",slug:"/maintain-networks",permalink:"/zh-CN/docs/maintain-networks",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-networks.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1634966829,formattedLastUpdatedAt:"2021/10/23",frontMatter:{id:"maintain-networks",title:"Networks",sidebar_label:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",slug:"../maintain-networks"},sidebar:"docs",previous:{title:"Set up a Full Node",permalink:"/zh-CN/docs/maintain-sync"},next:{title:"Set up Secure WebSocket for Remote Connections",permalink:"/zh-CN/docs/maintain-wss"}},d=[{value:"Polkadot networks",id:"polkadot-networks",children:[{value:"Polkadot Mainnet",id:"polkadot-mainnet",children:[],level:3},{value:"Kusama Canary Network",id:"kusama-canary-network",children:[],level:3},{value:"Westend Test Network",id:"westend-test-network",children:[{value:"Westend Faucet",id:"westend-faucet",children:[],level:4}],level:3},{value:"Differences",id:"differences",children:[],level:3}],level:2},{value:"Substrate Networks",id:"substrate-networks",children:[{value:"Flaming Fir",id:"flaming-fir",children:[],level:3}],level:2},{value:"Telemetry Dashboard",id:"telemetry-dashboard",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot is built on top of Substrate, a modular framework for blockchains. One feature of Substrate\nis to allow for connection to different networks using a single executable and configuring it with a\nstart-up flag. Here are some of the networks associated with Polkadot or Substrate that you may want\nto connect to and join."),(0,r.kt)("h2",{id:"polkadot-networks"},"Polkadot networks"),(0,r.kt)("p",null,"To connect to a Polkadot network please follow the ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-sync"},"instructions")," for installing\nthe Polkadot executable."),(0,r.kt)("h3",{id:"polkadot-mainnet"},"Polkadot Mainnet"),(0,r.kt)("p",null,"Currently Polkadot is built from the tip of master and is the default option when starting a node."),(0,r.kt)("p",null,"To start a Polkadot node, run the Polkadot binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot\n")),(0,r.kt)("p",null,"and you will connect and start syncing to Polkadot."),(0,r.kt)("p",null,"Check your node is connected by viewing it on\n",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#/Polkadot%20CC3"},"Telemetry")," (you can set a custom name by specifying\n",(0,r.kt)("inlineCode",{parentName:"p"},'--name "my custom name"'),")"),(0,r.kt)("h3",{id:"kusama-canary-network"},"Kusama Canary Network"),(0,r.kt)("p",null,"Kusama is a canary network and holds real economic value."),(0,r.kt)("p",null,"Run the Polkadot binary and specify ",(0,r.kt)("inlineCode",{parentName:"p"},"kusama")," as the chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=kusama\n")),(0,r.kt)("p",null,"and you will connect and start syncing to Kusama."),(0,r.kt)("p",null,"Check your node is connected by viewing it on\n",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#/Kusama%20CC3"},"Telemetry")," (you can set a custom name by specifying\n",(0,r.kt)("inlineCode",{parentName:"p"},'--name "my custom name"'),")"),(0,r.kt)("h3",{id:"westend-test-network"},"Westend Test Network"),(0,r.kt)("p",null,"Westend is the latest test network for Polkadot. The tokens on this network are called ",(0,r.kt)("em",{parentName:"p"},"Westies")," and\nthey purposefully hold no economic value."),(0,r.kt)("p",null,"Run the Polkadot binary and specify ",(0,r.kt)("inlineCode",{parentName:"p"},"westend")," as the chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=westend\n")),(0,r.kt)("p",null,"and you will connect and start syncing to Westend."),(0,r.kt)("p",null,"Check that your node is connected by viewing it on\n",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Westend"},"Telemetry")," (you can set a custom name by specifying\n",(0,r.kt)("inlineCode",{parentName:"p"},'--name "my custom name"'),")."),(0,r.kt)("h4",{id:"westend-faucet"},"Westend Faucet"),(0,r.kt)("p",null,"Follow the instruction ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-DOT#getting-westies"},"here")," for instructions on acquiring Westies."),(0,r.kt)("h3",{id:"differences"},"Differences"),(0,r.kt)("p",null,"Runtime differences (e.g. existential and multisignature deposit sizes) between the different\nnetworks can be found by doing a ",(0,r.kt)("inlineCode",{parentName:"p"},"diff")," between the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," of the repositories. For example,\nto compare the Polkadot and Westend runtimes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/paritytech/polkadot && cd polkadot/runtime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ls")," - show the available runtimes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diff polkadot/src/lib.rs westend/src/lib.rs"))),(0,r.kt)("p",null,"You can also paste the runtimes\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/src/lib.rs"},"Polkadot"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/westend/src/lib.rs"},"Westend"),") into a\nweb-based diff tool like ",(0,r.kt)("a",{parentName:"p",href:"https://www.diffchecker.com/"},"Diffchecker")," if you're not comfortable with\nthe CLI."),(0,r.kt)("h2",{id:"substrate-networks"},"Substrate Networks"),(0,r.kt)("p",null,"To connect to a Substrate public network, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/getting-started/overview/"},"instructions")," for\ninstalling the Substrate executable first."),(0,r.kt)("h3",{id:"flaming-fir"},"Flaming Fir"),(0,r.kt)("p",null,"Flaming Fir is the public Substrate test network. It contains some pallets that will not be included\nin the Polkadot runtime."),(0,r.kt)("p",null,"Flaming Fir is built from the tip of master and is the default option when running the Substrate\nexecutable."),(0,r.kt)("p",null,"Run Substrate without a flag or explicitly state ",(0,r.kt)("inlineCode",{parentName:"p"},"fir"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"substrate --chain fir\n")),(0,r.kt)("p",null,"and you will connect and start syncing Flaming Fir."),(0,r.kt)("h2",{id:"telemetry-dashboard"},"Telemetry Dashboard"),(0,r.kt)("p",null,"If you connect to the public networks, the default configuration for your node will connect it to\nthe public ",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/"},"Telemetry")," service."),(0,r.kt)("p",null,"You can verify that your node is connected by navigating to the correct network on the dashboard and\nfinding the name of your node."),(0,r.kt)("p",null,"There is a built-in search function on the nodes page. Simply start typing keystrokes in the main\nwindow to make it available."))}p.isMDXComponent=!0}}]);