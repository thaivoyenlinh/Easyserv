<template>
  <div class="hero-demo">
    <div class="title-hero-demo medium-text white-text">
      The <span class="green-text">EASY</span> way for your <br />
      customers to book and<br />
      pay online, 24/7
    </div>

    <div class="card">
      <div class="card-header">
        <div class="address-groups">
          <PositionIcon />
          <div class="regular-14-22-text gray">Melbourne CBD</div>
          <CaretDownIcon />
        </div>

        <div class="btn-groups">
          <div class="btn-desk">
            <SendIcon />
          </div>
          <div class="btn-desk">
            <CarBackgroundIcon />
          </div>

          <div class="btn-mobile">
            <MenuDemoIcon />
          </div>

          <UserIcon />
        </div>
      </div>

      <div class="line" />

      <div class="card-body">
        <div class="item-groups-desk">
          <div class="item">
            <div class="content">
              <div class="content__logo">
                <CarIcon />
              </div>
              <div class="content__text">
                <div class="title medium-16-24-text">Vehicle</div>
                <div class="desc regular-14-22-text">Select your vehicle</div>
              </div>
            </div>
          </div>

          <div class="greater-icon">
            <GreaterThanIcon />
          </div>

          <div class="item">
            <div class="content">
              <div class="content__logo">
                <WrenchIcon />
              </div>
              <div class="content__text">
                <div class="title medium-16-24-text">Services</div>
                <div class="desc regular-14-22-text">Select your service</div>
              </div>
            </div>
          </div>

          <div class="greater-icon">
            <GreaterThanIcon />
          </div>

          <div class="item">
            <div class="content">
              <div class="content__logo">
                <AppointmentIcon />
              </div>
              <div class="content__text">
                <div class="title medium-16-24-text">Appointment</div>
                <div class="desc regular-14-22-text">DD/MM/YYY</div>
              </div>
            </div>
          </div>
        </div>

        <div class="item-groups-mobile">
          <div class="item">
            <div class="content">
              <div class="content__logo">
                <CarIcon />
              </div>
              <div class="content__text">
                <div class="title medium-16-24-text">Vehicle</div>
                <div class="desc regular-14-22-text">Select your vehicle</div>
              </div>
            </div>
          </div>

          <div class="greater-icon">
            <GreaterThanIcon />
          </div>
        </div>

        <div class="button-booking-container">
          <div class="btn-booking">Book now</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PositionIcon,
  CaretDownIcon,
  SendIcon,
  CarBackgroundIcon,
  UserIcon,
  CarIcon,
  WrenchIcon,
  AppointmentIcon,
  GreaterThanIcon,
  MenuDemoIcon,
} from '@/components/icons/index'
</script>

<style lang="scss" scoped>
.hero-demo {
  padding: 228px 160px 0;
  display: flex;
  justify-content: space-between;
  gap: 71px;

  background-image: url(../../assets/images/demo-desktop-2x-section-hero.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  .card {
    width: 53%;
    height: max-content;

    background: var(--white);
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 583px;

    .card-header {
      padding: 12px 24px 8px;
      display: flex;
      justify-content: space-between;

      .address-groups {
        display: flex;
        align-items: center;
        gap: 6px;
        height: fit-content;
      }

      .btn-groups {
        height: 22px;
        display: flex;
        gap: 8px;

        .btn-mobile {
          display: none;
        }
      }
    }

    .line {
      width: 100%;
      border: 1px solid var(--gray-white);
    }

    .card-body {
      padding: 8px 24px 24px;

      .item-groups-desk {
        display: flex;
        gap: 8px;
        opacity: 0.4;
        align-items: center;

        .item {
          box-sizing: border-box;
          width: calc((100% - 66px) / 3);
          padding: 4px 0 25px 4px;

          .content {
            display: flex;
            gap: 6px;

            &__text {
              .title {
                color: var(--blue-light);
              }

              .desc {
                color: var(--gray-3);
              }
            }
          }
        }

        .greater-icon {
          svg {
            margin-top: 5px;
          }
        }
      }

      .item-groups-mobile {
        display: none;
      }

      .button-booking-container {
        text-align: center;
        .btn-booking {
          display: inline-block;
          width: auto;
          flex-direction: column;
          align-items: center;
          padding: 8px 16px;
          gap: 8px;
          box-sizing: border-box;
          background: #31cb9e;
          border: 1px solid #d5d8dd;
          border-radius: 2px;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #ffffff;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .hero-demo {
      padding: 130px 16px 0;
      flex-direction: column;
      justify-content: flex-start;
      gap: 40px;
      align-items: center;

      .title {
        text-align: center;
      }

      .card {
        width: 361px;
        height: 217px;

        background: var(--white);
        border-radius: 8px;
      }
    }
  }
}

@media screen and (max-width: 1315px) {
  .hero-demo {
    padding: 228px 20px 0;
    gap: 30px;
  }
}

@media screen and (max-width: 992px) {
  .hero-demo {
    padding: 130px 16px 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;

    .card {
      width: 70%;
    }
  }
}

@media screen and (max-width: 767px) {
  .hero-demo {
    background-image: url(../../assets/images/demo-mobile-3x-section-1.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    .title-hero-demo {
      font-size: 30px;
      line-height: 38px;
      text-align: center;

      br {
        display: none;
      }
    }

    .card {
      width: 100%;
      margin-bottom: 350px;

      .card-header .btn-groups {
        .btn-desk {
          display: none;
        }

        .btn-mobile {
          display: block;
        }
      }

      .card-body {
        padding: 12px 24px 24px;

        .item-groups-desk {
          display: none;
        }

        .item-groups-mobile {
          display: flex;
          gap: 8px;
          align-items: center;
          background: #f4f5f7;
          border-radius: 8px;
          justify-content: space-between;
          padding: 12px 12px 17px;
          margin-bottom: 24px;

          .item {
            box-sizing: border-box;
            // padding: 4px 0 25px 4px;

            .content {
              display: flex;
              gap: 6px;

              &__text {
                .title {
                  color: var(--blue-light);
                }

                .desc {
                  color: var(--gray-3);
                }
              }
            }
          }

          .greater-icon {
            svg {
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
