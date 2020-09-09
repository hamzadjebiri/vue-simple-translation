# vue-simple-translation

![Minion](https://img.shields.io/badge/vue-2.x-green)
![Minion](https://img.shields.io/badge/build-passing-green)
![Minion](https://img.shields.io/badge/license-MIT-red)
![Minion](https://img.shields.io/badge/npm-v1.0.2-red)
![Minion](https://img.shields.io/badge/laravel-7.x-green)

## Installation

    npm i vue-simple-translation
    
## Usage

Create a .js file containing keys and texts, then you can duplicate that content and edit the text of each key and put it in another file .js

## Examples

## ar.js ( for the Arabic  text )
 
``` js   
    const ar = {

       Message : {

         read : "إظهار الرسائل" ,

         write : "اكتب رسالة جديدة"
       },
      
      //... other keys-text
      
      }
      
      export default ar; 
```

## Now Just copy the last code and place it on en.js then modify it according to our language ( for the English text )

``` js
     const en = {

       Message : {

         read : "Show messages" ,

         write : "Write a new message"
       },
      
      //... other keys-text
      
      }
      
      export default en; 
```

 ## Now in main.js file we need to save our plugin ( https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin ) 

``` js

    // /src/mains.js
    import Vue from 'vue';
    // Here You Can import your keys-text files 
    // ( remember you can save your keys-text files anywhere you like for my case I choose to save them in /src/Lang/... )
    import ar from './Lang/ar.js'
    import en from './Lang/en.js'
    
    // then we import the plugin
    import vueSimpleTranslation from 'vue-simple-translation';
    
    //end we use it with our keys-text files
    Vue.use(vueSimpleTranslation ,{ar,en});
    
```
## all we have to do is call the "vue-simple-translation" functions and see the magic

``` js  
     //exp: test.vue
     <template>
       <p> {{$Lang('Message.read')}} </p> // result : Show messages
     </template>
```    
### by default, the current language will be retrieved from your browser but you can change it

``` js
     <tempalte>
        
        // Here you can use a Dropdown on your toolbar to change Tranzlation using $ChangeCurrentLanguage() in my case i use Bootstrap v4.5
        // https://getbootstrap.com/docs/4.5/components/dropdowns/  
        // you are free to customize your drop-down menu
        
        <div class="dropdown">
           <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown button
           </button>
           <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-for="(item, index) in items"  :key="index"  @click="$ChangeCurrentLanguage(item.value)" >
             <a class="dropdown-item" href="#">{{ item.title }}</a>
           </div>
         </div>
         
     </template>
```

``` js
     <script>
     
      export default {
      
        data: () => ({
        
         Translation_value_name : "Translation",

         items:[
           { title: 'العربية' , value:'ar'},
           { title: 'English'  , value:'en'},  
          ],
          
         }),

        created(){

           this.Translation_value_name = this.$GetFullUserLang() ? this.$GetFullUserLang()  : "Translation" ; 
        }
    
      }
      
   </script>
  
 ```
 
 ## Options
 
 
| function	 | Description
| ------:| -----------:|
| $Lang('..')  | here you can display the translated texts by specifying the keys |
| $ChangeCurrentLanguage('...') | change the current language. |
| $GetFullUserLang()    | Get the full name of the current language , exp "English" |
| $RightSideWindow()   | If the current language is Arabic, the function returns true otherwise it returns false |
