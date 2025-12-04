<script lang="ts" setup>

const currentSlide = ref(0)
const isTransitioning = ref(false)
const direction = ref<'left' | 'right'>('right')
let autoSlideInterval: ReturnType<typeof setInterval> | null = null
const isPaused = ref(false)

interface Slide {
  id: number
  title: string
  description: string
  descriptionHighlight?: { text: string; className: string }
  image: string
  maskImage: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Multi-currency accounts for Africans',
    description: 'Transact at home and abroad - create, send, hold and receive money in African and foreign currencies. Send money to and from Africa, seamlessly.',
    image: '/images/hero/phone-slide-1.png',
    maskImage: '/images/hero/phone-slide-1.png'
  },
  {
    id: 2,
    title: 'Choose from several payment methods',
    description: 'With Bomba, you get to choose how you send and receive money; send at your own rate with \'Swap\', send and receive instantly with \'Express\', or make free local transfers with \'Withdraw Money\'',
    image: '/images/hero/phone-slide-2.png',
    maskImage: '/images/hero/phone-slide-2.png'
  },
  {
    id: 3,
    title: 'Accept and create offers with Swap',
    description: 'You can send money internationally at your preferred rate on our Peer-to-peer Marketplace by choosing or accepting an offer. Created offers get accepted within an average time of 30 minutes',
    descriptionHighlight: { text: 'Peer-to-peer Marketplace', className: 'text-primary-green' },
    image: '/images/hero/phone-slide-3.png',
    maskImage: '/images/hero/phone-slide-3.png'
  },
  {
    id: 4,
    title: 'Make instant transfers with Express',
    description: 'When you send money using \'Express\' - it\'s sent at Bomba exchange rate and your transaction is completed instantly',
    image: '/images/hero/phone-slide-4.png',
    maskImage: '/images/hero/phone-slide-4.png'
  },
  {
    id: 5,
    title: 'Review and confirm your transaction',
    description: 'Review your transaction, ensure that the provided details are correct, then click the send button!',
    image: '/images/hero/phone-slide-5.png',
    maskImage: '/images/hero/phone-slide-5.png'
  },
  {
    id: 6,
    title: 'Completed! Fast, easy and secure',
    description: 'Money on its way! Send money today to your friends, family or make payment to a business. Get started →',
    image: '/images/hero/phone-slide-6.png',
    maskImage: '/images/hero/phone-slide-6.png'
  }
]

function renderDescription(slide: Slide) {
  if (slide.descriptionHighlight) {
    const { text, className } = slide.descriptionHighlight
    const parts = slide.description.split(text)
    return { parts, highlight: text, className }
  }
  return { parts: [slide.description], highlight: null, className: '' }
}

function startAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
  autoSlideInterval = setInterval(() => {
    if (!isPaused.value) {
      handleNext()
    }
  }, 5000)
}

function handleNext() {
  if (isTransitioning.value) return
  direction.value = 'right'
  goToSlide((currentSlide.value + 1) % slides.length)
}

function goToSlide(index: number) {
  if (isTransitioning.value || index === currentSlide.value) return
  
  // Determine direction based on target
  if (index > currentSlide.value) {
    direction.value = 'right'
  } else {
    direction.value = 'left'
  }
  
  isTransitioning.value = true
  currentSlide.value = index
  
  setTimeout(() => {
    isTransitioning.value = false
  }, 700)
  
  startAutoSlide()
}

function handleMouseEnter() {
  isPaused.value = true
}

function handleMouseLeave() {
  isPaused.value = false
}

function handleScrollDown() {
  const missionSection = document.getElementById('mission-section')
  if (missionSection) {
    missionSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})
</script>

