webpackJsonp([5],{1162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(65),i=n(1254),a=n(0),s=(n.n(a),n(9)),c=n(1255),l=n(1257),u=n(1258),p=n(1260),f=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.panes=[{menuItem:"Samtale",render:function(){return a.createElement(s.C.Pane,{attached:!1},a.createElement(s.l,{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"}},a.createElement("div",null,"Samtale"),a.createElement("div",null,a.createElement(i.a,null,a.createElement("p",null,"Du kan forandre statusen for \xe5 holde kontroll p\xe5 dine kj\xf8p og salg."),a.createElement("p",null,"Dette forandres for b\xe5de selger og kj\xf8per.")),a.createElement(u.a,{ad:t.props.ad,direction:"left"}))),a.createElement(p.a,{conversationID:t.props.ad.conversations[0]}))}},{menuItem:"Tilbakemelding",render:function(){return a.createElement(s.C.Pane,{attached:!1},a.createElement(s.l,null,"Tilbakemelding"),a.createElement(l.a,{ad:t.props.ad}))}}],t}return f(t,e),t.prototype.render=function(){var e=this.props.ad.conversations;return e&&e.length&&e[0]?a.createElement(o.a,null,a.createElement(s.k,{stackable:!0,reversed:"mobile"},a.createElement(s.k.Column,{width:10},a.createElement(s.z,null,a.createElement(s.C,{menu:{secondary:!0,pointing:!0,color:"blue"},panes:this.panes}))),a.createElement(s.k.Column,{width:6},a.createElement(c.a,null)))):null},t}(a.Component);t.default=m},1254:function(e,t,n){"use strict";var r=n(16),o=n(0),i=(n.n(o),n(9)),a=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t=e.children,n=e.color,c=e.icon,l=s(e,["children","color","icon"]);return o.createElement(i.w,a({position:"top center",trigger:o.createElement(r.b,{color:n||"blue",icon:c||"info"}),style:{padding:0}},l),o.createElement(i.z,{color:"blue",inverted:!0},t))}},1255:function(e,t,n){"use strict";var r=n(54),o=n(1256),i=n(0),a=(n.n(i),n(9));t.a=function(){return i.createElement(a.z,{inverted:!0},i.createElement(a.q,{inverted:!0},i.createElement(o.a,{as:function(e){var t=e.id,n=e.public_image_id,o=e.short_description,s=e.href,c=e.header;return i.createElement(a.q.Item,{key:t},i.createElement(r.a,{semanticProps:{size:"tiny",href:s},publicId:n}),i.createElement(a.q.Content,null,i.createElement(a.q.Header,{as:"a",href:s},c),i.createElement(a.q.Description,null,o)))}})))}},1256:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(11)),a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){var e=this.props.promotions,t=this.props.as;return o.createElement(o.Fragment,null,e.map(function(e){return o.createElement(t,s({key:e.id},e))}))},t}(o.Component),l=Object(i.connect)(function(e){var t=e.base;return{promotions:Object.keys(t.promotions).map(function(e){return t.promotions[Number(e)]})}});t.a=l(c)},1257:function(e,t,n){"use strict";var r,o=n(288),i=n(16),a=n(299),s=n(0),c=(n.n(s),n(9)),l=n(116),u=(n.n(l),n(543)),p=n(11),f=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d=n(291).default,h=function(e){return!!e&&e>0},v=function(e){return!!e&&e>0},g=function(e){function t(t){var n=e.call(this,t)||this;return n.state={form:{pristine:!0,valid:!1},dispatch:function(e){return null}},n.debounced=d(function(e,t){return n.props.postReview(e,t).then(function(){n.state.dispatch(l.actions.setSubmitted("review",!0)),n.state.dispatch(l.actions.setPristine("review"))})},5e3,{leading:!0}),n.handleSubmitRating=function(e){var t=e.message,r=e.rating;n.debounced(r,t)},n.props.isFetching||n.props.getReviews(),n}return f(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.isFetching,r=t.isPosting,u=t.user,p=t.users,f=t.ad,d=t.reviews,g=this.state.form,y=g.pristine,b=g.valid,E=u&&u.id,_=d.find(function(e){return e.reviewer===E}),O=d.find(function(e){return e.reviewer!==E}),j=O&&p&&p[O.reviewer],w=E===f.user?f.highestBidderId:f.user,P=void 0!==w&&p[w],S=m({message:"",rating:0},_&&{message:_.message,rating:_.rating});return s.createElement(s.Fragment,null,s.createElement(l.LocalForm,{className:"ui form",model:"review",onSubmit:this.handleSubmitRating,getDispatch:function(t){return e.setState({dispatch:t})},onUpdate:function(t){var n=t.$form;return e.setState({form:n})},initialState:S,validators:{rating:{min:h,max:v}}},s.createElement("p",null,"Her kan du gi en offentlig tilbakemelding p\xe5 dette kj\xf8pet. Dette hjelper andre med \xe5 opprettholde seri\xf8siteten hos selgere og kj\xf8pere."),s.createElement("p",null,"Din rating av ",P&&P.given_name,":",s.createElement(a.a,{rating:S.rating,onRate:function(t){return e.state.dispatch(l.actions.change("review.rating",t))}})),s.createElement(c.h,{hidden:!0}),s.createElement("div",{style:{display:"flex"}},s.createElement(o.a,{style:{flexGrow:1,marginBottom:0},placeholder:"Skrive din beskjed her.",typeComponent:c.E,hideErrors:!0,controlProps:{rows:1,autoHeight:!0},model:"review.message",minLength:1,maxLength:300}),s.createElement(c.a,{icon:!0,primary:!0,disabled:n||!b||r,type:"submit"},n||r?s.createElement(i.a,{active:!0}):s.createElement(i.b,{icon:"user"}),"Legg inn anmeldelse"))),_&&y&&s.createElement(c.t,{info:!0},s.createElement(c.t.Header,null,"Takk for din tilbakemelding."),s.createElement("p",null,"Om du \xf8nsker kan du endre den.")),O&&s.createElement(c.t,{color:"green"},s.createElement(c.t.Header,null,"Her er det ",j&&j.given_name," har \xe5 si om deg."),s.createElement(a.a,{rating:O.rating}),s.createElement("p",null,O.message)))},t}(s.Component),y=Object(p.connect)(function(e,t){var n=e.user,r=e.users,o=e.review,i=t.ad,a=Object.keys(o.reviews).map(function(e){return o.reviews[Number(e)]}).filter(function(e){return e.auction===i.id});return{isFetching:o.isFetching,isPosting:o.isPosting,reviews:a,user:n.user,users:r}},function(e,t){return{postReview:function(n,r){return e(Object(u.c)(t.ad.id,n,r))},getReviews:function(){return e(Object(u.b)(t.ad.id))}}});t.a=y(g)},1258:function(e,t,n){"use strict";var r,o=n(42),i=n(16),a=n(0),s=(n.n(a),n(9)),c=n(82),l=n(11),u=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},m=n(1259),d=Object.keys(o.a).map(function(e){return p({key:e},Object(o.d)(o.a[e]))}).sort(function(e,t){return e.sortOrder-t.sortOrder}),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={sending:!1},t.debounced=m(function(e){return t.props.setStatus(e)},2e3,{leading:!0}),t.handleChange=function(e){t.setState({sending:!0}),t.debounced(e).then(function(){return t.setState({sending:!1})})},t}return u(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.ad,r=(t.setStatus,f(t,["ad","setStatus"])),c=Object(o.d)(o.a[n.status]);return a.createElement(a.Fragment,null,a.createElement(i.a,{active:this.state.sending}),a.createElement(s.i,p({text:"Status: "+c.text,labeled:!0,button:!0},r),a.createElement(s.i.Menu,null,d.map(function(t){var n=t.key,r=t.description,c=t.icon,l=t.color;return a.createElement(s.i.Item,{key:n,disabled:n===o.a.active,onClick:function(){return e.handleChange(o.a[n])}},a.createElement("div",null,a.createElement(i.b,{color:l,icon:c}),r))}))))},t}(a.Component),v=Object(l.connect)(null,function(e,t){return{setStatus:function(n){return e(Object(c.h)(t.ad.id,n))}}});t.a=v(h)},1259:function(e,t,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=void 0,i=void 0,a=void 0,s=[];return function(){var c,l=function(e){return"function"===typeof e?e():e}(t),u=(new Date).getTime(),p=!o||u-o>l;o=u;for(var f=arguments.length,m=Array(f),d=0;d<f;d++)m[d]=arguments[d];if(p&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[m])).then(function(e){return e[0]}):Promise.resolve(e.call.apply(e,[this].concat(m)));if(i?clearTimeout(a):i=function(){var e={};return e.promise=new Promise(function(t,n){e.resolve=t,e.reject=n}),e}(),s.push(m),a=setTimeout(function(){var t=i;clearTimeout(a),Promise.resolve(n.accumulate?e.call(this,s):e.apply(this,s[s.length-1])).then(t.resolve,t.reject),s=[],i=null}.bind(this),l),n.accumulate){var h=(c=s.length-1,{v:i.promise.then(function(e){return e[c]})});if("object"===("undefined"===typeof h?"undefined":r(h)))return h.v}return i.promise}}},1260:function(e,t,n){"use strict";var r,o=n(288),i=n(16),a=n(0),s=(n.n(a),n(116)),c=(n.n(s),n(9)),l=n(67),u=n(126),p=n(11),f=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=Number("500")||100,d=Number("10000")||2e4,h=function(e){function t(t){var n=e.call(this,t)||this;return n.state={validForm:!1,dispatch:function(e){return null}},n.feedContainer=null,n.handleSubmitMessage=function(e){var t=e.msg,r=e.target,o=n.state,i=o.dispatch;if(o.validForm)return n.props.newMessageInConversation(n.props.conversationID,t).then(function(e){e&&i&&(r&&(r.value=""),i(s.actions.reset("conversation")))})},n.refreshConstantly=function(){return setTimeout(n.refresh,d)},n.refresh=function(){var e=n.props,t=e.isFetching,r=e.conversation;if(t)n.refreshConstantly();else{var o=r[n.props.conversationID];n.props.getConversation(n.props.conversationID,o&&o.updated_at).then(n.refreshConstantly)}},n.refresh(),n}return f(t,e),t.prototype.componentWillUnmount=function(){this.refresh=function(){return null}},t.prototype.componentDidUpdate=function(){this.feedContainer&&(this.feedContainer.scrollTop=this.feedContainer.scrollHeight)},t.prototype.render=function(){var e=this,t=this.props,n=t.users,r=t.message,u=t.loaded,p=t.isPosting,f=t.conversationID,d=t.user;if(!d.user)return null;if(!u)return a.createElement(c.r,{inline:!0,active:!0},"Henter samtale...");var h=d.user;return a.createElement(a.Fragment,null,a.createElement("div",{ref:function(t){return e.feedContainer=t},style:{maxHeight:"60vh",overflow:"auto"}},a.createElement(c.z,{inverted:!1},a.createElement(c.d.Group,{style:{display:"flex",flexDirection:"column"}},r.filter(function(e){return e.conversation===f}).map(function(e){var t=e.message_html,r=e.date,o=e.id,i=e.user,s=h.id===i?h:n[i];return s?a.createElement(c.d,{key:o},a.createElement(c.d.Avatar,{src:s.picture_url}),a.createElement(c.d.Content,null,a.createElement(c.d.Author,{as:"a"},s.given_name),a.createElement(c.d.Metadata,null,a.createElement("div",null,Object(l.b)(r))),a.createElement(c.d.Text,null,a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))):null})))),a.createElement(c.z,{attached:!0},a.createElement(s.LocalForm,{className:"ui form",model:"conversation",onSubmit:this.handleSubmitMessage,getDispatch:function(t){return e.setState({dispatch:t})},onUpdate:function(t){var n=t.$form;return e.setState({validForm:n.valid})},initialState:{msg:""}},a.createElement("div",{style:{display:"flex"}},a.createElement(o.a,{style:{flexGrow:1,marginBottom:0},placeholder:"Skrive din beskjed her.",typeComponent:c.E,hideErrors:!0,controlProps:{rows:1,autoHeight:!0,onKeyPress:function(t){13!==t.charCode||t.shiftKey||(t.preventDefault(),t.stopPropagation(),e.handleSubmitMessage({msg:t.currentTarget.value,target:t.currentTarget}))}},model:"conversation.msg",minLength:1,maxLength:m}),a.createElement(c.a,{icon:a.createElement(i.b,{icon:"edit"}),content:"Send",loading:p,primary:!0,disabled:!this.state.validForm,type:"submit"})))))},t}(a.Component),v=Object(p.connect)(function(e){var t=e.users,n=e.user,r=e.conversation,o=r.isFetching,i=r.conversation,a=r.message,s=r.isPosting;return{user:n,isFetching:o,loaded:r.loaded,isPosting:s,conversation:i,users:t,message:Object.keys(a).map(function(e){return a[e]})}},function(e){return{getConversation:function(t,n){return e(Object(u.c)(t,n))},newMessageInConversation:function(t,n){return e(Object(u.f)(t,n))}}});t.a=v(h)}});
//# sourceMappingURL=5.923f430b.chunk.js.map