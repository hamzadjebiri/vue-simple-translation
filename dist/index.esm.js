/*!
 * vue-htranzlation v1.0.0
 * (c) hamza
 * Released under the MIT License.
 */
var e={name:"settings",data:function(){return{__userLang:"english",__FullUserLang:"Translation"}},created:function(){this.$SetLocalLanguage()},methods:{$SetLocalLanguage:function(){var e=sessionStorage.getItem("LocalLanguage_state");e?this.__userLang=e:(this.__userLang=navigator.language.slice(0,2),sessionStorage.setItem("LocalLanguage_state",this.__userLang)),this.$SetFullUserLang()},$Lang:function(e){var t,n=(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;")).split(".");return n.length>2||n.length<1?console.error("Value must be between 1 and 2 object keys!"):(t=this.$GetLocalLang(),n.length>1?t[n[0]][n[1]]:t[n])},$GetLocalLang:function(){switch(this.__userLang){case"ar":case"en":case"fr":return this.$lang_options}},$ChangeCurrentLanguage:function(e){this.__userLang=e,sessionStorage.setItem("LocalLanguage_state",this.__userLang),this.$SetFullUserLang(),location.reload()},$SetFullUserLang:function(){switch(this.__userLang){case"ar":return this.__FullUserLang="العربية";case"en":return this.__FullUserLang="English";case"fr":return this.__FullUserLang="Français"}},$GetFullUserLang:function(){return this.__FullUserLang},$RightSideWindow:function(){return"ar"==this.__userLang}}},t={install:function(t,n){t.prototype.$lang_options=n,t.mixin(e)}};export default t;
//# sourceMappingURL=index.esm.js.map
