<script lang="ts" setup>
const features = [
  {
    category: 'Swap',
    title: 'Peer to peer marketplace',
    description: 'Do you worry about unfavorable exchange rates when sending money? Create or accept offers at your preferred rate on Bomba\'s Peer to peer marketplace.',
    linkText: 'Swap now',
    bgColor: 'bg-[#F0F4FF]', // Light Blue
    imageHeight: 'h-77', // Short
  },
  {
    category: 'Express',
    title: 'Take the express lane',
    description: 'Transact with light speed using Bomba Express. You can send funds at Bomba\'s exchange rates to family and friends from the UK & US to 20 African countries.',
    linkText: 'Send now',
    bgColor: 'bg-[#ECFDF3]', // Light Green
    imageHeight: 'h-116', // Long
  },
  {
    category: 'Refer & Earn',
    title: 'Make money while you refer',
    description: 'Bomba allows you to earn passively through its platform. Refer your friends and family to use Bomba and earn up to £40.',
    linkText: 'Share now',
    bgColor: 'bg-[#F9FAFB]', // Light Gray
    imageHeight: 'h-116', // Long
  },
  {
    category: 'Bomba Connect',
    title: 'Deals from top brands',
    description: 'With Bomba Connect, you can pay for and access goods and services from some of the best and trusted brands - at the best rates and with minimal wait time - all within the Bomba App.',
    linkText: 'Explore more',
    bgColor: 'bg-[#FFF4F0]', // Light Orange
    imageHeight: 'h-102', // Short
  }
] as const
</script>

<template>
    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pb-20 relative">
      <!-- Column 1: Item 1 (Short) & Item 3 (Long) -->
      <div class="flex flex-col gap-6">
        <!-- Item 1 -->
        <div :class="[features[0].bgColor, 'rounded-[16px] p-8 flex flex-col h-full']">
          <span class="text-secondary-greyish-blue text-lg mb-2">{{ features[0].category }}</span>
          <h3 class="text-secondary-deep-blue text-2xl font-bold mb-4">{{ features[0].title }}</h3>
          <p class="text-secondary-greyish-blue text-base mb-6">{{ features[0].description }}</p>
          <a href="#" class="text-secondary-bright-blue font-medium flex items-center gap-2 mb-8">
            {{ features[0].linkText }} <span>→</span>
          </a>
          <div class="mt-auto flex justify-center">
            <!-- Placeholder Image -->
            <div :class="['w-full relative', features[0].imageHeight]">
              <img src="/images/swap.svg" alt="Masonry 2" class="w-full h-full object-contain">
            </div>
          </div>
        </div>

        <!-- Item 3 -->
        <div :class="[features[2].bgColor, 'rounded-[16px] p-8 flex flex-col h-full']">
          <span class="text-secondary-greyish-blue text-lg mb-2">{{ features[2].category }}</span>
          <h3 class="text-secondary-deep-blue text-2xl font-bold mb-4">{{ features[2].title }}</h3>
          <p class="text-secondary-greyish-blue text-base mb-6">{{ features[2].description }}</p>
          <a href="#" class="text-secondary-bright-blue font-medium flex items-center gap-2 mb-8">
            {{ features[2].linkText }} <span>→</span>
          </a>
          <div class="mt-auto flex justify-center">
             <!-- Placeholder Image -->
            <div :class="['w-full ', features[2].imageHeight]">
              <img src="/images/Referral.svg" alt="Masonry 2" class="w-full h-full object-contain">
            </div>
          </div>
        </div>
      </div>

      <!-- Column 2: Item 2 (Long) & Item 4 (Short) -->
      <div class="flex flex-col gap-6">
        <!-- Item 2 -->
        <div :class="[features[1].bgColor, 'rounded-[16px] p-8 flex flex-col h-full']">
          <span class="text-secondary-greyish-blue text-lg mb-2">{{ features[1].category }}</span>
          <h3 class="text-secondary-deep-blue text-2xl font-bold mb-4">{{ features[1].title }}</h3>
          <p class="text-secondary-greyish-blue text-base mb-6">{{ features[1].description }}</p>
          <a href="#" class="text-secondary-bright-blue font-medium flex items-center gap-2 mb-8">
            {{ features[1].linkText }} <span>→</span>
          </a>
          <div class="mt-auto flex justify-center">
             <!-- Placeholder Image -->
            <div :class="['w-full', features[1].imageHeight]">
              <img src="/images/express.svg" alt="Masonry 1" class="w-full h-full object-contain">
            </div>
          </div>
        </div>

        <!-- Item 4 -->
        <div :class="[features[3].bgColor, 'rounded-[16px] p-8 flex flex-col h-full relative']">
          <span class="text-secondary-greyish-blue text-lg mb-2">{{ features[3].category }}</span>
          <h3 class="text-secondary-deep-blue text-2xl font-bold mb-4">{{ features[3].title }}</h3>
          <p class="text-secondary-greyish-blue text-base mb-6">{{ features[3].description }}</p>
          <a href="#" class="text-secondary-bright-blue font-medium flex items-center gap-2 mb-8">
            {{ features[3].linkText }} <span>→</span>
          </a>
          <div class="mt-auto flex justify-center">
             <!-- Placeholder Image -->
            <div :class="['w-full  relative', features[3].imageHeight]">
              <img src="/images/connect.svg" alt="Masonry 1" class="w-full h-full object-contain">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>



