"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[85],{75085:function(e,n,t){t.r(n);var i=t(74165),o=t(15861),s=t(4942),a=t(1413),r=t(29439),c=t(72791),l=t(24846),d=t(50612),u=t(79519),h=t(57689),p=t(9085),x=t(31243),m=(t(5462),t(78983)),j=t(80184);n.default=function(){var e=(0,c.useState)(0),n=(0,r.Z)(e,1)[0],t=(0,c.useState)(100),_=(0,r.Z)(t,1)[0],f=(0,h.s0)(),v=(0,c.useState)([]),y=(0,r.Z)(v,2),b=y[0],g=y[1],S=(0,c.useState)(!1),C=(0,r.Z)(S,2),L=C[0],N=C[1],w=(0,c.useState)([]),A=(0,r.Z)(w,1)[0],Z=(0,c.useState)({admission_number:"",to_academic_year:"",to_class:"",to_section:"",academic_year:"",standard:"",section:"",status:""}),R=(0,r.Z)(Z,2),k=R[0],T=R[1],F=(k.to_class||"")+(k.to_section||""),P=function(e){var n=e.target,t=n.name,i=n.value;T((0,a.Z)((0,a.Z)({},k),{},(0,s.Z)({},t,i)))},D=(0,h.TH)(),E=D.state?D.state.dataToPass:null;(0,c.useEffect)((function(){E&&x.Z.get("http://100.20.130.76:8000/api/student/?offset=".concat(n,"&limit=").concat(_),{headers:{"Content-Type":"application/json"}}).then((function(e){g(e.data.results)})).catch((function(e){return console.error(e)}))}),[E,_,n]);var z=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var n,t,o,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(n=b.map((function(e){return e.admission_number})))){e.next=16;break}return t=b.map((function(e){return{status:e.status,admission_number:e.admission_number,student_name:e.student_name,from_class:e.current_class,from_section:e.current_section,from_academic_year:e.academic_year,to_academic_year:k.to_academic_year,to_class:k.to_class,to_section:k.to_section}})),e.next=6,x.Z.post("http://100.20.130.76:8000/api/promotion/",t,{headers:{"Content-Type":"application/json"}});case 6:return o=e.sent,console.log("Response from server:",o.data),e.next=10,x.Z.put("http://100.20.130.76:8000/api/promotion/student_update/",{data:{admission_number:n,class_section:parseInt(F,10),to_academic_year:k.to_academic_year},headers:{"Content-Type":"application/json"}});case 10:s=e.sent,console.log("Response from second API:",s.data),f("/PromotionManagement/PromotionDetails"),p.Am.success("Data submitted successfully!",{position:p.Am.POSITION.TOP_CENTER,timeout:3e3}),e.next=16;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("Error submitting data:",e.t0),p.Am.error("Data not submitted!",{position:p.Am.POSITION.TOP_CENTER,timeout:3e3});case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)(m.xH,{children:[(0,j.jsxs)(m.bn,{component:"h5",className:"d-flex align-items-center",style:{backgroundColor:"rgb(242, 242, 242)",borderRadius:0},children:[" ",(0,j.jsx)(l.Z,{icon:d.N,size:"xl"}),"Student Promotion"]}),(0,j.jsxs)(m.sl,{children:[(0,j.jsxs)(m.lx,{className:"row g-3",children:[(0,j.jsxs)(m.b7,{xs:3,style:{marginRight:55,marginLeft:50},children:[(0,j.jsx)(m.L8,{htmlFor:"inputState",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"From Academic Year*"}),(0,j.jsxs)(m.LX,{id:"inputState",style:{borderRadius:5},name:"to_academic_year",value:k.to_academic_year,onChange:P,children:[(0,j.jsx)("option",{children:"Select Academic Year"}),(0,j.jsx)("option",{children:"2017-2018"}),(0,j.jsx)("option",{children:"2018-2019"}),(0,j.jsx)("option",{children:"2020-2021"}),(0,j.jsx)("option",{children:"2021-2022"}),(0,j.jsx)("option",{children:"2022-2023"})]})]}),(0,j.jsxs)(m.b7,{xs:3,style:{marginRight:55},children:[(0,j.jsx)(m.L8,{htmlFor:"inputState",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"From Academic Class*"}),(0,j.jsxs)(m.LX,{id:"inputState",style:{borderRadius:5},name:"to_class",value:k.to_class,onChange:P,children:[(0,j.jsx)("option",{children:"Select Academic Class"}),(0,j.jsx)("option",{children:"1"}),(0,j.jsx)("option",{children:"2"}),(0,j.jsx)("option",{children:"3"}),(0,j.jsx)("option",{children:"4"}),(0,j.jsx)("option",{children:"5"})]})]}),(0,j.jsxs)(m.b7,{xs:3,children:[(0,j.jsx)(m.L8,{htmlFor:"inputState",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"From Academic Section*"}),(0,j.jsxs)(m.LX,{id:"inputState",style:{borderRadius:5},name:"to_section",value:k.to_section,onChange:P,children:[(0,j.jsx)("option",{children:"Select Academic Section"}),(0,j.jsx)("option",{children:"A"}),(0,j.jsx)("option",{children:"B"}),(0,j.jsx)("option",{children:"C"}),(0,j.jsx)("option",{children:"D"}),(0,j.jsx)("option",{children:"E"})]})]}),(0,j.jsxs)(m.b7,{xs:11,className:"d-flex justify-content-end",children:[(0,j.jsx)(m.u5,{style:{marginTop:30,marginRight:18,width:150,backgroundColor:"#1985AC",color:"white",border:"none"},onClick:function(){return N(!L)},onChange:function(){var e=b.filter((function(e){return(!k.academic_year||e.academic_year===k.academic_year)&&(!k.standard||e.standard===k.standard)&&(!k.section||e.section===k.section)}));A(e)},children:"Download"}),(0,j.jsxs)(m.Tk,{visible:L,onClose:function(){return N(!1)},"aria-labelledby":"LiveDemoExampleLabel",children:[(0,j.jsx)(m.p0,{onClose:function(){return N(!1)},children:(0,j.jsx)(m.fl,{id:"LiveDemoExampleLabel",children:"Download CSV"})}),(0,j.jsx)(m.sD,{children:(0,j.jsxs)(m.lx,{className:"row gy-2 gx-3 align-items-center",style:{paddingBottom:"2%"},children:[(0,j.jsxs)(m.b7,{xs:"auto",children:[(0,j.jsx)(m.L8,{htmlFor:"academic_year",style:{fontWeight:"500",fontSize:"16px"},children:"Academic Year"}),(0,j.jsxs)(m.LX,{id:"academic_year",name:"academic_year",value:k.academic_year,onChange:P,children:[(0,j.jsx)("option",{value:"",children:"Academic Year"}),(0,j.jsx)("option",{value:"2017-2018",children:"2017-2018"}),(0,j.jsx)("option",{value:"2018-2019",children:"2018-2019"}),(0,j.jsx)("option",{value:"2019-2020",children:"2019-2020"}),(0,j.jsx)("option",{value:"2020-2021",children:"2020-2021"}),(0,j.jsx)("option",{value:"2021-2022",children:"2021-2022"}),(0,j.jsx)("option",{value:"2022-2023",children:"2022-2023"})]})]}),(0,j.jsxs)(m.b7,{xs:"auto",children:[(0,j.jsx)(m.L8,{htmlFor:"standard",style:{fontWeight:"500",fontSize:"16px"},children:"Standard"}),(0,j.jsxs)(m.LX,{id:"standard",name:"standard",value:k.standard,onChange:P,children:[(0,j.jsx)("option",{value:"",children:"Select class"}),(0,j.jsx)("option",{value:"LKG",children:"LKG"}),(0,j.jsx)("option",{value:"UKG",children:"UKG"}),(0,j.jsx)("option",{value:"1",children:"1"}),(0,j.jsx)("option",{value:"2",children:"2"}),(0,j.jsx)("option",{value:"3",children:"3"}),(0,j.jsx)("option",{value:"4",children:"4"}),(0,j.jsx)("option",{value:"5",children:"5"}),(0,j.jsx)("option",{value:"6",children:"6"}),(0,j.jsx)("option",{value:"7",children:"7"}),(0,j.jsx)("option",{value:"8",children:"8"}),(0,j.jsx)("option",{value:"9",children:"9"}),(0,j.jsx)("option",{value:"10",children:"10"})]})]}),(0,j.jsxs)(m.b7,{xs:"auto",children:[(0,j.jsx)(m.L8,{htmlFor:"section",style:{fontWeight:"500",fontSize:"16px"},children:"Section"}),(0,j.jsxs)(m.LX,{id:"section",name:"section",value:k.section,onChange:P,children:[(0,j.jsx)("option",{value:"",children:"Select section"}),(0,j.jsx)("option",{value:"A",children:"A"}),(0,j.jsx)("option",{value:"B",children:"B"}),(0,j.jsx)("option",{value:"C",children:"C"}),(0,j.jsx)("option",{value:"D",children:"D"}),(0,j.jsx)("option",{value:"E",children:"E"}),(0,j.jsx)("option",{value:"F",children:"F"}),(0,j.jsx)("option",{value:"G",children:"G"}),(0,j.jsx)("option",{value:"H",children:"H"}),(0,j.jsx)("option",{value:"I",children:"I"})]})]})]})}),(0,j.jsx)(m.Ym,{children:(0,j.jsxs)(m.u5,{color:"secondary",onClick:function(){var e={academic_year:k.academic_year,standard:k.standard,section:k.section,status:k.status};x.Z.get("http://100.20.130.76:8000/api/promotion/",{params:e}).then((function(e){var n=e.data.map((function(e){return"".concat(e.id,", ").concat(e.title,", ").concat(e.body)})),t=new Blob([n.join("\n")],{type:"text/csv"}),i=window.URL.createObjectURL(t),o=document.createElement("a");o.href=i,o.download="promotion_data.csv",document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(i)}))},children:[(0,j.jsx)(l.Z,{icon:u._,size:"l"}),"Download"]})})]}),(0,j.jsx)(m.u5,{onClick:z,style:{marginTop:30,marginRight:18,width:150,backgroundColor:"#1985AC",color:"white",border:"none"},children:"Submit"})]})]}),(0,j.jsx)("br",{}),(0,j.jsxs)(m.Sx,{striped:!0,children:[(0,j.jsx)(m.V,{children:(0,j.jsxs)(m.T6,{style:{borderBottom:5,color:"primary"},children:[(0,j.jsx)(m.is,{scope:"col",children:"Admission Number"}),(0,j.jsx)(m.is,{scope:"col",children:"Student Name"}),(0,j.jsx)(m.is,{scope:"col",children:"Class"}),(0,j.jsx)(m.is,{scope:"col",children:"Section"}),(0,j.jsx)(m.is,{scope:"col",children:"Academic Year"}),(0,j.jsx)(m.is,{scope:"col",children:"Status"})]})}),(0,j.jsx)(m.NR,{children:b.map((function(e,n){return(0,j.jsxs)(m.T6,{children:[(0,j.jsx)(m.NN,{children:e.admission_number}),(0,j.jsx)(m.NN,{children:e.student_name}),(0,j.jsx)(m.NN,{children:e.current_class}),(0,j.jsx)(m.NN,{children:e.current_section}),(0,j.jsx)(m.NN,{children:e.academic_year}),(0,j.jsx)(m.NN,{children:(0,j.jsxs)(m.LX,{id:"inputState",style:{borderRadius:0},name:"status",value:e.status,onChange:function(n){return function(e,n){var t=b.map((function(t){return t.id===e.id?(0,a.Z)((0,a.Z)({},t),{},{status:"P"===n.target.value?"P":"F"}):t}));g(t)}(e,n)},children:[(0,j.jsx)("option",{value:"P",children:"Pass"}),(0,j.jsx)("option",{value:"F",children:"Fail"})]})})]},n)}))})]})]})]})}},79519:function(e,n,t){t.d(n,{_:function(){return i}});var i=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='356.117 316.117 333.49 293.49 272 354.98 272 56 240 56 240 354.98 178.51 293.49 155.883 316.117 256 416.236 356.117 316.117' class='ci-primary'/><rect width='480' height='32' x='16' y='464' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]}}]);
//# sourceMappingURL=85.d41f9a90.chunk.js.map