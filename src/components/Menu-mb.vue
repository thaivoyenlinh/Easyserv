<template>
  <div class="menu-mb-content">
    <div class="header">
      <div class="logo-mb">
        <MainLogoMobileIcon />
      </div>
      <div @click="$emit('clickClose')" class="logo-close">
        <CloseIcon />
      </div>
    </div>

    <div class="content">
      <div class="line"></div>

      <div class="list">
        <ul @click="$emit('clickClose')" class="medium-16-24-text mt-3 mb-3 white-text">
          <router-link :to="{ name: 'home-view', path: '/home' }" @click="scrollToTop">Home</router-link>
          <li>Features</li>
          <router-link :to="{ name: 'demo-view' }" @click="scrollToTop">Demo</router-link>
          <li>About us</li>
        </ul>
      </div>

      <div class="line"></div>

      <div class="contact mt-3">
        <div class="contact__title medium-16-24-text green-text">Let’s keep in touch</div>
        <div class="contact__phone">+61 412 774 034</div>
        <div class="contact__mail">info@easyserv.au</div>
        <div class="sns-groups">
          <FacebookLogo />
          <InstagramLogo />
          <LinkedInLogo />
        </div>
      </div>
    </div>

    <div class="btn-groups">
      <div class="btn btn-login">Log in</div>
      <div class="btn">Contact us</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  MainLogoMobileIcon,
  CloseIcon,
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo
} from '@/components/icons/index'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

</script>

<style lang="scss" scoped>
.menu-mb-content {
  background: #05122a;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-mb {
      margin: 18px 0 18px 32px;
    }

    .logo-close {
      width: 32px;
      margin: 16px 24px 16px 0;
    }
  }

  .content {
    padding: 0 16px;

    .line {
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
    }

    .list {
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 24px;

        li,
        a {
          text-decoration: none;
          white-space: nowrap;
          color: var(--white);
        }
      }
    }

    .contact {
      width: 145px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      &__phone,
      &__mail {
        font-family: var(--secondary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: var(--white);
      }

      .sns-groups {
        width: 162px;
        margin-top: 16px;
        margin-bottom: 236px;
        display: flex;
        gap: 12px;
      }
    }
  }

  .btn-groups {
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .btn-login {
      color: var(--white);
      background-color: #05122a;
      border: 1px solid #ffffff;
      border-radius: 32px;
      background: none;
    }
  }
}
</style>
