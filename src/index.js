import settings from './Settings.js'


export default {

	install(Vue,options){
		Vue.prototype.$lang_options= options;
		Vue.mixin(settings)
	}
}