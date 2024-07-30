<template>
   <v-card style="position:fixed; z-index:9999; width:100%;" class="cardstyle">
    <v-layout style="z-index:99999 !Important;" >
      <v-navigation-drawer mobile-breakpoint="960" expand-on-hover rail class="no-padding" @mouseenter="showLogo = true" @mouseleave="showLogo = !showHamburgerMenu">
        <v-list>
          <v-list-item>
            <v-icon v-show="!showLogo && showHamburgerMenu" @mouseenter="showHamburgerMenu=false" @click="showHamburgerMenu = !showHamburgerMenu">mdi-menu</v-icon>
            <v-img :src="require('@/assets/kameleon.png')" v-show="showLogo || !showHamburgerMenu" @mouseleave="showHamburgerMenu = true"></v-img>
          </v-list-item>
        </v-list>
       

        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item v-for="item in menuList" :key="item.title" :prepend-icon="item.prependIcon" :title="item.title"
            :value="item.value" :class="item.classStyle" :to="item.to">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
 

      <v-main class="main"  style="display: flex; align-items: center; height: 64px; justify-content: end; position: relative;">
        <div class="avatar" ref="avatar" @click="toggleMenu">
          <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="Avatar" style="width: 38px; height: 38px; border-radius: 50%; cursor: pointer;">
          <v-icon style="cursor: pointer;" >mdi-menu-down</v-icon>
          <v-divider v-show="showLine"></v-divider> 
        </div>
      </v-main>

    </v-layout>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      menuList: [

        { id:1,title: "B", value: "b", prependIcon: "mdi-home", classStyle: 'text-left', to: "/" },
        { id:2,title: "Bashkepunimet", value: "Bahkepunimet", prependIcon: "mdi-account-multiple", classStyle: 'text-left', to: "/bashkepunimet" },
        { id:3,title: "Ekipi", value: "Ekipi", prependIcon: "mdi-account", classStyle: 'text-left', to: '/team' },
        { id:4,title: "Pergjegjesite", value: "pergjegjesite", prependIcon: "mdi-key", classStyle: 'text-left', to: "/pergjegjesite" },
        { id:5,title: "P", value: "p", prependIcon: "mdi-desktop-tower", classStyle: 'text-left', to: "/" },
        { id:6,title: "U", value: "u", prependIcon: "mdi-account-edit", classStyle: 'text-left', to: '/' },


      ],
      showLogo: false,
      showHamburgerMenu: true,   
  }   
}
}
</script>

<style scoped>
.v-navigation-drawer {
  background-color: #061E2C !important;
  color: #fff;
}
.main{
  background-color: #061E2C;
}

</style>
