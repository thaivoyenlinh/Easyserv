<template>
  <div class="contact">
    <div class="container">
      <div class="info-contact">
        <div class="info__title highlight-green-text mb-3">Let’s keep in touch</div>
        <div class="info__desc normal-text mb-3">
          We are taking care of your customers,<br />
          and your business.
        </div>
        <div class="contact-details">
          <div class="medium-16-24-text green-text mb-3">Support & customer care</div>
          <div class="details-phone">
            <img class="phone-icon" src="@/assets/images/phone-icon.png" />
            <div class="medium-white-text mb-1">+61 412 774 034</div>
          </div>
          <div class="details-mail">
            <img class="mail-icon" src="@/assets/images/envelope-icon.png" />
            <div class="medium-white-text mb-1">info@easyserv.au</div>
          </div>
        </div>
      </div>

      <div class="form">
        <div class="form-items mb-2">
          <div class="regular-14-22-text blue-black mb-1">Your name</div>
          <input class="input-demo" type="text" placeholder="Your Name" />
        </div>

        <div class="form-items mb-2">
          <div class="regular-14-22-text blue-black mb-1">Email</div>
          <input class="input-demo" type="text" placeholder="example@gmail.com" />
        </div>

        <div class="form-items mb-2">
          <div class="regular-14-22-text mb-1 option">
            <div class="blue-black">Mobile number</div>
            <div class="gray-light">(optional)</div>
          </div>
          <input class="input-demo" type="text" placeholder="Mobile number" />
        </div>

        <div class="form-items mb-2">
          <div class="regular-14-22-text mb-1 option">
            <div class="blue-black">Your Message</div>
            <div class="gray-light">(optional)</div>
          </div>
          <textarea class="input-demo textarea" type="text" placeholder="Message" />
        </div>

        <div class="footer">
          <div class="btn">Send</div>
          <div class="regular-12-20-text gray-light">
            By clicking on “Send” button,<br />
            you agree to our <span class="underline-text">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>

    <div class="human-image">
      <img src="@/assets/images/Group14675.png" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.contact {
  background: url(@/assets/images/Group5762-BackgroundContact.jpg) no-repeat;
  background-size: cover;
  position: relative;
  padding-left: 160px;
  padding-top: 90px;

  .container {
    width: 75.8%;
    // width: 970px;
    display: flex;
    justify-content: space-between;

    .info-contact {
      padding-bottom: 261px;

      .contact-details {
        padding: 40px;
        background: rgba(255, 255, 255, 0.01);  
        border: 0.900926px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(8px);
        border-radius: 8px;

        .details-phone {
          display: flex;
          align-items: flex-start;

          .phone-icon {
            margin-top: 3px;
            margin-right: 33px;
          }
        }

        .details-mail {
          display: flex;
          align-items: flex-start;

          .mail-icon {
            margin-top: 5px;
            margin-right: 30px;
          }
        }
      }
    }

    .form {
      z-index: 1;
      background: var(--white);
      border-radius: 8px;
      width: 400px;
      height: 474px;
      box-sizing: border-box;
      padding: 40px;

      .form-items {
        .input-demo {
          box-sizing: border-box;
          width: 100%;
          background: var(--white);
          border: 1px solid var(--gray-white);
          border-radius: 2px;
          padding: 5px 12px;
          height: 32px;

          &::-webkit-input-placeholder {
            color: var(--gray-light);
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
          }
        }

        .textarea {
          padding: 8px 12px;
          height: 70px;
        }

        .option {
          display: flex;
          gap: 4px;
        }
      }

      .footer {
        display: flex;
        align-items: center;
        gap: 28px;
      }
    }
  }

  .human-image {
    position: absolute;
    right: 0;
    top: -96px;
    // width: 100%;
  }
}

@media screen and (max-width: 1280px) {
  .contact {
    padding: 80px 16px;

    .container {
      flex-direction: column;
      align-items: center;
      width: 100%;

      .info-contact {
        padding-bottom: 24px;

        .info__title {
          font-size: 30px;
          line-height: 38px;
        }
      }

      .form {
        width: auto;
      }
    }

    .human-image {
      display: none;
    }
  }
}
</style>
