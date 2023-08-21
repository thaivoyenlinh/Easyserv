<template>
  <div class="step-booking-component-demo">
    <CardGroupPage :desc-page="data.desc" :card-list="data.cardList" :is-slider="false">
      How it <span class="highlight-green-text">works</span>
    </CardGroupPage>
  </div>
</template>

<script setup lang="ts">
import { CardGroupPage } from '@/components'
import { BookDemoIcon, PayDemoIcon, AttendDemoIcon } from '@/components/icons/index'

const data = {
  desc: 'Empower your customers to self-manage their service bookings anywhere, anytime.',
  cardList: [
    {
      title: 'Book',
      desc: 'Fully online, mobile friendly, contactless booking experience',
      icon: BookDemoIcon
    },
    {
      title: 'Pay',
      desc: 'Secure online payments via a choice of gateways',
      icon: PayDemoIcon
    },
    {
      title: 'Attend',
      desc: 'Increased customer satisfaction and loyalty',
      icon: AttendDemoIcon
    }
  ]
}
</script>
