(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(13),c=a.n(r),s=(a(31),a(8)),l=a(2),i=a(7),d=a(58),u=a(57),b=a(26),j=a.n(b),p=a(10),O=(a(50),a(1));var h=function(){var e=Object(o.useState)({name:"",email:"",message:"",phone:"",uploadedFiles:[],buttonText:"Submit",uploadPhotosButtonText:"Upload files"}),t=Object(i.a)(e,2),a=t[0],n=t[1],r=a.name,c=a.email,b=a.message,h=a.phone,m=(a.uploadedFiles,a.buttonText),x=a.uploadPhotosButtonText,g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),T=g.REACT_APP_CLOUD_NAME,C=g.REACT_APP_UPLOAD_SECRET,f=function(e){return function(t){n(Object(l.a)(Object(l.a)({},a),{},Object(s.a)({},e,t.target.value)))}};return Object(O.jsxs)("div",{className:"form",children:[Object(O.jsx)(p.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0}),Object(O.jsx)(p.a,{}),Object(O.jsx)(d.a,{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:T,upload_preset:C,tags:["images"]},(function(e,t){e&&console.log(e),n(Object(l.a)(Object(l.a)({},a),{},{uploadPhotosButtonText:"Uploaded"}))}))},className:"button",style:{background:"#5658DD"},children:x}),Object(O.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),n(Object(l.a)(Object(l.a)({},a),{},{buttonText:"...sending"})),j()({method:"POST",url:"http://localhost:8080/api/feedback",data:{name:r,email:c,message:b,phone:h}}).then((function(e){e.data.success&&Object(p.b)("\ud83e\udd84 Thanks for your feedback!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),n(Object(l.a)(Object(l.a)({},a),{},{name:"",phone:"",email:"",message:"",buttonText:"Submited",uploadPhotosButtonText:"Uploaded"}))})).catch((function(e){e.response.data.error&&p.b.error("Failed, try again!")}))},children:[Object(O.jsxs)(u.a.Group,{children:[Object(O.jsx)(u.a.Label,{children:"Name"}),Object(O.jsx)(u.a.Control,{value:r,onChange:f("name"),type:"name",placeholder:"Enter your name",required:!0})]}),Object(O.jsxs)(u.a.Group,{children:[Object(O.jsx)(u.a.Label,{children:"Phone"}),Object(O.jsx)(u.a.Control,{value:h,onChange:f("phone"),type:"phone",placeholder:"Enter your phone number",required:!0})]}),Object(O.jsxs)(u.a.Group,{children:[Object(O.jsx)(u.a.Label,{children:"Email Adress"}),Object(O.jsx)(u.a.Control,{value:c,onChange:f("email"),type:"email",placeholder:"Enter email",required:!0})]}),Object(O.jsxs)(u.a.Group,{children:[Object(O.jsx)(u.a.Label,{children:"Description"}),Object(O.jsx)(u.a.Control,{onChange:f("message"),as:"textarea",value:b,placeholder:"Enter Your Feedback",rows:3,required:!0})]}),Object(O.jsx)(d.a,{type:"submit",style:{marginTop:"10px",background:"#5658DD"},children:m})]})]})};a(54);var m=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{style:{color:"#5658DD",textAlign:"center",fontSize:"4rem",marginTop:"20px"},children:"Feedback"}),Object(O.jsx)(h,{})]})};c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.e23df779.chunk.js.map