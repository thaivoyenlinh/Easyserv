<template>
  <div class="feature">
    <div class="content">
      <div class="content__title medium-text mb-1">
        <span class="green-text">Additional</span>
        <span class="blue-dark-text"> features</span>
      </div>

      <div class="content_desc regular-gray-text">
        The Easyserv Online Booking System is packed with smart features<br />
        designed to improve the customer experience and reduce<br />
        administration, delivering productivity and increasing profit
      </div>
    </div>

    <div class="card-groups">
      <div class="card-item">
        <img class="card-icon" src="@/assets/images/Icon2034.png" />
        <div class="card-desc">Promo codes forcustomer retention</div>
      </div>

      <div class="card-item">
        <img class="card-icon" src="@/assets/images/Icon2039.png" />
        <div class="card-desc">Single workshop or Multi-site functionality</div>
      </div>

      <div class="card-item">
        <img class="card-icon" src="@/assets/images/Icon2040.png" />
        <div class="card-desc">Service reminder emails & SMS</div>
      </div>

      <div class="card-item">
        <img class="card-icon" src="@/assets/images/Icon2043.png" />
        <div class="card-desc">Customer login and service history</div>
      </div>

      <div class="card-item">
        <img class="card-icon" src="@/assets/images/Icon2041.png" />
        <div class="card-desc">Workshop administration portal</div>
      </div>

      <div class="card-item">
        <img class="card-icon" src="@/assets/images/Icon2044.png" />
        <div class="card-desc">Many more features</div>
      </div>
    </div>

    <div class="footer">
      <div class="btn footer__btn">Contact us</div>
      <div class="regular-gray-text">for a demonstration today!</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.feature {
  padding: 84px 40px 50px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    text-align: center;
    margin-bottom: 40px;
  }

  .card-groups {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .card-item {
      display: flex;
      align-items: center;
      width: calc(50% - 10px);
      background: var(--white-light);
      border-radius: 8px;

      .card-icon {
        margin: 16px 16px 16px 20px;
      }
    }

    .card-desc {
      margin: 24px 20px 24px 0;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    &__btn {
      margin-bottom: 12px;
    }
  }
}

@media screen and (max-width: 767px) {
  .feature {
    padding: 80px 16px 0 16px;

    .content {
      margin-bottom: 48px;

      &__title {
        font-size: 30px;
        line-height: 38px;
        margin-bottom: 24px;
      }
    }

    .card-groups {
      flex-direction: column;

      .card-item {
        width: 100%;
      }
    }

    .footer {
      margin-bottom: 80px;
    }
  }
}
</style>
