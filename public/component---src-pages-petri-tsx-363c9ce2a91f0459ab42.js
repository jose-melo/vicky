(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3Z0o":function(e,t,r){"use strict";r.r(t);var c,n,o=r("q1tI"),l=r("MUpH"),i=r("qxFZ"),a=r("vOnD"),d="\n\tborder-radius: 100px;\n\tcolor: white;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tpadding-left: 5px;\n\tpadding-right: 5px;\n\tfont-family: Montserrat;\n\tcursor: pointer;\n\twidth: 200px;\n\tmargin: 10px;\n\ttext-align: center;\n",s=a.a.div(c||(c=Object(l.a)(["\n\tbackground-color: #70c056;\n\t","\n"])),d),u=a.a.div(n||(n=Object(l.a)(["\n\tbackground-color: #AE87DD;\n\t","\n"])),d),p=function(){if(!("undefined"!=typeof window))return o.createElement(o.Fragment,null);var e=Object(o.useState)("4a"),t=e[0],r=e[1],c=Object(o.useState)("4b"),n=c[0],l=c[1],a=Object(o.useState)("6"),d=a[0],p=a[1],m=Object(o.useState)("1"),k=m[0],x=m[1],y=Object(o.useState)(1),E=y[0],v=y[1],f=Object(o.useState)("#70C056"),M=f[0],w=f[1],b=Object(o.useState)("#5E10BC"),g=b[0],L=b[1],j=Object(i.a)(),W=j.width,z=j.height;return o.createElement(o.Fragment,null,o.createElement(h,{awidth:W,aheight:z,consumer:k,producer:d,empty1:t,empty2:n,colorConsumer:M,colorProducer:g}),o.createElement("div",{style:{display:"inline-block"}},o.createElement(s,{onClick:function(){if(console.log("Down consumer",k,t,n),"1"==k&&0!==E&&("5a"==t||"5b"==n))return v(0),L("#770722"),"5a"==t?(r("void"),void x("2")):"5b"==n?(l("void"),void x("2")):void 0}},"Down Consumer"),o.createElement(s,{onClick:function(){console.log("Up consumer ",k),"2"==k&&(v(1),L("#5E10BC"),x("3"),"void"!=t?"void"!=n||l("4b"):r("4a"))}},"Up Consumer"),o.createElement(s,{onClick:function(){console.log("Do consumer ",k),"3"==k&&x("1")}},"Job outside CR"),o.createElement(u,{onClick:function(){if(console.log("Down producer",d,t,n),0!==E&&"6"==d&&("4a"==t||"4b"==n))return v(0),w("#770722"),"4a"==t?(r("void"),void p("7")):"4b"==n?(l("void"),void p("7")):void 0}},"Down producer"),o.createElement(u,{onClick:function(){console.log("Up producer",d),"7"==d&&(v(1),w("#70C056"),p("8"),"void"!=t?"void"!=n||l("5b"):r("5a"))}},"Up Producer"),o.createElement(u,{onClick:function(){console.log("Do producer",d),"8"==d&&p("6")}},"Job outside CR")))},m={1:{cx:497.5,cy:272},2:{cx:497.5,cy:793},3:{cx:497.5,cy:1314},"4a":{cx:1158.5,cy:529},"4b":{cx:1223.5,cy:529},"5a":{cx:1158.5,cy:1050},"5b":{cx:1223.5,cy:1050},6:{cx:1821.5,cy:272},7:{cx:1821.5,cy:793},8:{cx:1821.5,cy:1314},void:{cx:2821.5,cy:1314}};function h(e){console.log("🚀 ~ file: svg-petri.tsx ~ line 192 ~ SVGPetri ~ props.empty1",e.empty1);var t={cx:m[e.consumer].cx,cy:m[e.consumer].cy},r={cx:m[e.producer].cx,cy:m[e.producer].cy},c={cx:m[e.empty1].cx,cy:m[e.empty1].cy},n={cx:m[e.empty2].cx,cy:m[e.empty2].cy};return o.createElement("svg",Object.assign({width:.8*e.awidth,height:.8*e.aheight,viewBox:"0 0 2281 1770",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.createElement("ellipse",{cx:498.5,cy:271.5,rx:92.5,ry:88.5,fill:"#8FD988"}),o.createElement("ellipse",{cx:1190.5,cy:538.5,rx:92.5,ry:88.5,fill:"#A58868"}),o.createElement("ellipse",{cx:1190.5,cy:1052.5,rx:92.5,ry:88.5,fill:"#E02753"}),o.createElement("ellipse",{cx:c.cx,cy:c.cy,rx:23.5,ry:22,fill:"#000"}),o.createElement("ellipse",{cx:499.5,cy:795.5,rx:92.5,ry:88.5,fill:""+e.colorConsumer}),o.createElement("path",{d:"M497.046 530.062a1.5 1.5 0 002.121-.001l9.54-9.552a1.5 1.5 0 10-2.123-2.12l-8.48 8.49-8.49-8.48a1.5 1.5 0 10-2.12 2.123l9.552 9.54zm-.546-170.061l.106 169.001 3-.002-.106-169.001-3 .002zM496.939 708.061a1.502 1.502 0 002.122 0l9.546-9.546a1.502 1.502 0 000-2.122 1.502 1.502 0 00-2.122 0L498 704.879l-8.485-8.486a1.502 1.502 0 00-2.122 0 1.502 1.502 0 000 2.122l9.546 9.546zM496.5 539v168h3V539h-3z",fill:"#000"}),o.createElement("path",{stroke:"#000",strokeWidth:10,d:"M343.997 534.185L653.996 534"}),o.createElement("ellipse",{cx:499.5,cy:1319.5,rx:92.5,ry:88.5,fill:"#8FD988"}),o.createElement("path",{d:"M497.046 1054.06c.586.59 1.536.59 2.121 0l9.54-9.55c.586-.59.585-1.54-.001-2.12a1.493 1.493 0 00-2.122 0l-8.48 8.49-8.49-8.48a1.492 1.492 0 00-2.121 0c-.586.59-.585 1.54.001 2.12l9.552 9.54zm-.546-170.059l.106 168.999h3l-.106-169.001-3 .002zM496.939 1232.06c.586.59 1.536.59 2.122 0l9.546-9.55a1.5 1.5 0 000-2.12 1.511 1.511 0 00-2.122 0l-8.485 8.49-8.485-8.49a1.511 1.511 0 00-2.122 0 1.5 1.5 0 000 2.12l9.546 9.55zM496.5 1063v168h3v-168h-3z",fill:"#000"}),o.createElement("path",{stroke:"#000",strokeWidth:10,d:"M343.997 1058.19l309.999-.19M1949 791.186l310-.186M33.997 791.186L343.996 791"}),o.createElement("ellipse",{cx:1818.5,cy:271.5,rx:92.5,ry:88.5,fill:"#AE87DD"}),o.createElement("ellipse",{cx:1819.5,cy:795.5,rx:92.5,ry:88.5,fill:""+e.colorProducer}),o.createElement("path",{d:"M1817.05 530.062c.58.585 1.53.585 2.12-.001l9.54-9.552c.58-.586.58-1.536 0-2.122a1.511 1.511 0 00-2.13.002l-8.48 8.49-8.49-8.48a1.498 1.498 0 00-2.12.002 1.51 1.51 0 000 2.121l9.56 9.54zm-.55-170.061l.11 169.001 3-.002-.11-169.001-3 .002zM1816.94 708.061a1.5 1.5 0 002.12 0l9.55-9.546c.58-.586.58-1.536 0-2.122a1.5 1.5 0 00-2.12 0l-8.49 8.486-8.49-8.486a1.5 1.5 0 00-2.12 0 1.511 1.511 0 000 2.122l9.55 9.546zM1816.5 539v168h3V539h-3z",fill:"#000"}),o.createElement("path",{stroke:"#000",strokeWidth:10,d:"M1664 534.185l310-.185"}),o.createElement("ellipse",{cx:1819.5,cy:1319.5,rx:92.5,ry:88.5,fill:"#AE87DD"}),o.createElement("path",{d:"M1817.05 1054.06c.58.59 1.53.59 2.12 0l9.54-9.55c.58-.59.58-1.54 0-2.12-.59-.59-1.54-.59-2.13 0l-8.48 8.49-8.49-8.48a1.49 1.49 0 00-2.12 0c-.58.59-.58 1.54 0 2.12l9.56 9.54zm-.55-170.059l.11 168.999h3l-.11-169.001-3 .002zM1816.94 1232.06c.59.59 1.53.59 2.12 0l9.55-9.55c.58-.58.58-1.53 0-2.12-.59-.58-1.54-.58-2.12 0l-8.49 8.49-8.49-8.49c-.58-.58-1.53-.58-2.12 0-.58.59-.58 1.54 0 2.12l9.55 9.55zm-.44-169.06v168h3v-168h-3z",fill:"#000"}),o.createElement("path",{stroke:"#000",strokeWidth:10,d:"M1664 1058.19l310-.19"}),o.createElement("ellipse",{cx:t.cx,cy:t.cy,rx:23.5,ry:22,fill:"#000"}),o.createElement("path",{d:"M173.5 796.5c10 280 85.5 776 321.5 613",stroke:"#000",strokeWidth:3}),o.createElement("path",{d:"M173.459 796.322c-.18.671-.728 1.242-1.163 1.768a40.218 40.218 0 00-1.83 2.362c-.354.501-.738.942-1.157 1.389-.512.546-.923 1.161-1.403 1.732-.321.381-.717.667-1.105.976-.123.099-.243.2-.363.302-.093.078-.04-.082-.04-.119",stroke:"#000",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M173.34 796.402c1.346 2.101 2.655 4.247 4.205 6.208.381.481.782.943 1.133 1.448.196.282.364.588.613.828.116.113.259.192.357.322",stroke:"#000",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M175 789.5c3.5-293.167 73.1-824.4 323.5-604",stroke:"#000",strokeWidth:3}),o.createElement("path",{d:"M496.499 185.366c-1.745-1.201-3.392-1.844-5.38-2.506-1.356-.452-2.399-1.106-3.84-1.202-2.453-.164-4.887-1.751-6.904-3.034-.153-.098-1.81-1.009-1.055-.587 1.745.978 3.303 2.216 5.028 3.196 1.975 1.122 3.917 2.279 5.936 3.342 1.41.742 3.137 1.184 4.705 1.553 1.951.46 1.693-1.065 1.568-2.491-.345-3.948-.85-7.734-.85-11.712 0-1.213.427-3.463-.264-4.499",stroke:"#000",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M2114.99 796.155C2106 1076.15 2038.13 1572.15 1826 1409.15",stroke:"#000",strokeWidth:3}),o.createElement("path",{d:"M2115.02 795.977c.17.671.66 1.241 1.05 1.768.57.768 1.12 1.548 1.64 2.362.32.5.67.942 1.04 1.388.46.547.83 1.161 1.26 1.733.29.381.65.667 1 .976.11.099.22.2.32.302.09.078.04-.082.04-.119",stroke:"#000",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M2115.13 796.056c-1.21 2.102-2.39 4.248-3.78 6.209-.34.481-.7.943-1.02 1.448-.17.281-.32.588-.55.828-.1.112-.23.192-.32.322",stroke:"#000",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1194 626c-8.99 280-455 650.5-645 432.18",stroke:"#000",strokeWidth:3}),o.createElement("path",{d:"M1193.56 626c.17.671.66 1.241 1.05 1.767.57.769 1.12 1.549 1.64 2.363.32.5.67.942 1.04 1.388.46.547.83 1.161 1.26 1.733.29.381.65.667 1 .976.11.099.22.2.32.302.09.078.04-.083.04-.119",stroke:"#000",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1193.67 626.079c-1.21 2.102-2.39 4.248-3.78 6.209-.34.481-.7.943-1.02 1.447-.17.282-.33.589-.55.829-.1.112-.23.192-.32.322M1200 1141c.26.08 1.03.15 1.64.21.9.09 1.77.18 2.59.27.5.06 1.04.11 1.63.17.73.06 1.31.13 1.99.2.45.04 1.01.08 1.56.11.17.01.34.03.51.04.13.01.06-.01.06-.02M1199 1141c.64 2.15 1.26 4.34 2 6.34.18.5.37.97.54 1.48.09.29.17.61.29.85.06.12.12.2.17.33",stroke:"#000",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1727 1063c-79.77 99.6-297.06 254.41-528 76.92",stroke:"#000",strokeWidth:3}),o.createElement("path",{d:"M1743.26 523.913c.26.321 1.04.594 1.65.845.9.367 1.78.74 2.6 1.129.5.24 1.05.45 1.64.664.73.261 1.31.555 1.99.828.46.182 1.02.319 1.57.467.18.047.34.095.52.144.13.037.05-.039.05-.057M1760 518.886c-1.21 2.147-2.4 4.34-3.8 6.343-.34.491-.7.964-1.02 1.479-.17.288-.33.601-.55.847-.11.114-.23.195-.32.328",stroke:"#000",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1187 450.352c109.45-98.762 376.03-221.5 566.81 77.648M2118.69 789.155c-3.15-293.167-65.71-824.4-290.79-604",stroke:"#000",strokeWidth:3}),o.createElement("path",{d:"M1829.7 185.021c1.57-1.201 3.05-1.844 4.84-2.506 1.22-.452 2.15-1.106 3.45-1.202 2.2-.164 4.39-1.751 6.2-3.034.14-.098 1.63-1.01.95-.587-1.57.978-2.97 2.216-4.52 3.196-1.77 1.122-3.52 2.279-5.33 3.341-1.27.743-2.82 1.185-4.23 1.554-1.76.459-1.52-1.065-1.41-2.492.31-3.947.76-7.733.76-11.711 0-1.213-.38-3.463.24-4.5",stroke:"#000",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M579 517c-.077.942-.309 1.742-.493 2.481a99.244 99.244 0 00-.776 3.315c-.15.703-.313 1.322-.49 1.949-.218.768-.392 1.63-.596 2.431-.136.536-.304.937-.468 1.371-.052.138-.103.28-.154.423-.039.11-.017-.115-.017-.167M591 523c-2.56 1.432-5.05 2.894-8 4.23-.724.328-1.488.642-2.155.986-.373.192-.692.401-1.166.565-.221.076-.493.13-.679.219",stroke:"#000",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1200.5 972.5c-122.33-242-418.4-669.2-624-442",stroke:"#000",strokeWidth:3}),o.createElement("ellipse",{cx:r.cx,cy:r.cy,rx:23.5,ry:22,fill:"#000"}),o.createElement("ellipse",{cx:n.cx,cy:n.cy,rx:23.5,ry:22,fill:"#000"}))}t.default=function(){return o.createElement(p,null)}},qxFZ:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var c=r("q1tI");function n(){var e,t;return{width:null===(e=window)||void 0===e?void 0:e.innerWidth,height:null===(t=window)||void 0===t?void 0:t.innerHeight}}function o(){var e=Object(c.useState)(n()),t=e[0],r=e[1];return Object(c.useEffect)((function(){var e;function t(){r(n())}return null===(e=window)||void 0===e||e.addEventListener("resize",t),function(){var e;return null===(e=window)||void 0===e?void 0:e.removeEventListener("resize",t)}}),[]),t}}}]);
//# sourceMappingURL=component---src-pages-petri-tsx-363c9ce2a91f0459ab42.js.map