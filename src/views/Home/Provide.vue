<template>
  <div class="provide">
    <div class="content">
      <div class="content__title medium-text">
        <span class="blue-dark-text">Provide</span> <br />
        <span class="green-text">Convenience</span> <br />
        <span class="blue-dark-text">and</span>
        <br /><span class="green-text">Flexibility</span>
      </div>

      <div class="content__desc regular-16-24-text gray">
        Customer convenience and flexibility with self-managed appointments, from any device,
        anytime. Bookings can be added directly into the customer's calendar
      </div>

      <img class="img-mb" src="@/assets/images/ProvideImg-mb.png" />

      <div class="btn provide-btn">Contact us</div>
    </div>

    <img class="img-desk" src="@/assets/images/Frame14713.png" />
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.provide {
  padding: 0 145px 0 160px;
  display: flex;
  justify-content: center;
  gap: 38px;

  .content {
    height: fit-content;
    margin-top: 75px;
    margin-bottom: 74px;

    @media screen and (max-width: 992px) {
      margin-top: 35px;
    }

    &__desc {
      margin: 24px 10px 24px 0;
      width: 370px;
    }

    // .img-desk {
    //   img {
    //     margin-top: -67px;
    //     // width: 100%;
    //     width: 64%;
    //     height: fit-content;
    //   }
    // }

    .img-mb {
      display: none;
    }

    .provide-btn {
      width: auto;
      display: inline;
    }
  }

  img {
    margin-top: -67px;
    width: 64%;
    height: fit-content;
  }
}

@media screen and (max-width: 992px) {
  .provide .content {
    &__title {
      font-size: 30px;
      line-height: 38px;
    }
  }

  img {
    margin-top: 0px !important;
  }
}

@media screen and (max-width: 767px) {
  .provide {
    flex-direction: column;
    padding: 80px 0 0 0;

    .content {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &__title,
      &__desc {
        // width: 361px;
        width: 91.9%;
        margin: 0 16px;
      }

      .img-mb {
        display: block;
        margin-top: 54px;
        margin-bottom: 57px;
      }

      .provide-btn {
        align-self: center;
        margin-bottom: 59px;
      }
    }

    .img-desk {
      display: none;
    }

    img {
      width: 100%;
    }
  }
}
</style>
