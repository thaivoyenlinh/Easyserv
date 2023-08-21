<template>
  <div class="service-demo">
    <CardGroupPage :desc-page="data.desc" :card-list="data.cardList" :is-slider="true">
      The modern service experience <br />must be <span class="highlight-green-text">EASY</span>
    </CardGroupPage>
  </div>
</template>

<script setup lang="ts">
import { CardGroupPage } from '@/components'
import {
  BookingReminderHomeIcon,
  MobilityConvenienceHomeIcon,
  CustomerRetentionHomeIcon
} from '@/components/icons'

const data = {
  desc: '',
  cardList: [
    {
      title: 'Booking reminders',
      desc: 'With Easyserv, your customers will receive booking reminders via email & sms the day before their booking. Timely reminders help to increase customer satisfaction and avoid no shows',
      icon: BookingReminderHomeIcon
    },
    {
      title: 'Mobility & Convenience',
      desc: 'Over 50% of medical appointments are booked online, and 80% of those are via mobile devices. Easyserv makes it EASY for your customers to book their service on any device, any time ensuring your business stays current with evolving consumer preferences',
      icon: MobilityConvenienceHomeIcon
    },
    {
      title: 'Customer retention',
      desc: 'Easyserv stores customer details and offers a portal for self-service, displaying service history and upcoming appointments. It boosts loyalty and retention by providing an enjoyable customer experience',
      icon: CustomerRetentionHomeIcon
    }
  ]
}
</script>

<style lang="scss" scoped>
.service {
  padding: 100px 160px 140px 160px;

  .title {
    text-align: center;
    margin-bottom: 40px;
  }

  .card-groups {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 24px;
    // margin-bottom: 140px;

    .card-item {
      width: 100%;
      padding: 40px;
      background-color: var(--white-light);
      backdrop-filter: blur(13.5139px);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      @media screen and (min-width: 992px) {
        width: calc(50% - 92px);
      }

      @media screen and (min-width: 1200px) {
        width: calc(33.33% - 96px);
      }

      .content {
        &__title {
          margin-bottom: 16px;
        }
      }
    }
  }

  .card-slider {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .service {
    padding: 80px 16px 64px 16px;

    .title {
      margin-bottom: 62px;
    }

    .card-groups {
      display: none;
    }

    .card-slider {
      display: block;
    }
  }
}
</style>
