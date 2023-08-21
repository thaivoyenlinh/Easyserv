<template>
  <div class="payment">
    <img class="image-desk" src="@/assets/images/MicrosoftTeams-image1.png" />
    <img class="image-mb" src="@/assets/images/PaymentImg-mb.png" />

    <div class="content">
      <div class="content__title">
        <span class="highlight-green-text">Multiple</span>
        <span class="highlight-blue-text"> payment <br />options</span>
      </div>
      <div class="content__desc regular-gray-text">
        Take payments up front to save customers time at<br />
        pickup and avoid no shows
      </div>
      <div class="btn-groups">
        <img src="@/assets/images/payment-mastercard.png" />
        <img src="@/assets/images/payment-visa.png" />
        <img src="@/assets/images/payment-apple-pay.png" />
        <img src="@/assets/images/payment-gg-pay.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payment {
  padding-right: 160px;
  display: flex;

  @media screen and (max-width: 1200px) {
    padding-right: 130px;
  }

  @media screen and (max-width: 1050px) {
    padding-right: 50px;
  }

  @media screen and (max-width: 946px) {
    padding-right: 40px;
  }

  .image-desk {
    width: 64.4%;
  }

  .image-mb {
    display: none;
  }

  .content {
    margin-top: 75px;
    margin-bottom: 20px;

    @media screen and (max-width: 946px) {
      margin-top: 20px;
    }

    &__desc {
      margin: 24px 0;
    }

    .btn-groups {
      display: flex;
      gap: 28px;
      align-items: center;
      justify-content: flex-start;

      @media screen and (max-width: 946px) {
        gap: 15px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .payment {
    padding: 0;
    flex-direction: column-reverse;
    justify-content: center;

    .image-desk {
      display: none;
    }

    .image-mb {
      display: block;
    }

    .content {
      margin: 0;
      padding: 80px 16px 32px 16px;

      .btn-groups {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
