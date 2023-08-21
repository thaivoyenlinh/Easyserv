<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="testimonial">
    <div class="container">
      <div class="content">
        <div class="card">
          <img class="card__icon mb-3" src="@/assets/images/double-quotes.png" />
          <div class="card__desc regular-white-text">
            Since implementing the easyserv online booking tool, we have seen a massive uplift in
            online booking numbers. The interface and system have made it super easy and simple for
            our customers to use, without the need to call the store. It has been so efficient for
            our frontline staff to focus more on what’s important.”​
          </div>
        </div>

        <div class="infor">
          <img class="infor__logo" src="@/assets/images/motor-serve.png" />
          <div class="infor-mb">
            <div class="infor__name medium-white-text">Tony Eljiz</div>
            <div class="infor__positon regular-14-22-white-text">Business Improvement Manager</div>
            <div class="infor__company medium-14-22-white-text">Motorserve</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.testimonial {
  padding: 45px 160px 129px 160px;

  .container {
    background: url(@/assets/images/testimonial-background.jpg) no-repeat;
    background-size: cover;
    border-radius: 8px;

    .content {
      padding: 60px 47px 60px 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 67px;

      .card {
        padding: 40px;
        width: 45%;
        border: 0.900926px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(13.5139px);
        border-radius: 8px;
      }

      .infor {
        width: 40.4%;
        display: flex;
        align-items: center;
        flex-direction: column;

        &__logo {
          width: 29.8%;
          margin-bottom: 21.1px;
        }

        .infor-mb {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) and (min-width: 992px) {
  .testimonial {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media screen and (max-width: 991px) {
  .testimonial {
    padding-left: 0;
    padding-right: 0;
  }
}

@media screen and (max-width: 767px) {
  .testimonial {
    padding: 0;

    .container {
      border-radius: 0;
      .content {
        padding: 80px 0;
        flex-direction: column;
        gap: 40px;

        .card {
          margin: 0 16px;
          box-sizing: border-box;
          width: calc(100% - 32px);
        }
        
        .infor {
          flex-direction: row;
          justify-content: center;
          width: 100%;

          &__logo {
            margin-bottom: 0;
            margin-right: 16px;
            width: 18.4%;
          }

          .infor-mb {
            align-items: flex-start;
          }
        }
      }
    }
  }
}
</style>
