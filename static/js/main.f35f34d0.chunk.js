(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{36:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),o=n(16),c=n.n(o),r=(n(36),n(8)),l=n(9),h=n(11),d=n(10),b=n(29),m=n.n(b),u=(n(75),function(e){var t=e.imageUrl,n=e.box;return Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{className:"absolute mt2",children:[Object(a.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),Object(a.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),p=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(a.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:" Sign Out "})}):Object(a.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(a.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:" Sign In "}),Object(a.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:" Register "})]})},g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://intense-crag-95588.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(a.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(i.a.Component),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://intense-crag-95588.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"name",name:"name",id:"name",onChange:this.onNameChange})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(i.a.Component),f=n(30),O=n.n(f),w=(n(76),function(){return Object(a.jsx)("div",{className:"ma4 mt0",children:Object(a.jsx)(O.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(a.jsx)("div",{className:"Tilt-inner pa3",children:Object(a.jsx)("img",{style:{paddingTop:"5px"},alt:"Logo",src:"data:image/png;base64,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"})})})})}),x=(n(77),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"f3",children:[" ","This brian is Magic, will detect faces"," "]}),Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(a.jsx)("input",{className:"f3 pa2 w-70 center",type:"text",onChange:t}),Object(a.jsx)("button",{className:"button1 w-30 grow f4 link ph3 pv2 dib white",onClick:n,children:"Detect"})]})})]})}),v=function(e){var t=e.name,n=e.entries;return Object(a.jsxs)("div",{className:"white f3",children:["".concat(t,", Your Current Rank is..."),Object(a.jsx)("div",{className:"white f1",children:n})]})},C=(n(78),new m.a.App({apiKey:"8c41775f64094f679f1b77e08b469cde"})),A={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},N=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),C.models.predict("a403429f2ddf4b49b307e318f00e528b",e.state.input).then((function(t){t&&fetch("https://intense-crag-95588.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(A):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=A,e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{}),Object(a.jsx)(x,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(a.jsx)(v,{name:this.state.user.name,entries:this.state.user.entries}),Object(a.jsx)(u,{box:this.state.box,imageUrl:this.state.imageUrl})]}):"signin"===this.state.route?Object(a.jsx)(g,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(a.jsx)(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(s.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};n(79);c.a.render(Object(a.jsx)(N,{}),document.getElementById("root")),S()}},[[80,1,2]]]);
//# sourceMappingURL=main.f35f34d0.chunk.js.map