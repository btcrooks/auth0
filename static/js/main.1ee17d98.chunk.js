(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(31)},22:function(e,a,t){},24:function(e,a,t){},26:function(e,a,t){e.exports=t.p+"static/media/harry.ba97428e.png"},29:function(e,a,t){e.exports=t.p+"static/media/celebrations.137bf0b6.jpg"},31:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(14),l=t.n(r),i=(t(22),t(3)),o=t(4),c=t(6),m=t(5),d=t(7),u=(t(24),t(33)),h=t(34),p=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{class:"logo__brand-logo"},n.a.createElement("img",{src:t(26)}))}}]),a}(s.Component),g=t(2),b=t(32);function E(e){return e.message?n.a.createElement("div",{className:"input__error-message"},e.message):n.a.createElement("div",{className:"input__error-message"})}s.Component,s.Component,s.Component;var v=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(b.a,{to:"/",className:"btn__link btn__link--social-login"},function(e){switch(e.toLowerCase()){case"facebook":return n.a.createElement("div",{className:"btn btn__social-login btn__social-login--facebook"},e);case"google":return n.a.createElement("div",{className:"btn btn__social-login btn__social-login--google"},e);default:return null}}(this.props.name))}}]),a}(s.Component);var _=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={emailValue:"",passwordValue:"",emailErrorMessage:"",passwordErrorMessage:"",toggleValue:"Show",toggleState:"password"},t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t.handleEmailChange=t.handleEmailChange.bind(Object(g.a)(Object(g.a)(t))),t.handlePasswordChange=t.handlePasswordChange.bind(Object(g.a)(Object(g.a)(t))),t.validateEmail=t.validateEmail.bind(Object(g.a)(Object(g.a)(t))),t.validatePassword=t.validatePassword.bind(Object(g.a)(Object(g.a)(t))),t.handleToggle=t.handleToggle.bind(Object(g.a)(Object(g.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?(this.setState({emailErrorMessage:""}),!0):(this.setState({emailErrorMessage:"Please enter a valid email address"}),!1)}},{key:"validatePassword",value:function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(e.target.value)?(this.setState({passwordErrorMessage:""}),!0):(this.setState({passwordErrorMessage:"Please enter a valid password"}),!1)}},{key:"handleSubmit",value:function(e){e.preventDefault();/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.emailValue)&&/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.state.passwordValue)?(console.log("Correct. Logging in..."),this.props.history.push("/login-success")):(console.log("Try again"),this.setState({emailErrorMessage:"Please enter a valid email address"}),this.setState({passwordErrorMessage:"Please enter a valid password."}))}},{key:"handleEmailChange",value:function(e){this.setState({emailValue:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({passwordValue:e.target.value})}},{key:"handleToggle",value:function(e){"Show"===this.state.toggleValue?this.setState({toggleValue:"Hide",toggleState:"text"}):this.setState({toggleValue:"Show",toggleState:"password"})}},{key:"render",value:function(){return n.a.createElement("div",{className:"login"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"input__container"},n.a.createElement("div",{className:"input__label"},n.a.createElement("label",{for:"fname"},"First Name")),n.a.createElement("input",{id:"fname",type:"text",className:"input input__field "+(this.state.emailErrorMessage?"input--error":""),placeholder:"First Name"}),n.a.createElement("div",{className:"input__error-message"},this.state.emailErrorMessage)),n.a.createElement("div",{className:"input__container"},n.a.createElement("div",{className:"input__label"},n.a.createElement("label",{for:"lname"},"Last Name")),n.a.createElement("input",{id:"lname",type:"text",className:"input input__field "+(this.state.emailErrorMessage?"input--error":""),placeholder:"Last Name"}),n.a.createElement("div",{className:"input__error-message"},this.state.emailErrorMessage)),n.a.createElement("div",{className:"input__container"},n.a.createElement("div",{className:"input__label"},n.a.createElement("label",{for:"emailAddress"},"Email Address")),n.a.createElement("input",{id:"emailAddress",type:"text",className:"input input__field "+(this.state.emailErrorMessage?"input--error":""),placeholder:"janedoe@email.com",onChange:this.handleEmailChange,onBlur:this.validateEmail}),n.a.createElement("div",{className:"input__error-message"},this.state.emailErrorMessage)),n.a.createElement("div",{className:"input__container"},n.a.createElement("div",{className:"input__label"},n.a.createElement("label",{for:"password"},"Password")),n.a.createElement("div",{className:"toggle-password__wrapper"},n.a.createElement("input",{id:"password",type:this.state.toggleState,className:"input input__field "+(this.state.passwordErrorMessage?"input--error":""),placeholder:"password",onChange:this.handlePasswordChange}),n.a.createElement("span",{onClick:this.handleToggle,className:"toggle-password"},this.state.toggleValue)),n.a.createElement("div",{className:"password-helper"},"Password must be at least 6 characters and contain at least one number."),n.a.createElement("div",{className:"input__error-message"},this.state.passwordErrorMessage)),n.a.createElement("div",{className:"btn__wrapper"},n.a.createElement("input",{className:"btn "+(this.state.emailValue.includes("@")&&this.state.passwordValue&&this.state.passwordValue.length>=6?"btn__primary":"btn__inactive"),type:"submit",value:"Create Account"}))),n.a.createElement("div",{className:"link"},"Already have an account? ",n.a.createElement(b.a,{to:"/"},"Login now.")),n.a.createElement("div",{className:"spacer"}))}}]),a}(s.Component),w=(t(29),function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"By continuing, you agree to our ",n.a.createElement("a",{href:"#"},"Terms of Use")," and ",n.a.createElement("a",{href:"#"},"Privacy Policy"),"."))}}]),a}(s.Component));var f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={emailValue:"",emailErrorMessage:""},t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t.handleEmailChange=t.handleEmailChange.bind(Object(g.a)(Object(g.a)(t))),t.validateEmail=t.validateEmail.bind(Object(g.a)(Object(g.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?(this.setState({emailErrorMessage:""}),!0):(this.setState({emailErrorMessage:"Please enter a valid email address"}),!1)}},{key:"handleSubmit",value:function(e){e.preventDefault();/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.emailValue)&&/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.state.passwordValue)?(console.log("Correct. Logging in..."),this.props.history.push("/forgot-password")):(console.log("Try again"),this.setState({emailErrorMessage:"Please enter a valid email address"}),this.setState({passwordErrorMessage:"Please enter a valid password."}))}},{key:"handleEmailChange",value:function(e){this.setState({emailValue:e.target.value})}},{key:"render",value:function(){return n.a.createElement("div",{className:"login"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"input__container"},n.a.createElement("div",{className:"input__label"},n.a.createElement("label",{for:"emailAddress"},"Email Address")),n.a.createElement("input",{id:"emailAddress",type:"text",className:"input input__field "+(this.state.emailErrorMessage?"input--error":""),placeholder:"janedoe@email.com",onChange:this.handleEmailChange,onBlur:this.validateEmail}),n.a.createElement("div",{className:"input__error-message"},this.state.emailErrorMessage)),n.a.createElement("div",{className:"btn__wrapper"},n.a.createElement("input",{className:"btn "+(this.state.emailValue.includes("@")?"btn__primary":"btn__inactive"),type:"submit",value:"Submit"}))),n.a.createElement("div",{className:"link"},"Already have an account? ",n.a.createElement(b.a,{to:"/"},"Sign in now.")))}}]),a}(s.Component);var j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={emailValue:"",passwordValue:"",emailErrorMessage:"",passwordErrorMessage:"",toggleValue:"Show",toggleState:"password"},t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t.handleEmailChange=t.handleEmailChange.bind(Object(g.a)(Object(g.a)(t))),t.handlePasswordChange=t.handlePasswordChange.bind(Object(g.a)(Object(g.a)(t))),t.validateEmail=t.validateEmail.bind(Object(g.a)(Object(g.a)(t))),t.validatePassword=t.validatePassword.bind(Object(g.a)(Object(g.a)(t))),t.handleToggle=t.handleToggle.bind(Object(g.a)(Object(g.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?(this.setState({emailErrorMessage:""}),!0):(this.setState({emailErrorMessage:"Please enter a valid email address"}),!1)}},{key:"validatePassword",value:function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(e.target.value)?(this.setState({passwordErrorMessage:""}),!0):(this.setState({passwordErrorMessage:"Please enter a valid password"}),!1)}},{key:"handleSubmit",value:function(e){e.preventDefault();/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.emailValue)&&/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.state.passwordValue)?(console.log("Correct. Logging in..."),this.props.history.push("/login-success")):(console.log("Try again"),this.setState({emailErrorMessage:"Please enter a valid email address"}),this.setState({passwordErrorMessage:"Please enter a valid password."}))}},{key:"handleEmailChange",value:function(e){this.setState({emailValue:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({passwordValue:e.target.value})}},{key:"handleToggle",value:function(e){"Show"===this.state.toggleValue?this.setState({toggleValue:"Hide",toggleState:"text"}):this.setState({toggleValue:"Show",toggleState:"password"})}},{key:"render",value:function(){return n.a.createElement("div",{className:"login"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"input__container"},n.a.createElement("div",{className:"input__label"},n.a.createElement("label",{for:"emailAddress"},"Email Address")),n.a.createElement("input",{id:"emailAddress",type:"text",className:"input input__field "+(this.state.emailErrorMessage?"input--error":""),placeholder:"janedoe@email.com",onChange:this.handleEmailChange,onBlur:this.validateEmail}),n.a.createElement("div",{className:"input__error-message"},this.state.emailErrorMessage)),n.a.createElement("div",{className:"input__container"},n.a.createElement("div",{className:"input__label"},n.a.createElement("label",{for:"password"},"Password")),n.a.createElement("div",{className:"toggle-password__wrapper"},n.a.createElement("input",{id:"password",type:this.state.toggleState,className:"input input__field "+(this.state.passwordErrorMessage?"input--error":""),placeholder:"password",onChange:this.handlePasswordChange}),n.a.createElement("span",{onClick:this.handleToggle,className:"toggle-password"},this.state.toggleValue)),n.a.createElement("div",{className:"password-helper"},"Password must be at least 6 characters and contain at least one number."),n.a.createElement("div",{className:"input__error-message"},this.state.passwordErrorMessage)),n.a.createElement("div",{className:"btn__wrapper"},n.a.createElement("input",{className:"btn "+(this.state.emailValue.includes("@")&&this.state.passwordValue&&this.state.passwordValue.length>=6?"btn__primary":"btn__inactive"),type:"submit",value:"Submit"}))),n.a.createElement("div",{className:"link"},n.a.createElement(b.a,{to:"/forgot-password",className:"link__copy"},"Forgot Your Password?")),n.a.createElement("div",{className:"social-login-wrapper"},n.a.createElement(v,{name:"Facebook"}),n.a.createElement(v,{name:"Google"})),n.a.createElement("div",{className:"link"},"Don't have an account? ",n.a.createElement(b.a,{to:"/create-account"},"Create an account.")),n.a.createElement("div",{className:"spacer"}))}}]),a}(s.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("center",null,"Logged In!",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(b.a,{to:"/"},"Start Over")))}}]),a}(s.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement("div",{className:"container"},n.a.createElement(p,null),n.a.createElement(h.a,{exact:!0,path:"/",component:j}),n.a.createElement(h.a,{path:"/forgot-password",component:f}),n.a.createElement(h.a,{path:"/create-account",component:_}),n.a.createElement(h.a,{path:"/login-success",component:O}),n.a.createElement(w,null)))}}]),a}(s.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(N,null))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.1ee17d98.chunk.js.map