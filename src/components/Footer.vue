<template>
  <div class="footer">
    <div class="main-content">
      <div class="info-web">
        <img class="logo-web" src="@/assets/images/Logo.png" />
        <div class="regular-14-22-text gray-light mb-3">
          The modern service experience must be EASY.
        </div>
        <ul>
          <router-link :to="{ name: 'home-view', path: '/home' }" @click="scrollToTop"
            >Home</router-link
          >
          <li>Features</li>
          <router-link :to="{ name: 'demo-view' }" @click="scrollToTop">Demo</router-link>
          <li>About us</li>
          <li>Login</li>
        </ul>
      </div>

      <div class="info-contact">
        <div class="title green-text mb-1">Contact us</div>
        <div class="phone-num info-contact-text">+61 412 774 034</div>
        <div class="info-contact-text mb-3">info@easyserv.au</div>
        <div class="sns-groups">
          <img src="@/assets/images/footer-fb-icon.png" />
          <img src="@/assets/images/footer-ig-icon.png" />
          <img src="@/assets/images/footer-linkedIn-icon.png" />
        </div>
      </div>
    </div>

    <div class="line"></div>

    <div class="info-copyright">
      <div class="info-copyright-text">
        Copyright© 2023 easyserv Australia Pty Lty. All rights reserved.
      </div>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Legal Information</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.footer {
  padding: 80px 160px 0 160px;
  background: var(--blue-light);

  .main-content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 58px;

    .info-web {
      .logo-web {
        margin-bottom: 30px;
      }

      ul {
        list-style-type: none;
        display: flex;
        column-gap: 24px;

        li,
        a {
          text-decoration: none;
          font-family: var(--secondary-font);
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: var(--white);
        }
      }
    }

    .info-contact {
      display: flex;
      flex-direction: column;
      align-items: end;
      padding-top: 8px;

      .title {
        font-family: var(--secondary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
      }

      .phone-num {
        margin-bottom: 4px;
      }

      .sns-groups {
        display: flex;
        column-gap: 12px;
      }

      .info-contact-text {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        font-family: var(--secondary-font);
        color: var(--white);
      }
    }
  }

  .line {
    border: 1px solid var(--blue-black);
  }

  .info-copyright {
    padding: 24px 0;
    display: flex;
    justify-content: space-between;

    ul {
      list-style-type: none;
      display: flex;
      column-gap: 24px;

      li {
        font-family: var(--secondary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--gray-light);
      }
    }

    .info-copyright-text {
      font-family: var(--secondary-font);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: var(--gray-light);
    }
  }
}

@media screen and (max-width: 992px) {
  .footer {
    padding: 80px 16px;
    .main-content {
      // display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      padding-bottom: 40px;

      .info-web {
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo-web {
          margin-bottom: 30px;
        }

        ul {
          flex-direction: column;
          gap: 20px;
          align-items: center;

          // li {
          //   font-family: var(--secondary-font);
          //   font-style: normal;
          //   font-weight: 400;
          //   font-size: 14px;
          //   line-height: 22px;
          //   color: var(--white);
          // }
        }
      }

      .info-contact {
        align-items: center;
        padding-top: 40px;

        // .title {
        //   font-family: var(--secondary-font);
        //   font-style: normal;
        //   font-weight: 700;
        //   font-size: 20px;
        //   line-height: 22px;
        // }

        // .phone-num {
        //   margin-bottom: 4px;
        // }

        // .sns-groups {
        //   display: flex;
        //   column-gap: 12px;
        // }
      }
    }

    .info-copyright {
      flex-direction: column-reverse;
      align-items: center;

      ul {
        margin-bottom: 32px;
        column-gap: 21px;
      }

      .info-copyright-text {
        text-align: center;
      }
    }
  }
}
</style>
