<template>
  <div class="container">
    <div class="header">
      <div class="title-page highlight-blue-text mb-1">
        <slot></slot>
      </div>
      <div class="desc-page regular-16-24-text blue-black">
        {{ descPage }}
      </div>
    </div>

    <div class="card-groups" :class="{ 'no-slider': !isSlider }">
      <div class="card-item" v-for="card in cardList" :key="card.title">
        <component :is="card.icon"></component>
        <div class="content">
          <div class="content__title medium-blue-text">{{ card.title }}</div>
          <div class="content__desc regular-gray-text">
            {{ card.desc }}
          </div>
        </div>
      </div>
    </div>

    <div class="slider" v-if="isSlider">
      <Slider :slides="cardList" class="card-slider" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Slider } from '@/components'
import type { PropType } from 'vue'

type CardItem = {
  title: string
  desc: string
  icon: any
}

defineProps({
  // titlePage: {
  //   type: String,
  //   default: ''
  // },
  descPage: {
    type: String,
    default: ''
  },
  cardList: {
    type: Array as PropType<CardItem[]>,
    default: () => [
      {
        title: '',
        desc: '',
        icon: ''
      }
    ]
  },
  isSlider: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 160px 140px 160px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    text-align: center;
    margin-bottom: 40px;
  }

  .card-groups {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 24px;

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
  .container {
    padding: 100px 16px 0 16px;

    .header {
      margin-bottom: 62px;

      .title-page :slotted(br) {
        display: none;
      }
    }

    .card-groups {
      display: none;
    }

    .no-slider {
      display: flex;
      gap: 16px;
      margin-bottom: 116px;
    }

    .slider {
      width: 100%;

      .card-slider {
        display: block;
      }
    }
  }
}
</style>