<template>
  <div 
    class="relative w-full h-[calc(100vh-80px)] bg-[#F8F9FE] overflow-hidden"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Slides Container -->
    <div class="relative w-full h-full">
      <TransitionGroup 
        :name="direction === 'right' ? 'slide-left' : 'slide-right'"
        tag="div"
        class="relative w-full h-full"
      >
        <div
          v-for="(slide, index) in slides"
          v-show="index === currentSlide"
          :key="slide.id"
          class="absolute inset-0 w-full h-full"
        >
          <!-- Content Container -->
          <div class="relative w-full h-full flex flex-col">
            <!-- Main Content Area with Phone Overlay -->
            <div class="relative px-4 sm:px-8 lg:px-0">
              <!-- Desktop Layout -->
              <div class="hidden lg:block relative w-full">
               

                <!-- Center Phone Mockup - Absolutely positioned to overlap, positioned at exact center -->
                <div class="max-w-[284px] mx-auto pointer-events-none z-10 w-full lg:mt-10">
                  <img 
                    :src="slide.image" 
                    :alt="`Slide ${slide.id}`"
                    class="w-full h-auto"
                    style="filter: drop-shadow(-42px 41px 38px rgba(0, 0, 0, 0.1));"
                  >
                </div>

                <!-- hero descriptions -->
                 <div class="px-[68px] flex justify-between gap-2">
                    <!-- Left Title Section - positioned at exact Figma specs -->
                 <div class="max-w-[733px]">
                  <h1 class="text-[64px] leading-[77px] font-medium text-[#0D2C65] tracking-[-0.02em]">
                    {{ slide.title }}
                  </h1>
                </div>
                <!-- Right Description Section - positioned at exact Figma specs -->
                <div class="self-end" style="right: 70px; top: 676px; max-width: 547px;">
                  <p class="text-[18px] leading-[26px] text-primary-dark-blue">
                    <template v-if="renderDescription(slide).highlight">
                      {{ renderDescription(slide).parts[0] }}
                      <span :class="renderDescription(slide).className">{{ renderDescription(slide).highlight }}</span>
                      {{ renderDescription(slide).parts[1] }}
                    </template>
                    <template v-else>
                      {{ slide.description }}
                    </template>
                  </p>
                </div>
                 </div>
              </div>

              <!-- Mobile/Tablet Layout -->
              <div class="lg:hidden flex flex-col gap-6">
                <h1 class="text-[32px] sm:text-[48px] leading-tight font-medium text-[#0D2C65] tracking-[-0.02em]">
                  {{ slide.title }}
                </h1>
                
                <div class="w-[200px] sm:w-[250px] mx-auto">
                  <img 
                    :src="slide.image" 
                    :alt="`Slide ${slide.id}`"
                    class="w-full h-auto object-contain drop-shadow-[-20px_20px_30px_rgba(0,0,0,0.1)]"
                  >
                </div>

                <p class="text-base sm:text-[18px] leading-[24px] sm:leading-[26px] text-primary-dark-blue">
                  <template v-if="renderDescription(slide).highlight">
                    {{ renderDescription(slide).parts[0] }}
                    <span :class="renderDescription(slide).className">{{ renderDescription(slide).highlight }}</span>
                    {{ renderDescription(slide).parts[1] }}
                  </template>
                  <template v-else>
                    {{ slide.description }}
                  </template>
                </p>
              </div>
            </div>

            <!-- Progress Indicators Section -->
            <div class="px-4 sm:px-8 lg:px-0 mb-8 lg:mt-8">
              <!-- Gray base line -->
              <div class="relative w-full h-[4px] lg:h-[2px] bg-[#E5E7EB]">
                <!-- Container for blue segments with gaps -->
                <div class="absolute inset-0 flex gap-[8px]">
                  <button
                    v-for="(slideItem, slideIndex) in slides"
                    :key="`indicator-${slideItem.id}`"
                    :aria-label="`Go to slide ${slideIndex + 1}`"
                    class="flex-1 h-full transition-all duration-300 cursor-pointer relative group"
                    @click="goToSlide(slideIndex)"
                  >
                    <!-- Completed state (filled blue) - for slides before current -->
                    <span 
                      v-if="slideIndex < currentSlide"
                      class="absolute inset-0 bg-[#2668EC]"
                    />
                    
                    <!-- Active state (current slide) - base blue background -->
                    <span 
                      v-if="slideIndex === currentSlide"
                      class="absolute inset-0 bg-[#2668EC]"
                    />
                    
                    <!-- Active progress bar animation overlay - animates width -->
                    <span 
                      v-if="slideIndex === currentSlide"
                      class="absolute left-0 top-0 h-full bg-[#2668EC] animate-progress origin-left"
                      :style="{ animationDuration: isPaused ? 'paused' : '5s' }"
                    />
                    
                    <!-- Hover effect -->
                    <span 
                      class="absolute inset-0 bg-[#2668EC] opacity-0 group-hover:opacity-40 transition-opacity duration-200"
                    />
                  </button>
                </div>
              </div>
            </div>

            <!-- Bottom Section -->
            <div class="px-4 sm:px-8 lg:px-0 pb-8 lg:pb-[40px]">
              <!-- Desktop Layout -->
              <div class="hidden lg:flex items-end justify-between relative" style="padding-left: 71px; padding-right: 70px;">
                <!-- News & Release Updates -->
                <div class="max-w-[743px]">
                  <p class="text-[15px] leading-[24px] text-[#6E80A3] mb-0">
                    News & Release update
                  </p>
                  <div class="text-[17px] leading-[27px] text-[#6E80A3]">
                    <p class="mb-0">June 20, 2022 — Bomba now has a dollar wallet, activate your account</p>
                    <p class="mb-0">June 01, 2022 — Top 10 Summer Vacation Places In 2022</p>
                  </div>
                </div>

                <!-- Scroll Down Text with Green Arrow -->
                <button
                  type="button"
                  class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label="Scroll to mission section"
                  @click="handleScrollDown"
                >
                  <p class="text-[24px] leading-[31px] tracking-[-0.02em] text-primary-dark-blue font-normal mb-0">
                    Scroll Down
                  </p>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary-green">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <!-- Mobile/Tablet Layout -->
              <div class="lg:hidden flex flex-col gap-6">
                <div class="max-w-full">
                  <p class="text-sm sm:text-[15px] leading-[20px] sm:leading-[24px] text-[#6E80A3] mb-0">
                    News & Release update
                  </p>
                  <div class="text-sm sm:text-[17px] leading-[22px] sm:leading-[27px] text-[#6E80A3] space-y-1">
                    <p>June 20, 2022 — Bomba now has a dollar wallet, activate your account</p>
                    <p class="hidden sm:block">June 01, 2022 — Top 10 Summer Vacation Places In 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
/* Slide from right (next) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide from left (previous) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Progress bar animation */
@keyframes progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.animate-progress {
  animation: progress 5s linear forwards;
}

/* Hide arrows by default */
.group:hover button[aria-label*="slide"] {
  opacity: 1;
}
</style>

