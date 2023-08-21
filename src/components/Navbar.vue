<template>
  <div class="navbar">
    <div class="navbar__logo">
      <MainLogoIcon />
    </div>

    <div class="navbar__list">
      <ul>
        <router-link :to="{ name: 'home-view', path: '/home' }">Home</router-link>
        <li>Features</li>
        <router-link :to="{ name: 'demo-view', path: '/demo' }">Demo</router-link>
        <li>About us</li>
      </ul>
    </div>

    <div class="navbar__btn-groups">
      <div class="btn-login">Login</div>
      <div class="btn">Contact us</div>
    </div>
  </div>

  <div class="navbar-mb">
    <div class="container">
      <div class="logo-mb">
        <MainLogoMobileIcon />
      </div>
      <div class="menu-mb" @click="onClickMenu()">
        <MenuNavbarIcon />
      </div>
    </div>
  </div>

  <div class="navbar-mb-content" :class="isOpen ? 'navbar-show' : ''">
    <MenuMobile @clickClose="onClickMenu" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import MenuMb from '@/components/Menu-mb.vue';
import { MainLogoIcon, MainLogoMobileIcon, MenuNavbarIcon } from '@/components/icons/index';

export default {
  components: {
    MenuMobile: MenuMb,
    MainLogoIcon,
    MainLogoMobileIcon,
    MenuNavbarIcon,
  },

  setup() {
    const isOpen = ref(false)

    function onClickMenu() {
      console.log(isOpen.value);
      isOpen.value = !isOpen.value
    }

    return { onClickMenu, isOpen }
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  background: rgba(5, 18, 48, 0.9);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-between;

  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 16px 160px 16px;

  &__logo {
    margin: 4px 0;
    display: flex;
  }

  &__list {
    margin: 10px 0px;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      column-gap: 48px;

      li, a {
        text-decoration: none;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: var(--white);
      }
    }
  }

  &__btn-groups {
    display: flex;
    column-gap: 31px;
    align-items: center;

    .btn-login {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--white);
    }
  }
}

.navbar-mb {
  display: none;
}

.navbar-mb-content {
  display: none;
}

@media screen and (max-width: 1151px) {
  .navbar {
    padding: 16px 70px 16px;
  }
}

@media screen and (max-width: 992px) {
  .navbar {
    display: none;
  }

  .navbar-mb {
    display: block;
    margin-bottom: 66px;

    position: fixed;
    background: rgba(5, 18, 48, 0.9);
    backdrop-filter: blur(12px);
    width: 100%;
    z-index: 2;

    .container {
      display: flex;
      justify-content: space-between;

      .logo-mb {
        margin: 18px 0 18px 32px;
        display: flex;
        align-items: center;
      }

      .menu-mb {
        margin: 16px 24px 16px 0;
      }
    }
  }

  .navbar-mb-content {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 0px;
    height: 100px;
    transition: width 0.8s;
    z-index: 10;
  }

  .navbar-show {
    width: 100%;  
  }
}
</style>
