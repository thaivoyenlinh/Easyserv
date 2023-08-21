<template>
  <div class="hero">
    <div class="content mb-2">
      <div class="title mb-2">
        The <span class="text--highlight">EASY</span> way for your customers to book and pay online,
        24/7
      </div>
      <div class="desc">
        Empower your customers to self-manage their service bookings anywhere, anytime. Optionally
        include online payments via a choice of online payment gateways.
      </div>
    </div>

    <div class="image">
      <img class="img-desktop" src="@/assets/images/HeroImage.png" />
      <img class="img-mb" src="@/assets/images/HeroImage-mb.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.text--highlight {
  color: var(--green_light);
}

.hero {
  background: url(@/assets/images/hero-background.jpg) no-repeat;
  background-size: cover;
  // padding: 40px 160px 0;
  padding: 199px 160px 0;

  .content {
    .title {
      @include textStyle(normal, 500, 38, 46);
      text-align: center;
      color: var(--white);
    }

    .desc {
      font-family: var(--font-body);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: var(--white);
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 92.8%;
    }

    .img-mb {
      display: none;
    }
  }
}

@media screen and (max-width: 1151px) {
  .hero {
    padding: 199px 70px 0;

    .content {
      margin: 0 auto;
      width: 80%;
    }
  }
}

@media screen and (max-width: 992px) {
  .hero {
    padding: 0;

    .content {
      margin: 0 auto;
      width: 90%;

      padding-top: calc(64px + 66px);
    }
  }
}

@media screen and (max-width: 767px) {
  .hero {
    padding: 0;

    .content {
      width: 84%;
      margin: 0 auto;
    }

    .image {
      margin-top: 42px;

      .img-desktop {
        display: none;
      }

      img {
        width: 100%;
      }

      .img-mb {
        display: block;
      }
    }
  }
}

@media screen and (max-width: 394px) {
  .hero {
    padding: 0;

    .content {
      width: 92.1%;
      margin: 0 16px;

      .title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 38px;
        color: var(--white);
      }
    }
  }
}
</style>
