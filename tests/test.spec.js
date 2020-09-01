import { mount } from '@vue/test-utils'
import Settings from '@/Settings.js'
import Vue from 'vue';
import fr from './fr.js'
import index from '@/index';

//set Lang options to Setting throw index
Vue.use(index , fr);

describe('Settings.js', () =>
{
  const wrapper = mount(Settings);

  // $Lang function will access to fr.js file by options instance insitialised from index.js and get the hMessage.read
  test('test Lang() function' ,()=>
  {
    expect(wrapper.vm.$Lang("hMessage.read")).toContain("Afficher les messages");
  }),  

  // if __userLang equal to navigator.language then SetLocalLanguage() do the job
  test('test SetLocalLanguage() function' ,()=>
  {
    expect(wrapper.vm.__userLang).toContain(navigator.language.slice(0, 2));
  })

  test('test ChangeCurrentLanguage() function' ,()=>
  {
    wrapper.vm.$ChangeCurrentLanguage('fr')
    expect(wrapper.vm.__userLang).toContain('fr');
    expect(wrapper.vm.__FullUserLang).toContain('Français');
  })

})