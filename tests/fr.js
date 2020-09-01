const fr = {

    hMessage : {

        read : "Afficher les messages" ,

        write : "Écrit un nouveau message"
    },

    Drawer_links : [
        
      {
        to: '/',
        icon: 'mdi-view-dashboard',
        text: 'Analytique'
      },
      {
        to: '/profile-settings',
        icon: 'mdi-settings',
        text: 'Paramètres de profil'
      },
      {
        to: '/user-management',
        icon: 'mdi-clipboard-outline',
        text: 'Gestion des Utilisateurs'
      },
      {
        to: '/messages-list',
        icon: 'mdi-email',
        text: 'Messages'
      },
      {
        to: '/rolesPermissions',
        icon: 'fas fa-lock',
        text: 'Roles et Permissions'
      },


      {
        to: '/notifications-list',
        icon: 'mdi-bell',
        text: 'Notifications'
      },

      
       //passports :

       {
         to: '/AuthorizedClients',
         text: 'AuthorizedClients',
         icon: 'mdi-bell'
       },
       {
         to: '/PersonalAccessTokens',
         text: 'PersonalAccessTokens',
         icon: 'mdi-bell'
       },
       {
         to: '/Test_Client',
         text: 'Clients',
         icon: 'mdi-bell'
       },
       {
        to: '/users-stats',
        text: 'Users Stats',
        icon: 'mdi-user'
      },
      {
        to: '/pages-stats',
        text: 'Pages Stats',
        icon: 'mdi-user'
      },

      {
        to: '/dashboard',
        text: 'dashboard',
        icon: 'mdi-user'
      },
       
    
    ],

   
};

export default fr ;
