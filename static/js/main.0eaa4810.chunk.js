(this["webpackJsonpnew-bioskop"]=this["webpackJsonpnew-bioskop"]||[]).push([[0],{30:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),r=s(17),l=s.n(r),c=s(4),i=(s(30),s(2)),o=s(15),d=s(23);function m(e){var t=e.children,s=Object(d.a)(e,["children"]),n={isAuthenticated:!1,isAdmin:!1},r=JSON.parse(localStorage.getItem("cinemine.auth"));return r&&(n=r),Object(a.jsx)(i.b,Object(o.a)(Object(o.a)({},s),{},{render:function(){return!0===n.isAuthenticated?t:Object(a.jsx)(i.a,{to:"/landing"})}}))}var x=s(21);function b(){var e=Object(n.useState)({username:"user",password:"12345"}),t=Object(x.a)(e,2),s=t[0],r=(t[1],Object(n.useRef)()),l=Object(n.useRef)(),c=Object(i.g)();return Object(a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-background-dark py-12 px-4 sm:px-6 lg:px-8 font-headline",children:Object(a.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"text-3xl tracking-tight font-bold sm:text-4xl md:text-5xl text-center",children:Object(a.jsx)("span",{className:"block font-title text-primary-default",children:"Cinemine"})}),Object(a.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-secondary-default",children:"Sign in to your account"})]}),Object(a.jsxs)("div",{className:"mt-8 space-y-6",children:[Object(a.jsx)("input",{type:"hidden",name:"remember",value:"true"}),Object(a.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"username",className:"sr-only",children:"Email address"}),Object(a.jsx)("input",{ref:r,defaultValue:s.username,id:"username",name:"username",type:"username",autoComplete:"username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-background-dark rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(a.jsx)("input",{ref:l,defaultValue:s.password,id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-background-dark rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password"})]})]}),Object(a.jsxs)("div",{className:"flex items-center justify-between",children:[Object(a.jsxs)("div",{className:"flex items-center",children:[Object(a.jsx)("input",{id:"remember_me",name:"remember_me",type:"checkbox",className:"h-4 w-4 text-primary-default focus:ring-primary-light border-gray-300 rounded"}),Object(a.jsx)("label",{htmlFor:"remember_me",className:"ml-2 block text-sm text-secondary-default",children:"Remember me"})]}),Object(a.jsx)("div",{className:"text-sm",children:Object(a.jsx)("a",{href:"#pablo",className:"font-medium text-primary-default hover:text-primary-light",children:"Forgot your password?"})})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("button",{type:"button",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-dark hover:bg-primary-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){var e=r.current.value,t=l.current.value,s=!1;"admin"===e&&"admin"===t&&(s=!0),localStorage.setItem("cinemine.auth",JSON.stringify({isAuthenticated:!0,isAdmin:s})),c.push("/")},children:[Object(a.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(a.jsx)("svg",{className:"h-5 w-5 text-primary-default group-hover:text-primary-dark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),"Sign in"]})})]})]})})}var u=function(){return Object(a.jsxs)("div",{className:"relative bg-background-dark overflow-hidden font-headline",children:[Object(a.jsx)("div",{className:" max-w-7xl mx-auto h-full",children:Object(a.jsxs)("div",{className:" relative z-10 pb-8 bg-background-dark sm:pb-10 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32",children:[Object(a.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background-dark transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:Object(a.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),Object(a.jsx)("div",{className:"px-6 pt-8 pb-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none lg:pt-0 lg:pb-16",children:Object(a.jsx)("div",{className:"flex items-center justify-between",children:Object(a.jsx)("div",{className:"mt-10",children:Object(a.jsx)("h1",{className:"text-3xl tracking-tight font-bold sm:text-4xl md:text-5xl",children:Object(a.jsx)("span",{className:"block xl:inline font-title text-secondary-light",children:"Cinemine"})})})})}),Object(a.jsxs)("div",{className:"px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none",children:[Object(a.jsx)("p",{className:"text-sm font-semibold text-secondary-dark uppercase tracking-wider",children:"Now created using ReactJS and Tailwind CSS"}),Object(a.jsxs)("h1",{className:"mt-3 text-3xl font-semibold font-display text-secondary-light sm:mt-6 sm:text-4xl xl:text-5xl",children:["One Stop Movie Collection,",Object(a.jsx)("br",{className:"hidden sm:inline"}),Object(a.jsx)("span",{className:"text-primary-default",children:"created for fun."})]}),Object(a.jsx)("p",{className:"mt-2 text-lg text-secondary-default sm:mt-3 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl",children:"New version of BioskopKelompok7, recreated using React and Tailwind."}),Object(a.jsx)("div",{className:"mt-6 sm:flex sm:mt-8 xl:mt-12",children:Object(a.jsx)(c.b,{to:"/login",className:"w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-gray-900 bg-secondary-default shadow-sm hover:text-gray-600 focus:text-gray-600 xl:text-lg xl:py-4",children:"Explore"})})]}),Object(a.jsxs)("div",{className:"px-6 pt-8 sm:pt-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-full lg:py-0 lg:pt-12",children:[Object(a.jsx)("p",{className:"text-sm font-semibold text-secondary-default uppercase tracking-wider",children:"Developed by"}),Object(a.jsx)("div",{className:"mt-4 sm:flex",children:Object(a.jsxs)("a",{href:"https://github.com/gunaya",className:"flex items-center no-underline",children:[Object(a.jsx)("div",{className:"flex-shrink-0",children:Object(a.jsx)("img",{className:"h-12 w-12 rounded-full border-2 border-primary-default",src:"https://gunaya.github.io/_assets/profile.8ac1822e.jpg",alt:"Pict"})}),Object(a.jsx)("div",{className:"ml-3",children:Object(a.jsx)("p",{className:"font-semibold text-secondary-default leading-relaxed",children:"I Wayan Gunaya"})})]})})]})]})}),Object(a.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:Object(a.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",alt:""})})]})},j=s(19),h=s(20),p=s(9),f=s(24),g=s(22);function O(){return Object(a.jsxs)("div",{className:"flex space-x-4",children:[Object(a.jsx)(c.b,{to:"/",className:"text-white px-3 py-2 rounded-md text-sm font-medium",children:" Home "}),Object(a.jsx)(c.b,{to:"/movie",className:"text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:" Movie "}),Object(a.jsx)(c.b,{to:"/contact",className:"text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:" Contact Us "})]})}var v=function(e){Object(f.a)(s,e);var t=Object(g.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).state={navbar_open:!1,profile_open:!1},a.toggleNavMenu=a.toggleNavMenu.bind(Object(p.a)(a)),a.toggleProfileMenu=a.toggleProfileMenu.bind(Object(p.a)(a)),a.onLogout=a.onLogout.bind(Object(p.a)(a)),a}return Object(h.a)(s,[{key:"toggleNavMenu",value:function(){this.setState({navbar_open:!this.state.navbar_open})}},{key:"toggleProfileMenu",value:function(){this.setState({profile_open:!this.state.profile_open})}},{key:"onLogout",value:function(){localStorage.setItem("cinemine.auth",JSON.stringify({isAuthenticated:!1,isAdmin:!1}))}},{key:"render",value:function(){var e;return e=this.state.isOpen?Object(a.jsx)("path",{fillRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}):Object(a.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}),Object(a.jsxs)("nav",{className:"bg-background-dark",children:[Object(a.jsx)("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:Object(a.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(a.jsxs)("button",{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:this.toggleNavMenu,children:[Object(a.jsx)("span",{className:"sr-only",children:"Open Main Menu"}),Object(a.jsx)("svg",{className:"h-6 w-6 fill-current",viewBox:"0 0 24 24",children:e})]})}),Object(a.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(a.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[Object(a.jsx)("img",{className:"block h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"}),Object(a.jsx)("span",{className:"hidden lg:block text-white px-3 py-2 rounded-md text-xl font-medium font-title",children:"Cinema"})]}),Object(a.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(a.jsx)(O,{})})]}),Object(a.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:Object(a.jsxs)("div",{className:"ml-3 relative",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("button",{className:"bg-background-light flex text-sm rounded-full focus:outline-noe focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",onClick:this.toggleProfileMenu,children:[Object(a.jsx)("span",{className:"sr-only",children:"Open user menu"}),Object(a.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]})}),Object(a.jsxs)("div",{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 "+(this.state.profile_open?"":"hidden"),role:"menu",children:[Object(a.jsx)("a",{href:"#pablo",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Your Profile"}),Object(a.jsx)("a",{href:"#pablo",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Settings"}),Object(a.jsx)("a",{href:"#pablo",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",onClick:this.onLogout,children:"Sign out"})]})]})})]})}),Object(a.jsx)("div",{className:this.state.navbar_open?"":"hidden",children:Object(a.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[Object(a.jsx)("a",{href:"#pablo",className:"text-white block px-3 py-2 rounded-md text-base font-medium",children:"Home"}),Object(a.jsx)("a",{href:"#pablo",className:"text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Movie"}),Object(a.jsx)("a",{href:"#pablo",className:"text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Order"}),Object(a.jsx)("a",{href:"#pablo",className:"text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Contact Us"})]})})]})}}]),s}(n.Component),y=function(){return Object(a.jsx)("h1",{children:"Home"})},N=function(){return Object(a.jsx)("h1",{children:"Movie"})},w=function(){return Object(a.jsx)("h1",{children:"Contact"})},k=function(){return Object(a.jsx)("h1",{children:"Not found"})};function M(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(v,{}),Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{exact:!0,path:"/",component:y}),Object(a.jsx)(i.b,{path:"/movie",component:N}),Object(a.jsx)(i.b,{path:"/contact",component:w}),Object(a.jsx)(i.b,{component:k})]})]})}var C=function(){return Object(a.jsx)("main",{children:Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"/landing",component:u}),Object(a.jsx)(i.b,{path:"/login",component:b}),Object(a.jsx)(m,{path:"/",children:Object(a.jsx)(M,{})})]})})};l.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.0eaa4810.chunk.js.map