(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2970],{61038:function(e,n,t){"use strict";t.r(n);var s=t(92777),r=t(82262),o=t(45959),a=t(63553),i=t(37247),l=t(67294),c=t(6201),u=t(9240),h=t(88810),d=t(85893);function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,i.Z)(e);if(n){var r=(0,i.Z)(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return(0,a.Z)(this,t)}}var j=function(e){(0,o.Z)(t,e);var n=f(t);function t(){return(0,s.Z)(this,t),n.apply(this,arguments)}return(0,r.Z)(t,[{key:"render",value:function(){return(0,d.jsxs)(h.Z,{children:[(0,d.jsx)("h1",{children:"Styles"}),(0,d.jsxs)("p",{children:["Like our friends from"," ",(0,d.jsx)("a",{href:"https://material-ui-next.com/?ref=creativetim",target:"_blank",children:"Material UI"}),", we've used JSS syntax to style (restyle) the material ui components."]}),(0,d.jsxs)("p",{children:["A useful link about JSS is"," ",(0,d.jsx)("a",{href:"https://github.com/cssinjs?ref=creativetim",target:"_blank",children:"this one here"}),"."]}),(0,d.jsxs)("p",{children:["We've decided to use the ",(0,d.jsx)("code",{children:"makeStyles"})," function from Material-UI to override some of thier styles. This is a React HOOK functions, which means that it can only be called from another React HOOK or a simple function. Read more about it"," ",(0,d.jsx)("a",{href:"https://material-ui.com/styles/api/#makestyles-styles-options-hook",target:"_blank",children:"here"})]}),(0,d.jsxs)("p",{children:["All of the restyled components can be found in"," ",(0,d.jsx)("code",{children:"src/components"}),"."]}),(0,d.jsx)(c.Z,{language:"jsx",style:u.Z,children:"\u251c\u2500\u2500 components\n\xa0\xa0 \u251c\u2500\u2500 Badge\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Badge.js\n\xa0\xa0 \u251c\u2500\u2500 Card\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Card.js\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CardBody.js\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CardFooter.js\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CardHeader.js\n\xa0\xa0 \u251c\u2500\u2500 Clearfix\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Clearfix.js\n\xa0\xa0 \u251c\u2500\u2500 CustomButtons\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Button.js\n\xa0\xa0 \u251c\u2500\u2500 CustomDropdown\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomDropdown.js\n\xa0\xa0 \u251c\u2500\u2500 CustomInput\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomInput.js\n\xa0\xa0 \u251c\u2500\u2500 CustomLinearProgress\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomLinearProgress.js\n\xa0\xa0 \u251c\u2500\u2500 CustomTabs\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomTabs.js\n\xa0\xa0 \u251c\u2500\u2500 Footer\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Footer.js\n\xa0\xa0 \u251c\u2500\u2500 Grid\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 GridContainer.js\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 GridItem.js\n\xa0\xa0 \u251c\u2500\u2500 Header\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Header.js\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HeaderLinks.js\n\xa0\xa0 \u251c\u2500\u2500 InfoArea\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 InfoArea.js\n\xa0\xa0 \u251c\u2500\u2500 NavPills\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 NavPills.js\n\xa0\xa0 \u251c\u2500\u2500 PageChange\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 PageChange.js\n\xa0\xa0 \u251c\u2500\u2500 Pagination\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Pagination.js\n\xa0\xa0 \u251c\u2500\u2500 Parallax\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Parallax.js\n\xa0\xa0 \u251c\u2500\u2500 Snackbar\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 SnackbarContent.js\n\xa0\xa0 \u2514\u2500\u2500 Typography\n\xa0\xa0     \u251c\u2500\u2500 Danger.js\n\xa0\xa0     \u251c\u2500\u2500 Info.js\n\xa0\xa0     \u251c\u2500\u2500 Muted.js\n\xa0\xa0     \u251c\u2500\u2500 Primary.js\n\xa0\xa0     \u251c\u2500\u2500 Quote.js\n\xa0\xa0     \u251c\u2500\u2500 Small.js\n\xa0\xa0     \u251c\u2500\u2500 Success.js\n\xa0\xa0     \u2514\u2500\u2500 Warning.js"}),(0,d.jsxs)("p",{children:["If you go to any of our components you will see that somewhere at the beginning of the file we import ",(0,d.jsx)("code",{children:"makeStyles"})," from"," ",(0,d.jsx)("code",{children:"material-ui"}),", then we import from"," ",(0,d.jsx)("code",{children:"scr/assets/jss/*"})," the correspondig style for that component and after these imports, we use the ",(0,d.jsx)("code",{children:"makeStyles"})," ","function alongside our styles to compile them to jss from javascript objects."]}),(0,d.jsxs)("p",{children:["For a better way of understanding this variables, please take a look inside the ",(0,d.jsx)("code",{children:"src/assets/jss/material-dashboard-react"}),". You will see that all of the styles have a unique name that corresponds with the component name. You will also see that we've used some of that styles for ",(0,d.jsx)("code",{children:"src/views/*"})," as well."]})]})}}]),t}(l.Component);n.default=j},98948:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/styles",function(){return t(61038)}])}},function(e){e.O(0,[2827,1964,8810,9774,2888,179],(function(){return n=98948,e(e.s=n);var n}));var n=e.O();_N_E=n}]);