(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{37:function(n,e,t){},79:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),o=t.n(a),i=t(26),c=t.n(i),l=(t(37),t(8)),u=t.n(l),s=t(12),p=t(14),d=t(2),g=t(11),m=t(27),b=t.n(m),f=(t(60),t(28)),x=t.n(f),h=function(n,e){return x.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(e,"&key=").concat("19486649-5319d4f4ef24cda1042915b3a","&image_type=photo&orientation=horizontal&per_page=12"))},j=t(5),v=t(6);function O(){var n=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n  .loader-wrapper {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n"]);return O=function(){return n},n}var y=v.a.div(O());function w(){var n=Object(j.a)(["\n  .Button {\n    display: block;\n    margin: 0 auto;\n    padding: 8px 16px;\n    border-radius: 2px;\n    background-color: #3f51b5;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    /* display: inline-block; */\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 18px;\n    line-height: 24px;\n    font-style: normal;\n    font-weight: 500;\n    min-width: 180px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  .Button:hover,\n  .Button:focus {\n    background-color: #303f9f;\n  }\n"]);return w=function(){return n},n}var k=v.a.div(w()),I=function(n){var e=n.onBtnClick,t=n.title;return Object(r.jsx)(k,{children:Object(r.jsx)("button",{onClick:e,className:"Button",children:t})})};function S(){var n=Object(j.a)(["\n  .ImageGalleryItem {\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]);return S=function(){return n},n}var L=v.a.li(S()),F=function(n){var e=n.image;return Object(r.jsx)(L,{className:"ImageGalleryItem",children:Object(r.jsx)("img",{src:e.webformatURL,alt:e.tags,"data-largeimageurl":e.largeImageURL,className:"ImageGalleryItem-image"})})};function N(){var n=Object(j.a)(["\n  .ImageGallery {\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return N=function(){return n},n}var E=v.a.div(N()),z=function(n){var e=n.images,t=n.openInModal;return Object(r.jsx)(E,{children:Object(r.jsx)("ul",{className:"ImageGallery",onClick:t,children:e.map((function(n,e){return Object(r.jsx)(F,{image:n},"".concat(n.id).concat(e))}))})})};function B(){var n=Object(j.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]);return B=function(){return n},n}var q=v.a.div(B()),C=function(n){var e=n.largeImageUrl,t=n.largeImageAlt,o=n.onCloseModal,i=function(n){"Escape"===n.code&&o()},c=function(n){n.target===n.currentTarget&&o()};return Object(a.useEffect)((function(){return window.addEventListener("keydown",i),function(){return window.removeEventListener("keydown",i),function(){return document.querySelector(".Overlay").removeEventListener("click",c)}}})),Object(a.useEffect)((function(){return document.querySelector(".Overlay").addEventListener("click",c),function(){return window.removeEventListener("keydown",i),function(){return document.querySelector(".Overlay").removeEventListener("click",c)}}})),Object(r.jsx)(q,{className:"Overlay",children:Object(r.jsx)("div",{className:"Modal",children:Object(r.jsx)("img",{src:e,alt:t})})})};function G(){var n=Object(j.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  .SearchForm {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]);return G=function(){return n},n}var M=v.a.header(G()),U=function(n){var e=n.onSubmit,t=Object(a.useState)(""),o=Object(g.a)(t,2),i=o[0],c=o[1];return Object(r.jsx)(M,{className:"Searchbar",children:Object(r.jsxs)("form",{className:"SearchForm",onSubmit:function(n){n.preventDefault(),e(i)},children:[Object(r.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(r.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(r.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(n){c(n.target.value)},value:i})]})})},A={images:[],page:1,query:"",modalIsOpen:!1,largeImageUrl:"",largeImageAlt:"",isLoading:!1,error:null},H=function(){var n=Object(a.useState)(Object(d.a)({},A)),e=Object(g.a)(n,2),t=e[0],o=e[1];Object(a.useEffect)((function(){t.page>2&&window.scrollBy({top:document.documentElement.clientHeight-document.querySelector(".Button").clientHeight-document.querySelector(".Searchbar").clientHeight,behavior:"smooth"})}),[t.page]);var i=function(){o((function(n){return Object(d.a)(Object(d.a)({},n),{},{error:""})}))},c=function(){var n=Object(p.a)(u.a.mark((function n(e){var t,r,a=arguments;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,""!==e){n.next=4;break}return n.abrupt("return");case 4:return window.scrollTo({top:0,behavior:"smooth"}),i(),o((function(n){return Object(d.a)(Object(d.a)({},n),{},{isLoading:!0})})),n.next=9,h(e,t);case 9:r=n.sent,o((function(n){return Object(d.a)(Object(d.a)({},n),{},{images:Object(s.a)(r.data.hits),page:2,query:e,isLoading:!1})})),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),o((function(e){return Object(d.a)(Object(d.a)({},e),{},{error:n.t0})}));case 16:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=Object(p.a)(u.a.mark((function n(){var e,r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i(),e=t.query,r=t.page,o((function(n){return Object(d.a)(Object(d.a)({},n),{},{isLoading:!0})})),n.next=6,h(e,r);case 6:a=n.sent,o((function(n){return Object(d.a)(Object(d.a)({},n),{},{images:[].concat(Object(s.a)(n.images),Object(s.a)(a.data.hits)),page:n.page+1,isLoading:!1})})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),o((function(e){return Object(d.a)(Object(d.a)({},e),{},{error:n.t0})}));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),m=t.images,f=t.isLoading,x=t.modalIsOpen,j=t.largeImageUrl,v=t.largeImageAlt;return Object(r.jsxs)(y,{children:[Object(r.jsx)(U,{onSubmit:c}),f&&Object(r.jsx)("div",{className:"loader-wrapper",children:Object(r.jsx)(b.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),Object(r.jsx)(z,{images:m,openInModal:function(n){"IMG"===n.target.nodeName&&o((function(e){return Object(d.a)(Object(d.a)({},e),{},{largeImageUrl:n.target.dataset.largeimageurl,largeImageAlt:n.target.alt,modalIsOpen:!0})}))}}),m.length>0&&Object(r.jsx)(I,{onBtnClick:l,title:"Load more"}),x&&Object(r.jsx)(C,{largeImageUrl:j,largeImageAlt:v,onCloseModal:function(n){o((function(n){return Object(d.a)(Object(d.a)({},n),{},{largeImageUrl:"",largeImageAlt:"",modalIsOpen:!1})}))}})]})};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.b5a58c49.chunk.js.map