(this.webpackJsonpego=this.webpackJsonpego||[]).push([[0],{146:function(e,t,a){e.exports=a(306)},151:function(e,t,a){},294:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(151),a(5)),s=a(6),u=a(18),i=a(25),m=a(38);a(166);m.initializeApp({apiKey:"AIzaSyCsrJwOTh9EsWqCiyvXtuUoelsBsohcAIU",authDomain:"egdeomx.firebaseapp.com",databaseURL:"https://egdeomx.firebaseio.com",projectId:"egdeomx",storageBucket:"egdeomx.appspot.com",messagingSenderId:"1012924663671",appId:"1:1012924663671:web:3592cc97e4dd67cdec0372",measurementId:"G-QL4JJ74DJY"}),m.analytics();var E=a(312),p=a(314),b=a(60);function g(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(o.a)(c,2),i=u[0],g=u[1],y=Object(n.useState)(!1),d=Object(o.a)(y,2),f=d[0],O=d[1];return l.a.createElement("div",{style:{flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",height:"-webkit-fill-available"}},l.a.createElement("label",{className:"titles",style:{textAlign:"center",fontSize:150,color:"grey"}},"GRUPO EGO"),l.a.createElement("br",null),l.a.createElement(E.a,{style:{textAlign:"center",flex:"auto"}},l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{placeholder:"correo",style:{textAlign:"center"},onChange:function(e){return r(e.target.value)},value:a,size:"default"})),l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{type:"password",placeholder:"contrase\xf1a",style:{textAlign:"center"},onChange:function(e){return g(e.target.value)},value:i,size:"default"})),l.a.createElement(b.a,{type:"primary",shape:"round",onClick:function(){m.auth().signInWithEmailAndPassword(a,i).catch((function(e){var t=e.message;O(t),console.log(t),console.log(a)}))},style:{backgroundColor:"grey"}},"ENTRAR"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/FPass"},l.a.createElement(b.a,{type:"primary",shape:"round",style:{backgroundColor:"grey"}},"\xbfOLVIDASTE LA CONTRASE\xd1A?")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/Register"},l.a.createElement(b.a,{type:"primary",shape:"round",style:{backgroundColor:"grey"}},"REGISTRO")),!1!==f?l.a.createElement("h1",null,f):null))}var y=a(63),d=a(41);a(294);function f(e){return l.a.createElement("div",{style:{display:"flex",textAlign:"center",justifyContent:"center"}},l.a.createElement(y.a,null,l.a.createElement(d.a,{span:30},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/Employees"},l.a.createElement(b.a,{className:"buttonss",type:"primary",shape:"round",style:{width:500,height:100,backgroundColor:"gray",fontSize:50}},"CREAR EMPLEADO")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/NewInversion"},l.a.createElement(b.a,{className:"buttonss",type:"primary",shape:"round",style:{width:500,height:100,backgroundColor:"gray",fontSize:50}},"NUEVA INVERSION")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/Inversions"},l.a.createElement(b.a,{className:"buttonss",type:"primary",shape:"round",style:{width:500,height:100,backgroundColor:"gray",fontSize:50}},"INVERSIONES")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/Profile"},l.a.createElement(b.a,{className:"buttonss",type:"primary",shape:"round",style:{width:500,height:100,backgroundColor:"gray",fontSize:50}},"PERFIL")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{className:"buttonss",onClick:e.logout,size:"100px",type:"primary",shape:"round",style:{width:500,height:100,backgroundColor:"gray",fontSize:50}},"SALIR"))))}var O=a(85);function h(e){i.database().ref("/usuario");var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),g=m[0],f=m[1],h=Object(n.useState)(""),C=Object(o.a)(h,2),A=(C[0],C[1],Object(n.useState)("")),S=Object(o.a)(A,2),I=(S[0],S[1],Object(n.useState)("")),v=Object(o.a)(I,2),j=v[0],x=v[1],R=Object(n.useState)(""),N=Object(o.a)(R,2),T=N[0],k=N[1];return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",textAlign:"center"}},l.a.createElement(y.a,null,l.a.createElement(d.a,{span:24},l.a.createElement("label",{className:"titles",style:Object(O.a)({textAlign:"center",fontSize:100,color:"grey"},"textAlign","center")},"NUEVO EMPLEADO")),l.a.createElement(E.a,{style:{textAlign:"center",flex:"auto",justifyContent:"center"}},l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{type:"email",placeholder:"correo",style:{textAlign:"center"},onChange:function(e){return c(e.target.value)},value:r,size:"default"})),l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{placeholder:"contrase\xf1a",style:{textAlign:"center"},onChange:function(e){return f(e.target.value)},value:g,size:"default"})),l.a.createElement(b.a,{type:"primary",shape:"round",onClick:function(){i.auth().createUserWithEmailAndPassword(r,g).then((function(){console.log("success"),k("USUARIO CREADO")}),(function(e){var t=e.message;x(t),console.log(e)})).catch((function(e){}))},style:{backgroundColor:"grey"}},"REGISTRAR"),T?l.a.createElement("h1",null,T," "):l.a.createElement("h1",null,j," "),l.a.createElement(s.b,{to:"/Home"},l.a.createElement(b.a,{type:"primary",shape:"round",style:{backgroundColor:"grey"}},"INICIO")))))}function C(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},l.a.createElement(s.b,{to:"/Home"},l.a.createElement(b.a,{type:"primary",shape:"rectangle",style:{backgroundColor:"grey"}},"HOME")))}var A=a(313);function S(e){var t=i.database().ref("/inversion"),a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],u=r[1],m=Object(n.useState)([]),E=Object(o.a)(m,2),g=E[0],f=E[1],O=Object(n.useState)(""),h=Object(o.a)(O,2),C=h[0],S=h[1],I=Object(n.useState)(""),v=Object(o.a)(I,2);v[0],v[1];console.log(C),Object(n.useEffect)((function(){c||t.once("value",(function(e){console.log(e),e.forEach((function(e){console.log(e.key);var t=e.val();console.log(t);var a=t.titulo,n=t.tipo,l=t.descrip,r=t.campos,c=e.key;if(r){var o=g;o.push({titulo:a,tipo:n,desc:l,campos:r,id:c}),f(o)}else console.log("test")})),u(!0)}))}),[]);return console.log(g),l.a.createElement("div",{style:{display:"flex",textAlign:"center",justifyContent:"center"}},l.a.createElement(y.a,null,l.a.createElement(d.a,{span:24},l.a.createElement("label",{className:"titles",style:{textAlign:"center",fontSize:100,color:"grey"}},"INVERSIONES")),l.a.createElement(d.a,{span:24},l.a.createElement(s.b,{to:"/Home"},l.a.createElement(b.a,{type:"primary",shape:"round",style:{backgroundColor:"grey"}},"INICIO"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,{span:24},l.a.createElement(s.b,{to:"/NewInversion"},l.a.createElement(b.a,{type:"primary",shape:"round",style:{backgroundColor:"grey"}},"NUEVA INVERSION"))),l.a.createElement(d.a,{span:24},l.a.createElement("br",null),l.a.createElement(p.a,{id:"Buscar",style:{textAlign:"center"},placeholder:"busca inversi\xf3n por t\xedtulo",onChange:function(e){return S(e.target.value)},value:C}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{onClick:function(){g.map((function(e,t){if(C===e.titulo&&-1!==C){console.log(e.titulo),console.log(e.desc),console.log(e.campos),console.log(e);var a=g;a.splice({}),a.push({titulo:e.titulo,desc:e.desc,campos:e.campos}),f(a)}})),S("")},type:"primary",shape:"round",style:{backgroundColor:"grey"}},"BUSCAR"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,{span:24},l.a.createElement(b.a,{onClick:function(){window.location.reload(!1)},type:"primary",shape:"round",style:{backgroundColor:"grey"}},"NUEVA BUSQUEDA")),l.a.createElement("br",null)),g.map((function(e,t){return l.a.createElement(A.a,{type:"flex",shape:"round",className:"invscampos",autoSize:!0,true:!0,justifyContent:"center",style:{width:360,textAlign:"center",alignItems:"center"},key:t},e.titulo,l.a.createElement("br",null),e.desc,l.a.createElement("br",null),e.campos,l.a.createElement("br",null),l.a.createElement(s.b,{to:{pathname:"/Inversion/".concat(e.id)}},l.a.createElement("br",null),l.a.createElement(b.a,{type:"primary",size:"small",shape:"round",style:{backgroundColor:"gray",textAlign:"center"}},"EDITAR")))}))))}var I=a(104),v=a(62),j=a(316),x=a(315),R=Object(u.g)((function(e){console.log(e);var t=i.database().ref("/inversion/".concat(e.match.params.id));console.log(t);var a=Object(n.useState)({}),r=Object(o.a)(a,2),c=r[0],u=r[1],m=Object(n.useState)(0),E=Object(o.a)(m,2),g=(E[0],E[1],Object(n.useState)("")),f=Object(o.a)(g,2),O=(f[0],f[1],Object(n.useState)("")),h=Object(o.a)(O,2),C=h[0],A=h[1],S=Object(n.useState)(""),v=Object(o.a)(S,2),R=v[0],N=v[1];Object(n.useEffect)((function(){t.once("value",(function(e){console.log(e.val());var t=e.val();u(t),console.log(t)}))}),[]);function T(e){console.log(e),j.a.error("NO SE EFECTUO CAMBIOS")}var k=Object(n.useState)([]),w=Object(o.a)(k,2);w[0],w[1];function T(e){console.log(e),j.a.error("NO SE EFECTUO CAMBIOS")}return l.a.createElement("div",{style:{display:"flex",textAlign:"center",justifyContent:"center"}},l.a.createElement(y.a,null,l.a.createElement(d.a,{span:24},l.a.createElement("label",{className:"titles",style:{textAlign:"center",fontSize:100,color:"grey"}},"INVERSION"),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/Home"},l.a.createElement(b.a,{type:"primary",size:"small",shape:"round",style:{backgroundColor:"grey"}},"INICIO")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/Inversions"},l.a.createElement(b.a,{type:"primary",size:"small",shape:"round",style:{backgroundColor:"grey"}},"INVERSIONES")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{placeholder:"".concat(c.titulo," "),style:{textAlign:"center"},onChange:function(e){return N(e.target.value)},value:R,size:"default"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{title:"\xbfESTAS SEGURO?",onConfirm:function(){i.database().ref("/inversion/".concat(e.match.params.id,"/titulo")).set(R),j.a.success("TITULO MODIFICADO")},onCancel:function(e){console.log(e),j.a.error("NO SE EFECTUO CAMBIOS")},okText:"SI",cancelText:"NO"},l.a.createElement(b.a,{type:"primary",shape:"round",size:"small",style:{backgroundColor:"grey"}},"EDITAR TITULO")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{placeholder:"".concat(c.descrip," "),style:{textAlign:"center"},onChange:function(e){return A(e.target.value)},value:C,size:"default"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{title:"\xbfESTAS SEGURO?",onConfirm:function(){i.database().ref("/inversion/".concat(e.match.params.id,"/descrip")).set(C),j.a.success("DESCRIPCION MODIFICADA")},onCancel:T,okText:"SI",cancelText:"NO"},l.a.createElement(b.a,{type:"primary",shape:"round",size:"small",style:{backgroundColor:"grey"}},"EDITAR DESCRIPCION")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a.TextArea,{style:{textAlign:"center"},value:"".concat(c.campos),onChange:function(e){return function(e){u(Object(I.a)(Object(I.a)({},c),{},{campos:e.target.value}))}(e)},autoSize:!0,true:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{title:"\xbfESTAS SEGURO?",onConfirm:function(){i.database().ref("/inversion/".concat(e.match.params.id,"/campos")).set(c.campos),j.a.success("CAMPO EDITADO")},onCancel:function(){j.a.error("NO SE EFECTUO CAMBIOS")},okText:"SI",cancelText:"NO"},l.a.createElement(b.a,{type:"primary",shape:"round",size:"small",style:{backgroundColor:"grey"}},"EDITAR CAMPO ")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{title:"\xbfESTAS SEGURO?",onConfirm:function(){t.remove(),j.a.success("INVERSION ELIMINADA"),e.history.push("/Inversions")},onCancel:T,okText:"SI",cancelText:"NO"},l.a.createElement(b.a,{type:"primary",shape:"round",size:"small",style:{backgroundColor:"grey"}},"BORRAR INVERSION")),l.a.createElement("br",null),l.a.createElement("br",null))))}));function N(e){var t=i.auth().currentUser,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],u=r[1],m=Object(n.useState)(""),g=Object(o.a)(m,2),f=g[0],O=g[1],h=Object(n.useState)(""),C=Object(o.a)(h,2),S=C[0],I=C[1],v=Object(n.useState)(!1),R=Object(o.a)(v,2),N=R[0],T=R[1],k=i.auth.EmailAuthProvider.credential(t.email,S);return l.a.createElement("div",{style:{display:"flex",textAlign:"center",justifyContent:"center"}},l.a.createElement(y.a,null,l.a.createElement(d.a,{span:24},l.a.createElement("label",{style:{textAlign:"center",fontSize:100,color:"gray"}},"PERFIL"),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/Home"},l.a.createElement(b.a,{type:"primary",shape:"round",style:{backgroundColor:"gray",textAlign:"center"}},"INICIO")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(A.a,{type:"flex",style:{width:300,textAlign:"center",alignItems:"center",borderColor:"lightslategray",borderWidth:5}},l.a.createElement("p",null,"INGRESA TU CONTRASE\xd1A ACTUAL ANTES DE EFECTUAR ALGUN CAMBIO"),l.a.createElement(p.a,{placeholder:"contrase\xf1a actual",onChange:function(e){return I(e.target.value)},size:"default",style:{textAlign:"center"}}),l.a.createElement("br",null),l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{type:"email",placeholder:"correo",style:{textAlign:"center"},onChange:function(e){return u(e.target.value)},value:c,size:"default"}),l.a.createElement(x.a,{title:"\xbfESTAS SEGURO?",onConfirm:function(){console.log(c),console.log(t.email),console.log(t.password),t.reauthenticateWithCredential(k).then((function(){t.updateEmail(c).then((function(){console.log("success"),j.a.success("CORREO CAMBIADO")}),(function(e){console.log(e);var t=e.message;T(t)}))})).catch((function(e){var t=e.message;T(t)}))},onCancel:function(e){console.log(e),j.a.error("NO SE EFECTUO CAMBIOS")},okText:"Yes",cancelText:"No"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"primary",shape:"round",size:"small",style:{backgroundColor:"grey"}},"CAMBIAR CORREO"))),l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{placeholder:"contrase\xf1a actual",style:{textAlign:"center"},onChange:function(e){return I(e.target.value)},size:"default"}),l.a.createElement(p.a,{placeholder:"nueva contrase\xf1a",style:{textAlign:"center"},onChange:function(e){return O(e.target.value)},value:f,size:"default"}),l.a.createElement(x.a,{title:"\xbfESTAS SEGURO?",onConfirm:function(){t.reauthenticateWithCredential(k).then((function(){t.updatePassword(f).then((function(){console.log("success"),j.a.success("CONTRASE\xd1A CAMBIADA")}),(function(e){console.log(e);var t=e.message;T(t)}))})).catch((function(e){var t=e.message;T(t)}))},onCancel:function(e){console.log(e),j.a.error("NO SE EFECTUO CAMBIOS")},okText:"SI",cancelText:"NO"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"primary",shape:"round",size:"small",style:{backgroundColor:"grey"}},"CAMBIAR CONTRASE\xd1A"))),l.a.createElement("br",null),l.a.createElement(p.a,{placeholder:"contrase\xf1a actual",style:{textAlign:"center"},onChange:function(e){return I(e.target.value)},size:"default"}),l.a.createElement(x.a,{title:"\xbfSEGURO QUE QUIERES BORRAR?",onConfirm:function(){t.reauthenticateWithCredential(k).then((function(){t.delete().then((function(){})).catch((function(e){var t=e.message;T(t)}))})).catch((function(e){var t=e.message;T(t)}))},onCancel:function(e){console.log(e),j.a.error("NO SE EFECTUO CAMBIOS")},okText:"SI",cancelText:"NO"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"primary",shape:"round",size:"small",style:{backgroundColor:"grey"}},"BORRAR CUENTA")),l.a.createElement("br",null),!1!==N?l.a.createElement("h1",null,N):null))))}a(303);function T(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{style:{flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",height:"-webkit-fill-available"}},l.a.createElement("label",{style:{textAlign:"center",fontSize:60,color:"white"}},"RECUPERA TU CONTRASE\xd1A "),l.a.createElement("br",null),l.a.createElement(E.a,{style:{textAlign:"center"}},l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{placeholder:"correo",style:{textAlign:"center"},onChange:function(e){return r(e.target.value)},value:a,size:"default",type:"email"})),l.a.createElement(s.b,{to:"/Home"},l.a.createElement(b.a,{type:"primary",onClick:function(){console.log(a),m.auth().sendPasswordResetEmail(a).then((function(){})).catch((function(e){}))},style:{backgroundColor:"grey"}},"ENVIAR"))))}function k(e){var t=e.llenarcampos,a=p.a.TextArea;return l.a.createElement(d.a,{span:6,style:{marginVertical:10}},l.a.createElement(a,{style:{height:"fit-content"},rows:4,onChange:function(e){return t(e.target.value)},placeholder:"CAMPO",autoSize:!0,true:!0}))}function w(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),g=i[0],f=i[1],O=Object(n.useState)(""),h=Object(o.a)(O,2),C=h[0],A=h[1],S=Object(n.useState)(""),I=Object(o.a)(S,2),j=I[0],x=I[1],R=Object(n.useState)(0),N=Object(o.a)(R,2),T=(N[0],N[1],function(e){console.log(e);var t=Object(v.a)(j);t[j.length]=e,x(t)}),w=Object(n.useState)([l.a.createElement(k,{llenarcampos:T,value:j})]),U=Object(o.a)(w,2),z=U[0];U[1];return l.a.createElement(y.a,null,l.a.createElement(d.a,{span:24},l.a.createElement("label",{className:"titles",style:{textAlign:"center",fontSize:100,color:"grey"}},"NUEVA INVERSION")),l.a.createElement(d.a,{span:24},l.a.createElement(E.a,{style:{textAlign:"center"}},l.a.createElement(y.a,null,l.a.createElement(d.a,{span:6},l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{placeholder:"TITULO",style:{textAlign:"center"},onChange:function(e){return A(e.target.value)},value:C,size:"default"}))),l.a.createElement(d.a,{span:6},l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{placeholder:"TIPO",style:{textAlign:"center"},onChange:function(e){return f(e.target.value)},value:g,size:"default"}))),l.a.createElement(d.a,{span:6},l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{placeholder:"DESCRIPCION",style:{textAlign:"center"},onChange:function(e){return c(e.target.value)},value:r,size:"default"}))),z.map((function(e){return e}))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,{span:24},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},l.a.createElement(s.b,{to:"/Inversions"},l.a.createElement(b.a,{type:"primary",shape:"round",onClick:function(){m.database().ref("inversion").push({titulo:C,tipo:g,descrip:r,campos:j})},style:{backgroundColor:"grey"}},"GUARDAR")),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/Home"},l.a.createElement(b.a,{type:"primary",shape:"round",style:{backgroundColor:"grey"}},"INICIO")))))}function U(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(o.a)(c,2),i=u[0],g=u[1],y=Object(n.useState)(""),d=Object(o.a)(y,2),f=(d[0],d[1],Object(n.useState)("")),O=Object(o.a)(f,2),h=(O[0],O[1],Object(n.useState)("")),C=Object(o.a)(h,2),A=C[0],S=C[1],I=Object(n.useState)(""),v=Object(o.a)(I,2),j=v[0],x=v[1];return l.a.createElement("div",{style:{flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",height:"-webkit-fill-available"}},l.a.createElement("label",{style:{textAlign:"center",fontSize:150,color:"white"}},"GRUPO EGO "),l.a.createElement("br",null),l.a.createElement(E.a,{style:{textAlign:"center",flex:"auto"}},l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{type:"email",placeholder:"correo",style:{textAlign:"center"},onChange:function(e){return r(e.target.value)},value:a,size:"default"})),l.a.createElement(E.a.Item,{labelCol:{span:24},wrapperCol:{span:24}},l.a.createElement(p.a,{placeholder:"contrase\xf1a",style:{textAlign:"center"},onChange:function(e){return g(e.target.value)},value:i,size:"default"})),l.a.createElement(b.a,{type:"primary",onClick:function(){m.auth().createUserWithEmailAndPassword(a,i).then((function(){console.log("success"),x("USUARIO CREADO"),console.log(j)}),(function(e){var t=e.message;S(t),console.log(e)})).catch((function(e){}))},style:{backgroundColor:"grey"}},"REGISTRO"),j?l.a.createElement("h1",null,j," "):l.a.createElement("h1",null,A," "),l.a.createElement(s.b,{to:"/Home"},l.a.createElement(b.a,{type:"primary",shape:"rectangle",style:{backgroundColor:"grey"}},"INICIO"))))}function z(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(){i.auth().signOut(),r(null)};return Object(n.useEffect)((function(){i.auth().onAuthStateChanged((function(e){console.log(e),r(!!e||null)}))})),l.a.createElement(s.a,null,l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/",render:function(e){return a?l.a.createElement(u.a,{to:"/Home"}):l.a.createElement(g,e)}}),l.a.createElement(u.b,{exact:!0,path:"/Home",render:function(e){return a?l.a.createElement(f,Object.assign({},e,{logout:c})):l.a.createElement(g,e)}}),l.a.createElement(u.b,{exact:!0,path:"/Inversions",render:function(e){return a?l.a.createElement(S,Object.assign({},e,{logout:c})):l.a.createElement(g,e)}}),l.a.createElement(u.b,{exact:!0,path:"/Inversion/:id",render:function(e){return a?l.a.createElement(R,Object.assign({},e,{logout:c})):l.a.createElement(g,e)}}),l.a.createElement(u.b,{exact:!0,path:"/Profile",render:function(e){return a?l.a.createElement(N,Object.assign({},e,{logout:c})):l.a.createElement(g,e)}}),l.a.createElement(u.b,{exact:!0,path:"/Employees",render:function(e){return a?l.a.createElement(h,Object.assign({},e,{logout:c})):l.a.createElement(g,e)}}),l.a.createElement(u.b,{exact:!0,path:"/Employee",render:function(e){return a?l.a.createElement(C,Object.assign({},e,{logout:c})):l.a.createElement(g,e)}}),l.a.createElement(u.b,{exact:!0,path:"/NewInversion",render:function(e){return a?l.a.createElement(w,Object.assign({},e,{logout:c})):l.a.createElement(g,e)}}),l.a.createElement(u.b,{exact:!0,path:"/FPass",component:T}),l.a.createElement(u.b,{exact:!0,path:"/Register",component:U})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(305);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.4f868d16.chunk.js.map