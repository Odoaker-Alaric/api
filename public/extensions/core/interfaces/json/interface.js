parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relationship:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"Rys0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../../mixins/interface"),e=n(t);function n(t){return t&&t.__esModule?t:{default:t}}exports.default={mixins:[e.default],data:function(){return{valid:null,lastValue:this.value,processedValue:this.value}},watch:{value:function(){try{this.processedValue=JSON.stringify(JSON.parse(this.value),null,this.options.indent)}catch(t){return""}}},methods:{updateValue:function(t){if(this.options.valid){var e=!1;try{t=JSON.stringify(JSON.parse(t)),e=!0}catch(t){return}this.valid=e,(e||0===t.length)&&this.$emit("input",t)}else this.$emit("input",t)},process:function(t){var e=t.target,n=e.value,i=e.selectionStart,s=n.substr(0,i),r=n.substr(i),a=s.trim().slice(-1),l=r.substr(0,1);if("Enter"===t.key){var u=this.getPreviousLine(n,s),h=this.getIndents(u),o="}"===l?-1:0;"{"!==a&&"["!==a||(o="}"===l||"]"===l?0:1,this.addIndent(s,r,h+o)),h+o>0&&this.addIndent(s,r,h+o),t.preventDefault()}"}"!==t.key&&"]"!==t.key||this.removeIndent(s,r)},getPreviousLine:function(t,e){return t.split(/\n/g)[e.trimRight().split(/\n/g).length-1]||""},getIndents:function(t){var e=this.options.indent,n=new RegExp("^("+e+"+)","g"),i=t.match(n);return i&&i[0].length/e.length||0},addIndent:function(t,e,n){if(n){var i=this.$refs.textarea,s=t+"\n"+this.options.indent.repeat(n)+e;this.processedValue=s,this.lastValue=s;var r=s.length-e.length;i.selectionStart=r,i.selectionEnd=r}},removeIndent:function(t,e){var n=this.$refs.textarea,i=this.options.indent;if(t.slice(t.length-i.length,t.length)===i){var s=t.slice(0,-i.length)+e,r=t.length-i.length;this.processedValue=s,this.lastValue=s,n.selectionStart=r,n.selectionEnd=r}}}};
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea",{ref:"textarea",attrs:{readonly:e.readonly,placeholder:e.options.placeholder,rows:"10"},domProps:{value:e.processedValue},on:{keydown:e.process,input:function(t){e.updateValue(t.target.value)}}})},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-56796d",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["Rys0"], "__DirectusExtension__")