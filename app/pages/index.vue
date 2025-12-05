<script lang="ts" setup>
import { partners } from "@/components/Home/config";
</script>

<template>
  <div>
    <HomeHeroSection />

    <div id="mission-section" class="px-4 sm:px-6 lg:px-16">
      <div class="sm:text-center text-start max-w-4xl mx-auto mb-[46px]">
        <h6
          class="sm:text-[40px] text-[32px] font-medium text-secondary-deep-blue"
        >
          We are on a mission to reduce the cost of sending money to Africa at
          an average cost of 1%
        </h6>
      </div>

      <div class="lg:hidden">
        <div>
          <p class="text-secondary-greyish-blue text-2xl">Why Bomba?</p>
          <h5
            class="text-secondary-deep-blue font-medium text-[48px] sm:text-6xl"
          >
            Send & Receive money on your own terms
          </h5>
        </div>
        <div>
          <div class="mt-16 sm:mt-24 mb-16 sm:mb-24">
            <HomeExchangeWidget />
          </div>

          <div class="text-secondary-greyish-blue text-lg mt-[42px]">
            Bomba provides you the luxury of sending money at rates that suit
            you. You can easily send and swap money between GBP, USD, NGN and up
            to 20 other African countries using Bomba's
            <span class="text-primary-green">'Swap'</span> and
            <span class="text-primary-green">'Express'</span> services. Beat
            bank rates, save time and gain more.
          </div>
        </div>
      </div>

      <div class="hidden lg:flex flex-row justify-between gap-20 items-start mx-auto max-w-[1140px] mt-16 sm:mt-24 mb-16 sm:mb-24">
        <div class="flex-1">
          <HomeExchangeWidget />
        </div>
        <div class="flex-1 max-w-[582px]">
          <div>
            <p class="text-secondary-greyish-blue text-2xl">Why Bomba?</p>
            <h5
              class="text-secondary-deep-blue font-medium text-[48px] sm:text-6xl"
            >
              Send & Receive money on your own terms
            </h5>
          </div>
          <div class="text-secondary-greyish-blue text-lg mt-[42px]">
            Bomba provides you the luxury of sending money at rates that suit you.
            You can easily send and swap money between GBP, USD, NGN and up to 20
            other African countries using Bomba's
            <span class="text-primary-green">'Swap'</span> and
            <span class="text-primary-green">'Express'</span> services. Beat bank
            rates, save time and gain more.
          </div>
        </div>
      </div>

      <hr
        class="border-secondary-greyish-blue w-full mt-[107px] mb-[57px] max-w-[939px] mx-auto"
      >
      <div class="font-medium text-secondary-deep-blue">
        <h6 class="sm:hidden text-[48px]">
          The Bomba app is all you need to send money both at home and abroad
        </h6>
        <h6 class="sm:block hidden text-[40px] text-center">
          The Bomba app help our users send & receive money, swap currencies
          across borders and pay bills, safely, conveniently, cheaply and on
          time.
        </h6>
      </div>

      <p
        class="text-secondary-greyish-blue text-lg mt-[34px] sm:text-center text-start"
      >
        We are customer centric and focused on offering values to you that
        enable you achieve your finacial needs.
      </p>

      <HomeMasonry />

      <div class="flex flex-col justify-between gap-10 sm:flex-row mb-[299px]">
        <div class="max-w-[500px] w-full">
          <h6
            class="text-secondary-deep-blue text-[48px] sm:text-[64px] font-medium"
          >
            Trusted partners worldwide
          </h6>
          <p class="text-secondary-greyish-blue text-lg">
            We're partners with countless major organisations around the globe
          </p>
        </div>

        <div class="grid grid-cols-3 gap-4 max-w-[750px] w-full">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="group relative w-full max-w-[220px] h-[44px] cursor-pointer"
          >
            <img
              :src="partner.image"
              :alt="partner.name"
              class="absolute inset-0 w-full h-full object-contain transition-all duration-300 group-hover:opacity-0 group-hover:scale-110"
            >
            <img
              :src="partner.imageColor"
              :alt="`${partner.name} colored`"
              class="absolute inset-0 w-full h-full object-contain transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


