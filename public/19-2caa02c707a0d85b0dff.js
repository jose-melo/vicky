(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,v=S&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function z(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(B,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),s):s})),B=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));B.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||S&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:S}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,S=e.durationFadeIn,v=e.Tag,y=e.itemProp,w=e.loading,I=e.draggable,O=g||h;if(!O)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,l.default)({opacity:R?1:0,transition:P?"opacity "+S+"ms":"none"},s),q="boolean"==typeof b?"lightgray":b,k={transitionDelay:S+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&k,s,f),C={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:y},T=this.state.isHydrated?p(O):O[0];if(g)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),q&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&k)}),T.base64&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:C,imageVariants:O,generateSources:x}),T.tracedSVG&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:C,imageVariants:O,generateSources:z}),this.state.isVisible&&d.default.createElement("picture",null,E(O),d.default.createElement(B,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:O}))}}));if(h){var F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},q&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:q,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},P&&k)}),T.base64&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:C,imageVariants:O,generateSources:x}),T.tracedSVG&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:C,imageVariants:O,generateSources:z}),this.state.isVisible&&d.default.createElement("picture",null,E(O),d.default.createElement(B,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:O}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),H=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function q(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}R.propTypes={resolutions:P,sizes:H,fixed:q(u.default.oneOfType([P,u.default.arrayOf(P)])),fluid:q(u.default.oneOfType([H,u.default.arrayOf(H)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var k=R;t.default=k},jhwa:function(e,t,a){"use strict";a.r(t),a.d(t,"SubPage",(function(){return $}));var r,n,i,o,s,l,d,u,c,f,m,p,g,h,b,S,v,y,E,w,z,x,I,O,L,j,B=a("BMrR"),R=a("kPKH"),P=a("ZF+8"),H=a.n(P),q=a("foUO"),k=a.n(q),V=a("q1tI"),C=a.n(V),T=a("TgDt"),F=a("MUpH"),M=a("Wbzz"),W=a("9eSz"),N=a.n(W),D=a("vOnD"),G=Object(D.a)((function(e){var t=Object(M.useStaticQuery)("805009219");return V.createElement(N.a,{imgStyle:{height:"100%",width:"100%"},style:{maxWidth:e.size+"px",display:"block",width:"100%",marginLeft:"auto",marginRight:"auto",marginTop:"2em",marginBottom:"2em"},fluid:t.jose.childImageSharp.fluid})}))(r||(r=Object(F.a)([""]))),A=a("DXvZ"),U=a("Muh6");!function(e){e.ptBr="ptBr",e.fr="fr",e.en="en"}(j||(j={}));(n={})[j.ptBr]="Página inicial",n[j.fr]="Page d'accueil",n[j.en]="Homepage";var J,_,Z,Q,X,K,Y,$,ee=((i={})[j.ptBr]="pt 🇧🇷",i[j.fr]="fr 🇫🇷",i[j.en]="en 🇺🇸",i),te=((o={})[j.ptBr]="Esta é a landing-page para meus projetos pessoais! Aqui, vou \tdisponibilizar o acesso a alguns programas que fiz e testar \tcoisas interessantes. Por enquanto não tem nada aqui 😔, mas com \to passar do tempo vou adicionando mais coisas.",o[j.fr]="C'est la page d'accueil pour mes projets personnels ! \tIci, je vais donner accès à des programmes que j'ai créés et \ttester des choses intéressantes. Pour l'instant il n'y a rien ici 😔, \tmais au fur et à mesure je rajouterai des choses.",o[j.en]="This is the landing-page for my personal projects! Here, \tI'll provide access to some programs I made and test some interesting stuff. \tFor now there's nothing here 😔, but as time goes by I'll add more stuff.",(s={})[j.ptBr]="FPSO Mooring Line Integrity Supervising System Based on Motion Data and Natural Frequency Estimation",s[j.fr]="FPSO Mooring Line Integrity Supervising System Based on Motion Data and Natural Frequency Estimation",s[j.en]="FPSO Mooring Line Integrity Supervising System Based on Motion Data and Natural Frequency Estimation",s),ae=((l={})[j.ptBr]="Confira meu trabalho de pesquisa!",l[j.fr]="Consultez mes travaux de recherche !",l[j.en]="Check out my research work!",l),re=((d={})[j.ptBr]="+10 anos de violão clássico",d[j.fr]="+10 ans de guitare classique",d[j.en]="+10 years of classical guitar",d),ne=((u={})[j.ptBr]="Veja eu tocando Samba de Verão em 2012",u[j.fr]='Regardez-moi jouer la "Samba de Verão" en 2012',u[j.en]='Watch me play "Samba de Verão" in 2012',u),ie=((c={})[j.ptBr]="Simulação de um algoritmo de bloqueio de cache",c[j.fr]="Simulation d'un algorithme de blocage du cache",c[j.en]="Simulation of a cache blocking algorithm",c),oe=((f={})[j.ptBr]="Tabela de páginas",f[j.fr]="Table des pages",f[j.en]="Page table",f),se=((m={})[j.ptBr]="Simulação do funcionamento de uma tabela de páginas",m[j.fr]="Simulation du fonctionnement d'une table des pages",m[j.en]="Simulating the operation of a page table",m),le=((p={})[j.ptBr]="Tabela de páginas",p[j.fr]="Table des pages",p[j.en]="Page table",p),de=((g={})[j.ptBr]="Simulação de rede petri para o problema produtor-consumidor - 2 semáforo2",g[j.fr]="Simulation de réseaux de Petri pour le problème producteur-consommateur - 2 sémaphores",g[j.en]="Petri net simulation for the producer-consumer problem - 2 mutexes",g),ue=((h={})[j.ptBr]="Produtor-consumidor v2",h[j.fr]="Producteur-consommateur v2",h[j.en]="Producer-consumer v2",h),ce=((b={})[j.ptBr]="Simulação de rede petri para o problema produtor-consumidor - 1 semáforo",b[j.fr]="Simulation de réseaux de Petri pour le problème producteur-consommateur - 1 sémaphore",b[j.en]="Petri net simulation for the producer-consumer problem - 1 mutex",b),fe=((S={})[j.ptBr]="Produtor-consumidor v1",S[j.fr]="Producteur-consommateur v1",S[j.en]="Producer-consumer v1",S),me=((v={})[j.ptBr]="🤔",v[j.fr]="🤔",v[j.en]="🤔",v),pe=((y={})[j.ptBr]="Easter Egg",y[j.fr]="Easter Egg",y[j.en]="Easter Egg",y),ge=((E={})[j.ptBr]="Se quiser ver outros repositórios",E[j.fr]="Si vous voulez voir d'autres dépôts",E[j.en]="If you want to see other repositories",E),he=((w={})[j.ptBr]="GitHub",w[j.fr]="GitHub",w[j.en]="GitHub",w),be=((z={})[j.ptBr]="Aplicações interativas sobre computação",z[j.fr]="Applications informatiques interactives",z[j.en]="Interactive Computing Applications",z),Se=((x={})[j.ptBr]="Simulações e animações",x[j.fr]="Simulations et animations ",x[j.en]="Simulations and animations",x),ve=((I={})[j.ptBr]="Instagram",I[j.fr]="Instagram",I[j.en]="Instagram",I),ye=((O={})[j.ptBr]="Ideal para você acompanhar meu dia a dia.",O[j.fr]="Un endroit idéal pour suivre mon quotidien.",O[j.en]="Great place for you to follow my day to day",O),Ee=((L={})[j.ptBr]="Cuidado: vou fazer você se apaixonar por computacao",L[j.fr]="Attention : je vais vous faire aimer l'informatique",L[j.en]="Beware: I'm going to make you fall in love with computing",L),we=a("Vt50"),ze="\n    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI, Helvetica Neue,Helvetica,Arial,sans-serif;\n    color: #333333; \n   ",xe=D.a.div(J||(J=Object(F.a)(["\n    ","\n    margin: 0;\n    font-size: ",";\n    letter-spacing: -0.02em;\n    font-weight: bold;\n"])),ze,(function(e){return e.fontSize})),Ie=D.a.div(_||(_=Object(F.a)(["\n    ","\n    font-size: ",";\n    letter-spacing: -0.02em;\n    font-weight: bold;\n    color: inherit;\n"])),ze,(function(e){return e.fontSize})),Oe=D.a.a(Z||(Z=Object(F.a)(["\n    color: ",";\n\t:hover {\n\t\tcolor: #1fc6db;\n        border-color: #1fc6db\n\t}\n    margin: 1rem;\n    padding: 1.5rem;\n    text-align: left;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    border: 1px solid #eaeaea;\n    border-radius: 10px;\n    -webkit-transition: color 0.15s ease,border-color 0.15s ease;\n    transition: color 0.15s ease,border-color 0.15s ease;\n    flex: 40%;\n"])),we.a.GrayXDark),Le=D.a.div(Q||(Q=Object(F.a)(["\n    display: flex;\n    flex-direction: row;\n    -webkit-box-align: center;\n    align-items: center;\n    margin-top: 1.5rem;\n    box-sizing: border-box;\n    width: 100%;\n    flex-wrap: wrap;\n"]))),je=D.a.div(X||(X=Object(F.a)(["\n    ","\n    text-align: center;\n    line-height: 1.5;\n    font-size: ",";\n    margin: 30px;\n"])),ze,(function(e){return e.fontSize})),Be=D.a.div(K||(K=Object(F.a)(["\n    ","\n    color: inherit;\n    font-size: ",";\n"])),ze,(function(e){return e.fontSize})),Re=D.a.div(Y||(Y=Object(F.a)(["\n    width: 100px;\n\theight: 100px;\n\tmargin: auto;\n    margin-top: 20%;\n"]))),Pe=a("qxFZ"),He=a("rsBK");!function(e){e[e.Home=0]="Home",e[e.Simulations=1]="Simulations",e[e.Random=2]="Random"}($||($={}));var qe=function(e,t,a){var r=Object(V.useState)(!1),n=r[0],i=r[1],o=function(){i(!0),setTimeout((function(){i(!1)}),200)};if(n)return C.a.createElement(C.a.Fragment,null,C.a.createElement(Re,null,C.a.createElement(He.b,null)));switch(e){case $.Random:return C.a.createElement(C.a.Fragment,null,C.a.createElement(Le,null,C.a.createElement(Oe,{href:"https://doi.org/10.1115/OMAE2021-62991"},C.a.createElement(Ie,{fontSize:"1.3em"},ae[t]),C.a.createElement(Be,{fontSize:"1.3em"},te[t])),C.a.createElement(Oe,{href:"https://www.youtube.com/watch?v=Qi_t6yuei4w"},C.a.createElement(Ie,{fontSize:"1.3em"},re[t]),C.a.createElement(Be,{fontSize:"1.3em"},ne[t]))));case $.Simulations:return C.a.createElement(C.a.Fragment,null,C.a.createElement(Le,null,C.a.createElement(Oe,{href:"/petri"},C.a.createElement(Ie,{fontSize:"1.3em"},fe[t]),C.a.createElement(Be,{fontSize:"1.3em"},ce[t])),C.a.createElement(Oe,{href:"/petri2"},C.a.createElement(Ie,{fontSize:"1.3em"},ue[t]),C.a.createElement(Be,{fontSize:"1.3em"},de[t])),C.a.createElement(Oe,{href:"/pagetable"},C.a.createElement(Ie,{fontSize:"1.3em"},le[t]),C.a.createElement(Be,{fontSize:"1.3em"},se[t])),C.a.createElement(Oe,{href:"/st7"},C.a.createElement(Ie,{fontSize:"1.3em"},oe[t]),C.a.createElement(Be,{fontSize:"1.3em"},ie[t]))));default:return C.a.createElement(C.a.Fragment,null,C.a.createElement(Le,null,C.a.createElement(Oe,{href:"https://www.instagram.com/josemelocosta/"},C.a.createElement(Ie,{fontSize:"1.3em"},ve[t]),C.a.createElement(Be,{fontSize:"1.3em"},ye[t])),C.a.createElement(Oe,{onClick:function(){o(),a($.Simulations)},href:"#"},C.a.createElement(Ie,{fontSize:"1.3em"},Se[t]),C.a.createElement(Be,{fontSize:"1.3em"},be[t])),C.a.createElement(Oe,{href:"https://github.com/jose-melo"},C.a.createElement(Ie,{fontSize:"1.3em"},he[t]),C.a.createElement(Be,{fontSize:"1.3em"},ge[t])),C.a.createElement(Oe,{onClick:function(){o(),a($.Random)},href:"#"},C.a.createElement(Ie,{fontSize:"1.3em"},pe[t]),C.a.createElement(Be,{fontSize:"1.3em"},me[t]))))}},ke=(t.default=function(e){var t=Object(V.useState)(j.fr),a=t[0],r=t[1],n=Object(V.useState)($.Home),i=n[0],o=n[1];if(!("undefined"!=typeof window))return C.a.createElement(C.a.Fragment,null);var s=Object(Pe.a)(),l=s.width,d=s.height;console.log("width ",l,"height ",d);var u=ke(l,d),c=u.imageSize,f=u.fontSizeDescription,m=u.fontSizeTitle,p=function(e,t){var a="José Lucas De Melo Costa";e<=940&&(a="José Costa");return{title:a}}(l).title;return C.a.createElement(k.a,null,C.a.createElement(T.a,null,C.a.createElement(H.a,null,C.a.createElement(B.a,null,C.a.createElement(R.a,{xs:4,lg:4,md:4},C.a.createElement(U.a,{style:{textAlign:"right"}},C.a.createElement(A.a,{href:"#",onClick:function(){return a==j.ptBr&&r(j.fr),a==j.fr&&r(j.en),void(a==j.en&&r(j.ptBr))}},ee[a])),C.a.createElement(G,{size:c}),C.a.createElement(xe,{fontSize:m},p),C.a.createElement(je,{fontSize:f},Ee[a]),qe(i,a,o))))))},function(e,t){var a=190,r="1.3em",n="3.5em";return e<=940&&(a=150,r="1em",n="2em"),{imageSize:a,fontSizeDescription:r,fontSizeTitle:n}})},qxFZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI");function n(){var e,t;return{width:null===(e=window)||void 0===e?void 0:e.innerWidth,height:null===(t=window)||void 0===t?void 0:t.innerHeight}}function i(){var e=Object(r.useState)(n()),t=e[0],a=e[1];return Object(r.useEffect)((function(){var e;function t(){a(n())}return null===(e=window)||void 0===e||e.addEventListener("resize",t),function(){var e;return null===(e=window)||void 0===e?void 0:e.removeEventListener("resize",t)}}),[]),t}}}]);
//# sourceMappingURL=19-2caa02c707a0d85b0dff.js.map