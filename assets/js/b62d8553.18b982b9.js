(self.webpackChunkinstant_hie_docs=self.webpackChunkinstant_hie_docs||[]).push([[889],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return i}});var a=n(2263),o=n(3919);function r(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,l=void 0!==i&&i,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),o=n(944),r=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,h=(0,o.Z)(),k=h.tabGroupChoices,f=h.setTabGroupChoices,g=(0,a.useState)(p),b=g[0],v=g[1],y=a.Children.toArray(e.children),w=[];if(null!=m){var N=k[m];null!=N&&N!==b&&u.some((function(e){return e.value===N}))&&v(N)}var I=function(e){var t=e.currentTarget,n=w.indexOf(t),a=u[n].value;v(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,o,r,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&r<=c&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:I,onClick:I},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),o=n(9443);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2071:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=n(1395),l=n(8215),s=n(4996),c={id:"core",title:"Core Package",sidebar_label:"Core",keywords:["Instant OpenHIE","Core","Package"],description:"The core package of the Instant OpenHIE"},p={unversionedId:"packages/core",id:"packages/core",isDocsHomePage:!1,title:"Core Package",description:"The core package of the Instant OpenHIE",source:"@site/docs/packages/core.mdx",sourceDirName:"packages",slug:"/packages/core",permalink:"/instant/docs/packages/core",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/packages/core.mdx",version:"current",sidebar_label:"Core",frontMatter:{id:"core",title:"Core Package",sidebar_label:"Core",keywords:["Instant OpenHIE","Core","Package"],description:"The core package of the Instant OpenHIE"},sidebar:"docs",previous:{title:"How to setup Instant OpenHIE on Windows with WSL",permalink:"/instant/docs/how-to/setup-instant-on-windows-wsl"},next:{title:"Facility-Registry",permalink:"/instant/docs/packages/facility"}},u=[{value:"Package functionality",id:"package-functionality",children:[]},{value:"Deployment strategy",id:"deployment-strategy",children:[]},{value:"Core Package Dev guide",id:"core-package-dev-guide",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),(0,r.kt)("p",null,"The Instant OpenHIE Core Package is the common base of the Instant OpenHIE system and it provides fundamental components that other packages may build off of."),(0,r.kt)("p",null,"This package consists of two components that support all other packages, these are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Interoperability Layer - ",(0,r.kt)("a",{parentName:"li",href:"http://openhim.org/"},"OpenHIM")),(0,r.kt)("li",{parentName:"ul"},"A FHIR Server - ",(0,r.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"))),(0,r.kt)("h2",{id:"package-functionality"},"Package functionality"),(0,r.kt)("p",null,"This package sets up containers that support the OpenHIM as well as the HAPI FHIR server.\nIt also configures the OpenHIM with a ",(0,r.kt)("em",{parentName:"p"},"HAPI FHIR channel"),". This allows authorised data transfer to the HAPI FHIR server through the OpenHIM."),(0,r.kt)("p",null,"An example of what the core package includes, as well as how a sample package (in this case the Health-Workforce package) may use the services the core package provides, is shown below."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{alt:"Package architecture",src:(0,s.Z)("img/instant-ohie-generic-arch.png")})),(0,r.kt)("p",null,"To use the HAPI FHIR server from an external point of care application, you can access it through the OpenHIM at a URL like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl <openhim_core_transaction_api_url>/fhir/Patient\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("strong",{parentName:"p"},"openhim_core_transaction_api_url")," is displayed in the output when starting up Instant OpenHIE")),(0,r.kt)("p",null,"Accessing the services created by this package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenHIM"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Console: Displayed in the output during startup"),(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"mailto:root@openhim.org"},"root@openhim.org"))),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("strong",{parentName:"li"},"instant101")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HAPI FHIR"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This service should not be publicly accessible and ",(0,r.kt)("strong",{parentName:"li"},"only accessed via the Interoperability Layer"))))),(0,r.kt)("h2",{id:"deployment-strategy"},"Deployment strategy"),(0,r.kt)("p",null,"The OpenHIM was already dockerised so we were able to re-use those images for our work in the core package.\nHAPI FHIR didn't have official dockerfiles available, however, several community contributed options existed. We chose to use what seemed like the most robust option."),(0,r.kt)("p",null,"We supplied Docker Compose files for the setup and configuration of these applications. We chose to split the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.*.yml")," files into three concerns:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Main")," ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file - sets up the base applications"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Config")," ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.config.yml")," file - configures the OpenHIM with a channel route to HAPI FHIR"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dev")," ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.dev.yml")," file - exposes all open port to the host for easy debugging. This should not be used a production environment")),(0,r.kt)("p",null,"For Kubernetes, we created deployment and service resource files for each component of each application.\nThe setup is orchestrated by a ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomization.yml")," file for easy deployment.\nTo import configuration into the OpenHIM, we use job resources that only execute when the OpenHIM core is up.\nThis is done with an ",(0,r.kt)("inlineCode",{parentName:"p"},"init container")," which waits for the OpenHIM core port to become available."),(0,r.kt)("p",null,"For importing config, we use a custom image which is just a node.js container that can run node.js scripts that we define.\nIt also has a ",(0,r.kt)("inlineCode",{parentName:"p"},"wait-on")," module installed to allow it to wait on certain ports being available before executing."),(0,r.kt)("h2",{id:"core-package-dev-guide"},"Core Package Dev guide"),(0,r.kt)("p",null,"For testing purposes, this package can be run independently. Below are some notes of how to do this.\nThe recommended way to run Instant OpenHIE is described ",(0,r.kt)("a",{parentName:"p",href:"/instant/docs/introduction/getting-started"},"here"),"."),(0,r.kt)("p",null,"Select a deployment target below and follow the getting started steps in setting up this package."),(0,r.kt)(i.Z,{defaultValue:"dockerCompose",values:[{label:"Docker Compose",value:"dockerCompose"},{label:"Kubernetes",value:"kubernetes"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"dockerCompose",mdxType:"TabItem"},(0,r.kt)("p",null,"Before proceeding, ensure that you are in the directory (",(0,r.kt)("inlineCode",{parentName:"p"},"core/docker/"),") containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," script."),(0,r.kt)("p",null,"From the working directory, execute our ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," script.\nThis will create all the services and print out their logs in the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("h4",{id:"useful-compose-flags"},"Useful compose flags"),(0,r.kt)("p",null,"Some additional flags can be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," command making it easier to work with."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d"),": Run the services in a detached mode. This means that when you close or exit your terminal, the services will still be running in the background."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),": Specify the location of the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose")," file to be executed. Omitting this flag will look for the default ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--force-recreate"),": This will force the container/image to be re-created if a newer version is found. This is useful when a new image has been released but not yet pulled onto the host machine.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d --force-recreate\n")),(0,r.kt)("h4",{id:"environment-configuration"},"Environment configuration"),(0,r.kt)("p",null,"The default script might not suit the type of environment you want to run.\nTherefore there are additional ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," files available for fine-tuning environment configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"docker-compose.yml"),": Main ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," script to create the services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"docker-compose.dev.yml"),": Development ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," script to override some of the default configurations."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Development environment only")," as this exposes service ports.")))),(0,r.kt)("h5",{id:"development-configuration"},"Development configuration"),(0,r.kt)("p",null,"Can specify three ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.config.yml up -d\n")),(0,r.kt)("h5",{id:"production-like-configuration"},"Production-like configuration"),(0,r.kt)("p",null,"Should use only two ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f docker-compose.config.yml up -d\n"))),(0,r.kt)(l.Z,{value:"kubernetes",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are working with multiple cluster hosting clients you may need to switch cluster context for your deployment. See the below commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl config get-contexts\nkubectl config use-context <context-name>\n")),(0,r.kt)("h4",{id:"minikube-local"},"Minikube (local)"),(0,r.kt)("p",null,"For the Kubernetes deployment to work as expected, we need to ensure we have ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube")," installed on our local machine running the deployment.\nFollow these steps to ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"install minikube")),(0,r.kt)("p",null,"Once installed, we can start the minikube service by executing the below command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"minikube start --cpus 4 --memory 8192\n")),(0,r.kt)("p",null,"This also updates the VM settings to make use of 4 CPU's and 8GB of RAM, instead of the default 2 CPU's and 4GB of RAM"),(0,r.kt)("h4",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Useful Links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/cheatsheets/getting-started-with-kubernetes-a-kubectl-cheat-sheet"},"Kubectl Cheat Sheet"))),(0,r.kt)("p",null,"Before we proceed with creating our ",(0,r.kt)("inlineCode",{parentName:"p"},"Core Package")," services, we need to ensure we are in the correct directory containing our bash setup scripts."),(0,r.kt)("p",null,"Once you are in the correct working directory (",(0,r.kt)("inlineCode",{parentName:"p"},"core/kubernetes"),") we can proceed to create our core Instant OpenHIE deployment with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./main/k8s.sh up\n")),(0,r.kt)("p",null,"The OpenHIM console url will be displayed in the terminal output when the script completes. The Url may take a few minutes to become active as the pod may not be fully initialized yet."),(0,r.kt)("p",null,"This bash script will apply the kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," file which controls the ",(0,r.kt)("inlineCode",{parentName:"p"},"Core Package")," components (i.e. OpenHIM and HAPI-FHIR)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"On first run, the setup may take up to 10 minutes as the Docker images for each component will need to be pulled. This won't happen on future runs.")),(0,r.kt)("h4",{id:"view-running-kubernetes-resources"},"View running Kubernetes resources"),(0,r.kt)("p",null,"Execute the below commands to see the running Kubernetes resources and the state that they are in."),(0,r.kt)("p",null,"To display all resource: (Some new resources are not listed here)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get all --all-namespaces\n")),(0,r.kt)("p",null,"To tear down this deployment, use the opposing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./main/k8s.sh down\n")),(0,r.kt)("p",null,"To completely remove all project components, use the following option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./main/k8s.sh destroy\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"initial-openhim-config"},"Initial OpenHIM Config"),(0,r.kt)("p",null,"We have included a useful set of scripts to initialize the OpenHIM and set it up to communicate with the HAPI-FHIR server.\nThis will change the default user's password of the OpenHIM to ",(0,r.kt)("inlineCode",{parentName:"p"},"instant101"),", and create a channel configured to route traffic to the HAPI-FHIR instance.\nFrom the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes")," directory, use the following command to implement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./importer/k8s.sh up\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These scripts can be duplicated and modified to implement custom imports")),(0,r.kt)("p",null,"To clean up the remaining job and pods from a successful setup, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./importer/k8s.sh clean\n")),(0,r.kt)("p",null,"Once the config is done HAPI FHIR will be accessible on: ",(0,r.kt)("a",{parentName:"p",href:"https://OPENHIM_CORE_HOSTNAME/fhir/"},"https://OPENHIM_CORE_HOSTNAME/fhir/")),(0,r.kt)("p",null,"You can test that the OpenHIM is routing requests to HAPI FHIR by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./test.sh <OPENHIM_CORE_HOSTNAME>\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"development-mode-for-exposed-services"},"Development mode for exposed services"),(0,r.kt)("p",null,"To run in development mode, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./dev/k8s.dev.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In this mode the OpenHIM mongo database, HAPI FHIR server, and the MySQL database can be accessed directly from their urls.")),(0,r.kt)("hr",null))))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);