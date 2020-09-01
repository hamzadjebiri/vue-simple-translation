export default {

  name:'settings',

  data()
  {
    return{

        __userLang : 'english',
        __FullUserLang : 'Translation',
    }
  },

  created()
  {
    this.$SetLocalLanguage() ; 
  },
        
  methods:{

    /**
     *   retrieve the local language and set its value as the default value of Lang
     *   user can change this value by selecting one of available language
     * 
     *   if we have already saved the local language, we retrieve it from session storage, otherwise we retrieve it from the browser.
     */

     $SetLocalLanguage()
     {
        let LocalLanguage_state = sessionStorage.getItem('LocalLanguage_state')

        if(LocalLanguage_state)
        {
          this.__userLang =  LocalLanguage_state ;
        }
        else
        {
          this.__userLang = navigator.language.slice(0, 2) ; 
          
          sessionStorage.setItem('LocalLanguage_state',  this.__userLang  ) ;
        }

        this.$SetFullUserLang();
     },
      
      
     $Lang(val)
     {
       // Script injection protection
       val = val.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      
       let translated_text  , Lang ,  broken_value = val.split('.');

       //limitation broken value with 2 values
       if( broken_value.length > 2 || broken_value.length < 1 ) return console.error('Value must be between 1 and 2 object keys!');
       
       // retrieve the reference of the translation table relative to the current language
       Lang = this.$GetLocalLang();
       
      //get the translated value from the current language array , exp : en['title']['subtitle'] for english
       broken_value.length > 1 
       ? 
        translated_text = Lang[ broken_value[0] ][ broken_value[1] ]  
       :
        translated_text =  Lang[broken_value];
        
       return translated_text;
     },

     $GetLocalLang()
     {
      switch(this.__userLang)
      {
        case 'ar' : return this.$lang_options;
        case 'en' : return this.$lang_options;
        case 'fr' : return this.$lang_options;
      }
    },

   $ChangeCurrentLanguage(Lang)
   {
      this.__userLang = Lang;

      sessionStorage.setItem('LocalLanguage_state',  this.__userLang  );

      //change current Full User Language
      this.$SetFullUserLang();

      //refresh page
      location.reload();
    },

    $SetFullUserLang()
    {
      switch(this.__userLang)
      {
        case 'ar' : return this.__FullUserLang = "العربية";
        case 'en' : return this.__FullUserLang = "English";
        case 'fr' : return this.__FullUserLang = "Français";
      }
    },

    $GetFullUserLang()
    {
      return this.__FullUserLang;
    },

    // For Arabic translation
    $RightSideWindow()
    {
       return  this.__userLang == 'ar' ? true  : false
    }
  }
}