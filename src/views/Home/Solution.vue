<template>
  <div class="solution">
    <div class="content">
      <div class="content__title medium-text mb-1">
        <span class="green-text">End-to-end</span> <span class="white-text">solution</span>
      </div>
      <div class="content__desc regular-white-text">
        As a business owner or workshop administrator, you have all of the<br />
        information you need at your fingertips in a modern, easy to use<br />
        interface. Managing your bookings is simple, saves you time and<br />
        improves profitability
      </div>
    </div>

    <div class="image-groups">
      <div class="image-item">
        <img src="@/assets/images/SolutionImgOne.png">
        <!-- <img src="@/assets/images/SolutionImgOne-mb.png"> -->
        <!-- <img src="@/assets/images/Frame14708.png" /> -->
        <div class="normal-text left-text">Online Bookings & Payments</div>
      </div>
      <div class="image-item mid-item">
        <img src="@/assets/images/Group14654.png" />
      </div>
      <div class="image-item">
        <img src="@/assets/images/SolutionImgTwo.png">
        <!-- <img src="@/assets/images/SolutionImgTwo-mb.png"> -->
        <!-- <img src="@/assets/images/Frame14715.png" /> -->
        <div class="normal-text right-text">Booking Management</div>
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

img {
  width: 91.3%;
}

.solution {
  background: url(@/assets/images/end-to-end-background.jpg) no-repeat;
  background-size: cover;
  padding: 90px 205px 90px 225px;

  .content {
    text-align: center;
    margin-bottom: 82px;

    &__title {
      font-size: 30px;
      line-height: 38px;
    }
  }

  .image-groups {
    display: flex;

    .image-item .left-text {
      text-align: center;
      margin-top: 29.1px;
    }

    .image-item .right-text {
      text-align: center;
      margin-top: 64px;
    }

    .mid-item {
      align-self: center;
      margin-bottom: 25px;
      margin-right: 28px;
      margin-left: -23px;
    }
  }
}

@media screen and (max-width: 992px) {
  .solution {
    // padding: 80px 16px 0 16px;

  }
  
}

@media screen and (max-width: 767px) {
img {
  width: 100%;
}
  .solution {
    padding: 80px 16px 0 16px;

    .content {
      margin-bottom: 116px;
    }

    .image-groups {
      flex-direction: column;

      .image-item .left-text {
        text-align: center;
        margin-top: 23.61px;
        // margin-bottom: 5.53px;
      }

      .mid-item {
        transform: rotate(90deg);
        margin: 5.53px 0 37.38px 0;
      }

      .image-item .right-text {
        text-align: center;
        margin-top: 43.97px;
        margin-bottom: 93.52px;
      }
    }
  }
}
</style>
