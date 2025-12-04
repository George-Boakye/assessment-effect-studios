<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav class="w-full sm:border-b border-none sm:border-solid border-secondary-gray">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <div class="flex justify-end lg:justify-center items-center h-20">
     

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-10">
          <NuxtLink to="#personal" class="text-secondary-greyish-blue hover:text-secondary-deep-blue transition-colors text-base flex items-center gap-2">
            <span>Features</span> 
            <img src="/images/arrow-down.svg" alt="arrow-down" class="w-4 h-4">
          </NuxtLink>
          <NuxtLink to="/press" class="text-secondary-greyish-blue hover:text-secondary-deep-blue transition-colors text-base">
            Press
          </NuxtLink>
          <NuxtLink to="#company" class="text-secondary-greyish-blue hover:text-secondary-deep-blue transition-colors text-base flex items-center gap-2">
            <span>Company</span> 
            <img src="/images/arrow-down.svg" alt="arrow-down" class="w-4 h-4">
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="lg:hidden p-2 rounded-md text-secondary-deep-blue hover:bg-secondary-gray/10 transition-colors"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <svg 
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
          </svg>
          <svg 
            v-else
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden border-t border-secondary-gray/10 bg-white"
      >
        <div class="px-4 pt-4 pb-6 space-y-3">
          <NuxtLink 
            to="#features" 
            class="block px-4 py-3 text-base text-secondary-greyish-blue hover:text-secondary-deep-blue hover:bg-secondary-gray/5 rounded-lg transition-colors"
            @click="closeMobileMenu"
          >
         Features
          </NuxtLink>
          <NuxtLink 
            to="/press" 
            class="block px-4 py-3 text-base text-secondary-greyish-blue hover:text-secondary-deep-blue hover:bg-secondary-gray/5 rounded-lg transition-colors"
            @click="closeMobileMenu"
          >
            Press
          </NuxtLink>
          <NuxtLink 
            to="#company" 
            class="block px-4 py-3 text-base text-secondary-greyish-blue hover:text-secondary-deep-blue hover:bg-secondary-gray/5 rounded-lg transition-colors"
            @click="closeMobileMenu"
          >
            Company
          </NuxtLink>
          
          
        </div>
      </div>
    </Transition>
  </nav>
</template>
