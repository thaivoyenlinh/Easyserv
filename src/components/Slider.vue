<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide.title">
      <div class="card-icon">
        <component :is="slide.icon"></component>
      </div>
      <div class="card-title medium-blue-text mb-2">{{ slide.title }}</div>
      <div class="card-desc regular-gray-text">{{ slide.desc }}</div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts">
import { type PropType } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

type SlideItem = {
  title: string,
  desc: string,
  icon: any,
}

export default {
  props: {
    slides: {
      type: Array as PropType<SlideItem[]>,
      required: true
    }
  },
  name: 'Slider',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
}
</script>

<style lang="scss" scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(white);
  color: var(black);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--white-light);
  backdrop-filter: blur(13.5139px);
  border-radius: 8px;
  justify-content: flex-start;

  .card-icon {
    margin-bottom: 32px;
  }

  .card-desc {
    text-align: left;
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__pagination {
  margin: 22px 0 34px;
}
</style>