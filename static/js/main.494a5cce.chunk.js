(this["webpackJsonpvotes.fyi"]=this["webpackJsonpvotes.fyi"]||[]).push([[0],{102:function(e,t,n){e.exports=n.p+"static/media/votes.fyi.561ac2a9.png"},105:function(e,t,n){e.exports=n(269)},110:function(e,t,n){},269:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(97),s=n.n(o),c=(n(110),n(3)),l=n.n(c),i=n(36),u=n(104),p=n(38),v=n(39),m=n(45),h=n(44),b=n(27),f=n(272),g=(Object(b.a)(Object(b.a)({},f.a),{},{colors:Object(b.a)(Object(b.a)({},f.a.colors),{},{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}})}),n(62)),d=n(99),j=n(101);function O(){return(O=Object(i.a)(l.a.mark((function e(t){var n,a,r,o,s,c,i,u,p,v,m,h,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.connect)(t,"thegraph");case 2:return n=e.sent,e.next=5,n.app("voting");case 5:return a=e.sent,r={},{},o=new j.Voting(a.address,"https://api.thegraph.com/subgraphs/name/aragon/aragon-voting-mainnet"),e.next=11,o.votes();case 11:s=e.sent,c=Object(g.a)(s),e.prev=13,c.s();case 15:if((i=c.n()).done){e.next=24;break}return u=i.value,e.next=19,u.casts();case 19:p=e.sent,v=Object(g.a)(p);try{for(v.s();!(m=v.n()).done;)h=m.value,r[h.voter]?r[h.voter].push(h.supports):r[h.voter]=[h.supports]}catch(l){v.e(l)}finally{v.f()}case 22:e.next=15;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(13),c.e(e.t0);case 29:return e.prev=29,c.f(),e.finish(29);case 32:return b={allVotes:s,allCasts:r},console.log("bundle is"),console.log(b),e.abrupt("return",b);case 36:case"end":return e.stop()}}),e,null,[[13,26,29,32]])})))).apply(this,arguments)}var w=function(e){return O.apply(this,arguments)},E=n(102),y=n.n(E),k=n(103),x=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={visibile:!0},a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({visible:!1})}),1012),setInterval((function(){e.setState({visible:!0})}),1024)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k.Animated,{animationIn:"pulse",isVisible:this.state.visible,animationInDuration:1e3},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:y.a,style:{width:"35%"}}))),r.a.createElement("h1",null,"Crunching your DAO votes..."),r.a.createElement("h3",null,r.a.createElement("b",null,this.props.orgName)))}}]),n}(r.a.Component),D=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).Leaderboard=function(e){console.log("casts is.."),console.log(e);for(var t=[],n=0,a=Object.entries(e);n<a.length;n++){var o=Object(u.a)(a[n],2),s=o[0];o[1];t.push(r.a.createElement("div",null,s))}return t},a.state={votingDetails:{},orgName:"governance.aragonproject.eth"},a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(window.location),setTimeout((function(){window.location="/#looo"}),3e3),e.next=4,w(this.state.orgName);case 4:t=e.sent,this.setState({votingDetails:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.votingDetails,n=e.orgName,a=t.allCasts,o=r.a.createElement(x,{orgName:n});return a&&(o=r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"hellolllllllsaf",this.Leaderboard(a)))),r.a.createElement(r.a.Fragment,null,o)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.494a5cce.chunk.js.map