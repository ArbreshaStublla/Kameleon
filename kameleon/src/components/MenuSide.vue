<template>
  <v-card style="position:fixed; z-index:9999; width:100%;" class="cardstyle">
    <v-layout style="z-index:99999 !Important;">
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

      <v-main class="main" style="display: flex; align-items: center; height: 64px; justify-content: end; position: relative;">
        <div class="avatar" ref="avatar">
          <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="Avatar" style="width: 38px; height: 38px; border-radius: 50%; cursor: pointer;">
          <v-icon style="cursor: pointer;" @click="toggleMenu">mdi-menu-down</v-icon>
          <v-divider v-show="showLine"></v-divider>
        </div>
      </v-main>
    </v-layout>
  </v-card>

  
  <div class="profilelist" ref="profileMenu" v-show="showProfileMenu" @click.stop="closeMenu">
    <v-list>
      <v-list-item v-for="(item, index) in profileMenu" :key="index" :prepend-icon="item.prependIcon" :title="item.title"
        :value="item.value" :class="item.classStyle" :to="item.to" @click="handleProfileMenuItemClick(item)">
        {{ item.title }}
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { id:1,title: "B", value: "b", prependIcon: "mdi-home", classStyle: 'text-left', to: "/" },
        { id:2,title: "Bashkepunimet", value: "Bashkepunimet", prependIcon: "mdi-account-multiple", classStyle: 'text-left', to: "/bashkepunimet" },
        { id:3,title: "Ekipi", value: "Ekipi", prependIcon: "mdi-account", classStyle: 'text-left', to: '/team' },
        { id:4,title: "L", value: "l", prependIcon: "mdi-key", classStyle: 'text-left', to: "/" },
        { id:5,title: "P", value: "p", prependIcon: "mdi-desktop-tower", classStyle: 'text-left', to: "/" },
        { id:6,title: "U", value: "u", prependIcon: "mdi-account-edit", classStyle: 'text-left', to: '/' },
      ],
      profileMenu: [
        { title: "Profili", value: "profili", prependIcon: "mdi-account", classStyle: 'text-left'},
        { title: "Settings", value: "settings", prependIcon: "mdi-cog", classStyle: 'text-left' },
        { title: "Log out", value: "logout", prependIcon: "mdi-logout", classStyle: 'text-left', onClick: this.logoutclick }
      ],
      showLogo: false,
      showHamburgerMenu: true,
      showProfileMenu: false,
      showLine: false
    }
  },
  methods: {
    toggleMenu() {
      this.showProfileMenu = !this.showProfileMenu;
      this.showLine = true;
    },
    handleProfileMenuItemClick(item) {
      if (item.value === 'logout') {
        this.logoutclick();
      }
      this.showProfileMenu = false;
    },
    closeMenu() {
      this.showProfileMenu = false;
    },
    logoutclick() {
      // Your logoutclick method implementation here
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  background-color: #061E2C !important;
  color: #fff;
}
.main {
  background-color: #061E2C;
}
.profilelist {
  position: fixed;
  top: 64px;
  right: 20px;
  background-color: #0C4A6E !important;
  color: #0C4A6E !important;
  width: 180px;
  z-index: 99999999999999 !important;
}
</style>
