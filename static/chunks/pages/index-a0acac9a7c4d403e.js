(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(818)}])},818:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var s=a(5893),n=a(5855),c=a(202);function l(e){var t,a,n,c;let{post:l}=e;return(0,s.jsxs)("div",{className:"mx-5 bg-white rounded-lg p-3 shadow-md",children:[(0,s.jsxs)("div",{className:"flex items-center p-1 gap-2",children:[(0,s.jsx)("img",{src:null===(a=l.profile)||void 0===a?void 0:null===(t=a.picture)||void 0===t?void 0:t.medium,className:"w-[45px] h-[45px] rounded-full",alt:""}),(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"text-xl  font-bold",children:Object.values((null===(n=l.profile)||void 0===n?void 0:n.name)||{}).join(" ")})})]}),(0,s.jsx)("p",{children:null===(c=l.post)||void 0===c?void 0:c.fact})]})}var i=a(7294);function r(){return(0,s.jsxs)("div",{className:"mx-5 animate-pulse bg-white rounded-lg p-3 shadow-md",children:[(0,s.jsxs)("div",{className:"flex items-center p-1 gap-2",children:[(0,s.jsx)("div",{className:"w-[45px] h-[45px] bg-[#85d5fd2f] rounded-full"}),(0,s.jsx)("div",{className:"h-7 w-[50%] rounded-full  bg-[#85d5fd2f]"})]}),(0,s.jsx)("div",{className:"h-2 bg-[#85d5fd2f] rounded-full mt-2"})]})}class d{static async getPeople(e){let{pageParam:t=1}=e;return await fetch("".concat("https://randomuser.me/api/?results=10&nat=us&page=").concat(t)).then(e=>e.json()).then(e=>e.results)}}class o{static async getCats(e){let{pageParam:t=1,...a}=e;return await fetch("".concat("https://catfact.ninja/facts?page=").concat(t)).then(e=>e.json()).then(e=>e.data)}}class u{static async createPosts(e,t){let a=[];for(let s=0;s<e.length;s++)a.push({post:e[s],profile:t[s]});return a}}class f{static async getData(e){let t=await d.getPeople(e),a=await o.getCats(e);return u.createPosts(a,t)}}var h=a(21),x=a(8533);function m(){let[e,t]=(0,i.useState)(!0),[a,n]=(0,i.useState)([]),c=(0,h.N)({queryKey:["cat"],refetchOnWindowFocus:!1,queryFn:f.getData,initialPageParam:30,getNextPageParam:(e,t)=>e.length>0?t.length+1:void 0}),d=async()=>await c.fetchNextPage();return(0,i.useEffect)(()=>{let e=c.data;e&&(n(e.pages.reduce((e,t)=>[...e,...t],[])),t(!1))},[c.data,c.hasNextPage]),(0,s.jsx)("section",{className:"grid justify-items-center",children:(0,s.jsxs)("div",{className:"min-h-[100vh] flex flex-col w-[60%] bg-[#85d5fd20] shadow-inner justify-center py-5",children:[e&&(0,s.jsx)(p,{}),(0,s.jsx)(x.Z,{dataLength:a.length,next:()=>d(),hasMore:!0,loader:(0,s.jsx)(r,{}),initialScrollY:0,className:"flex flex-col gap-5",children:!e&&a.map((e,t)=>(0,s.jsx)(i.Fragment,{children:(0,s.jsx)(l,{post:e})},t))}),!c.hasNextPage&&c.data&&(0,s.jsx)("div",{className:"p-5 text-md font-bold text-center",children:"Couldn't found more posts"})]})})}function p(){return(0,s.jsx)(s.Fragment,{children:Array(10).fill({}).map((e,t)=>(0,s.jsx)(i.Fragment,{children:(0,s.jsx)(r,{})},t))})}let g=new n.S;function j(){return(0,s.jsx)(c.aH,{client:g,children:(0,s.jsx)("main",{className:"bg-[".concat("/_next/static/media/background.68fab5c4.png","] bg-cover"),children:(0,s.jsx)(m,{})})})}}},function(e){e.O(0,[929,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);