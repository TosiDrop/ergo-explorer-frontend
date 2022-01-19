(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[11],{222:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var i=s(9),c=s(10),a=s(14),n=s(13),r=s(0),o=s.n(r),l=s(19),b=s(2),u=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bi-coin-value  u-word-wrap u-word-wrap--ellipsis",children:[this.getFormattedValue()," ",this.props.coinName?this.props.coinName:l.a.blockchain.coinName.toUpperCase()]})}},{key:"getFormattedValue",value:function(){var e=this.props.value/1e9;return e<1&&0!==e?e.toFixed(9).split("").reduceRight((function(e,t){return"0"===t&&0===e.length||e.push(t),e}),[]).reverse().join(""):e.toString()}}]),s}(o.a.PureComponent)},223:function(e,t,s){e.exports=function(){"use strict";var e=1e3,t=6e4,s=36e5,i="millisecond",c="second",a="minute",n="hour",r="day",o="week",l="month",b="quarter",u="year",d="date",h="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(e,t,s){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(s)+e},O={s:_,z:function(e){var t=-e.utcOffset(),s=Math.abs(t),i=Math.floor(s/60),c=s%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(c,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var i=12*(s.year()-t.year())+(s.month()-t.month()),c=t.clone().add(i,l),a=s-c<0,n=t.clone().add(i+(a?-1:1),l);return+(-(i+(s-c)/(a?c-n:n-c))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:r,D:d,h:n,m:a,s:c,ms:i,Q:b}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},p="en",k={};k[p]=f;var v=function(e){return e instanceof g},y=function(e,t,s){var i;if(!e)return p;if("string"==typeof e)k[e]&&(i=e),t&&(k[e]=t,i=e);else{var c=e.name;k[c]=e,i=c}return!s&&i&&(p=i),i||!s&&p},x=function(e,t){if(v(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new g(s)},$=O;$.l=y,$.i=v,$.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var g=function(){function f(e){this.$L=y(e.locale,null,!0),this.parse(e)}var _=f.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(j);if(i){var c=i[2]-1||0,a=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return $},_.isValid=function(){return!(this.$d.toString()===h)},_.isSame=function(e,t){var s=x(e);return this.startOf(t)<=s&&s<=this.endOf(t)},_.isAfter=function(e,t){return x(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<x(e)},_.$g=function(e,t,s){return $.u(e)?this[t]:this.set(s,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var s=this,i=!!$.u(t)||t,b=$.p(e),h=function(e,t){var c=$.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return i?c:c.endOf(r)},j=function(e,t){return $.w(s.toDate()[e].apply(s.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},m=this.$W,f=this.$M,_=this.$D,O="set"+(this.$u?"UTC":"");switch(b){case u:return i?h(1,0):h(31,11);case l:return i?h(1,f):h(0,f+1);case o:var p=this.$locale().weekStart||0,k=(m<p?m+7:m)-p;return h(i?_-k:_+(6-k),f);case r:case d:return j(O+"Hours",0);case n:return j(O+"Minutes",1);case a:return j(O+"Seconds",2);case c:return j(O+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var s,o=$.p(e),b="set"+(this.$u?"UTC":""),h=(s={},s[r]=b+"Date",s[d]=b+"Date",s[l]=b+"Month",s[u]=b+"FullYear",s[n]=b+"Hours",s[a]=b+"Minutes",s[c]=b+"Seconds",s[i]=b+"Milliseconds",s)[o],j=o===r?this.$D+(t-this.$W):t;if(o===l||o===u){var m=this.clone().set(d,1);m.$d[h](j),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](j);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[$.p(e)]()},_.add=function(i,b){var d,h=this;i=Number(i);var j=$.p(b),m=function(e){var t=x(h);return $.w(t.date(t.date()+Math.round(e*i)),h)};if(j===l)return this.set(l,this.$M+i);if(j===u)return this.set(u,this.$y+i);if(j===r)return m(1);if(j===o)return m(7);var f=(d={},d[a]=t,d[n]=s,d[c]=e,d)[j]||1,_=this.$d.getTime()+i*f;return $.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",c=$.z(this),a=this.$H,n=this.$m,r=this.$M,o=s.weekdays,l=s.months,b=function(e,s,c,a){return e&&(e[s]||e(t,i))||c[s].substr(0,a)},u=function(e){return $.s(a%12||12,e,"0")},d=s.meridiem||function(e,t,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i},j={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:$.s(r+1,2,"0"),MMM:b(s.monthsShort,r,l,3),MMMM:b(l,r),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:b(s.weekdaysMin,this.$W,o,2),ddd:b(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:$.s(a,2,"0"),h:u(1),hh:u(2),a:d(a,n,!0),A:d(a,n,!1),m:String(n),mm:$.s(n,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:c};return i.replace(m,(function(e,t){return t||j[e]||c.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(i,d,h){var j,m=$.p(d),f=x(i),_=(f.utcOffset()-this.utcOffset())*t,O=this-f,p=$.m(this,f);return p=(j={},j[u]=p/12,j[l]=p,j[b]=p/3,j[o]=(O-_)/6048e5,j[r]=(O-_)/864e5,j[n]=O/s,j[a]=O/t,j[c]=O/e,j)[m]||O,h?p:$.a(p)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return k[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),i=y(e,t,!0);return i&&(s.$L=i),s},_.clone=function(){return $.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},f}(),N=g.prototype;return x.prototype=N,[["$ms",i],["$s",c],["$m",a],["$H",n],["$W",r],["$M",l],["$y",u],["$D",d]].forEach((function(e){N[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,g,x),e.$i=!0),x},x.locale=y,x.isDayjs=v,x.unix=function(e){return x(1e3*e)},x.en=k[p],x.Ls=k,x.p={},x}()},225:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var i=s(9),c=s(10),a=s(14),n=s(13),r=s(223),o=s.n(r),l=s(0),b=s.n(l),u=(s(227),s(2)),d=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=o()(this.props.timestamp);return Object(u.jsxs)("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis",children:[Object(u.jsx)("span",{className:"bi-timestamp__time",children:e.format("HH:mm:ss")}),Object(u.jsx)("span",{className:"bi-timestamp__date",children:e.format("DD.MM.YYYY")})]})}}]),s}(b.a.PureComponent)},227:function(e,t,s){},306:function(e,t,s){},307:function(e,t,s){},311:function(e,t,s){"use strict";s.d(t,"a",(function(){return y}));var i=s(9),c=s(10),a=s(14),n=s(13),r=s(0),o=s.n(r),l=s(16),b=s(32),u=s(66),d=s(222),h=s(225),j=s(3),m=s(57),f=s.n(m),_=s(4),O=s(15),p=(s(306),s(2)),k=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"bi-blocks-table-header bi-blocks-table__row bi-table__row",children:[Object(p.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(p.jsxs)(b.Link,{className:this.getSortDirectionClassName("height"),to:"/?".concat(this.getSortLink("height")),children:[Object(p.jsx)(l.a,{id:"common.block.height"}),Object(p.jsx)(O.G,{className:"bi-blocks-table-header__sort-icon"}),Object(p.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(p.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(p.jsx)("div",{className:"bi-blocks-table__cell bi-blocks-table__cell--timestamp bi-table__cell",children:Object(p.jsxs)(b.Link,{className:this.getSortDirectionClassName("timestamp"),to:"/?".concat(this.getSortLink("timestamp")),children:[Object(p.jsx)(l.a,{id:"common.block.age"}),Object(p.jsx)(O.G,{className:"bi-blocks-table-header__sort-icon"}),Object(p.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(p.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(p.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(p.jsxs)(b.Link,{className:this.getSortDirectionClassName("transactionscount"),to:"/?".concat(this.getSortLink("transactionscount")),children:[Object(p.jsx)(l.a,{id:"common.block.transactions"}),Object(p.jsx)(O.G,{className:"bi-blocks-table-header__sort-icon"}),Object(p.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(p.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(p.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(p.jsx)(l.a,{id:"common.block.minedBy"})}),Object(p.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(p.jsxs)(b.Link,{className:this.getSortDirectionClassName("minerreward"),to:"/?".concat(this.getSortLink("minerreward")),children:[Object(p.jsx)(l.a,{id:"common.block.minerReward"}),Object(p.jsx)(O.G,{className:"bi-blocks-table-header__sort-icon"}),Object(p.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(p.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(p.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(p.jsxs)(b.Link,{className:this.getSortDirectionClassName("difficulty"),to:"/?".concat(this.getSortLink("difficulty")),children:[Object(p.jsx)(l.a,{id:"common.block.difficulty"}),Object(p.jsx)(O.G,{className:"bi-blocks-table-header__sort-icon"}),Object(p.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(p.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(p.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(p.jsxs)(b.Link,{className:this.getSortDirectionClassName("size"),to:"/?".concat(this.getSortLink("size")),children:[Object(p.jsx)(l.a,{id:"common.block.size"}),Object(p.jsx)(O.G,{className:"bi-blocks-table-header__sort-icon"}),Object(p.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(p.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})})]})}},{key:"getSortDirectionClassName",value:function(e){var t=f.a.parse(this.props.history.location.search),s=t.sortBy,i=t.sortDirection,c=["bi-blocks-table-header__sort","u-word-wrap u-word-wrap--ellipsis"];return s===e&&i&&c.push("bi-blocks-table-header__sort--".concat(i)),c.join(" ")}},{key:"getSortLink",value:function(e){var t=f.a.parse(this.props.history.location.search),s=t.sortBy,i=t.sortDirection,c="asc";return s===e&&"desc"===i?f.a.stringify(Object(j.a)(Object(j.a)({},t),{},{offset:void 0,sortBy:void 0,sortDirection:void 0})):(s===e&&"desc"!==i&&(c="desc"),f.a.stringify(Object(j.a)(Object(j.a)({},t),{},{offset:void 0,sortBy:e,sortDirection:c})))}}]),s}(o.a.Component),v=Object(_.o)(k),y=(s(307),function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"bi-blocks-table",children:this.props.blocks?this.renderTable():null})}},{key:"renderTable",value:function(){return Object(p.jsxs)("div",{className:"bi-blocks-table__body bi-table",children:[Object(p.jsx)(v,{}),this.props.blocks.map((function(e){return Object(p.jsxs)("div",{className:"bi-blocks-table__row bi-table__row",children:[Object(p.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(p.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(p.jsx)(l.a,{id:"common.block.height"})}),Object(p.jsx)(b.Link,{to:"/blocks/".concat(e.id),children:e.height})]}),Object(p.jsxs)("div",{className:"bi-blocks-table__cell bi-blocks-table__cell--timestamp bi-table__cell",children:[Object(p.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(p.jsx)(l.a,{id:"common.block.age"})}),Object(p.jsx)(h.a,{timestamp:e.timestamp})]}),Object(p.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(p.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(p.jsx)(l.a,{id:"common.block.transactions"})}),e.transactionsCount]}),Object(p.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(p.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(p.jsx)(l.a,{id:"common.block.minedBy"})}),Object(p.jsx)(b.Link,{to:"/addresses/".concat(e.miner.address||e.miner.name),className:"u-word-wrap u-word-wrap--ellipsis",children:e.miner.name||e.miner.address})]}),Object(p.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(p.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(p.jsx)(l.a,{id:"common.block.minerReward"})}),Object(p.jsx)(d.a,{value:e.minerReward})]}),Object(p.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell bi-blocks-table__cell--difficulty",children:[Object(p.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(p.jsx)(l.a,{id:"common.block.difficulty"})}),e.difficulty]}),Object(p.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(p.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(p.jsx)(l.a,{id:"common.block.size"})}),Object(p.jsxs)("span",{className:"u-word-wrap u-word-wrap--ellipsis",children:[Object(u.a)(e.size,{desiredFormat:"k"}),"B"]})]})]},e.id)}))]})}}]),s}(o.a.Component))},632:function(e,t,s){},674:function(e,t,s){"use strict";s.r(t);var i=s(3),c=s(9),a=s(10),n=s(14),r=s(13),o=s(57),l=s.n(o),b=s(0),u=s.n(b),d=s(16),h=s(26),j=s(4),m=s(24),f=s(31),_=s(76),O=s(33),p=s.n(O),k=s(19),v=function(){function e(){Object(c.a)(this,e)}return Object(a.a)(e,null,[{key:"search",value:function(e){return p.a.get("".concat(k.a.apiUrl,"/search"),{params:{query:e}}).then((function(e){return e?e.data:Promise.reject("Block api service. Request: ".concat(k.a.apiUrl,"/search."))}))}}]),e}(),y={search:function(e){return function(t){return t({type:_.a}),v.search(e).then((function(e){t({payload:{data:e},type:_.b})}))}}},x=s(311),$=(s(632),s(2)),g=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(c.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={canSearch:!0},e.query=void 0,e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){if(this.props.preloaded)this.props.clearPreloadedState();else{var e=l.a.parse(this.props.location.search).query,t=void 0===e?"":e;this.query=t,this.doSearch()}}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=l.a.parse(e.location.search).query,s=void 0===t?"":t;s!==this.query&&(this.query=s,this.doSearch())}},{key:"render",value:function(){return Object($.jsx)("div",{className:"bi-search-results",children:this.state.canSearch?this.renderBody():Object($.jsx)("div",{className:"bi-search-results__body",children:Object($.jsx)(d.a,{id:"components.search-results.wrong-query"})})})}},{key:"renderBody",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data,s=t.blocks,i=t.addresses,c=t.transactions,a=s.find((function(t){return t.id===e.query})),n=c.includes(this.query),r=i.includes(this.query);return 1===s.length?Object($.jsx)(j.c,{to:"/blocks/".concat(s[0].id)}):1===i.length?Object($.jsx)(j.c,{to:"/addresses/".concat(i[0])}):1===c.length?Object($.jsx)(j.c,{to:"/transactions/".concat(c[0])}):a?Object($.jsx)(j.c,{to:"/blocks/".concat(this.query)}):r?Object($.jsx)(j.c,{to:"/addresses/".concat(this.query)}):n?Object($.jsx)(j.c,{to:"/transactions/".concat(this.query)}):Object($.jsxs)("div",{className:"bi-search-results__body",children:[0===s.length&&Object($.jsx)(d.a,{id:"components.search-results.no-results"}),s.length>0&&Object($.jsx)(x.a,{blocks:s,isFetching:this.props.fetching})]})}},{key:"doSearch",value:function(){this.query.length<5?this.setState({canSearch:!1}):(this.setState({canSearch:!0}),this.props.search(this.query))}}]),s}(u.a.Component);var N=Object(h.b)((function(e){return e.search}),(function(e){return Object(m.bindActionCreators)(Object(i.a)(Object(i.a)({},y),f.a),e)}))(g);t.default=N}}]);
//# sourceMappingURL=11.965781d9.chunk.js.map