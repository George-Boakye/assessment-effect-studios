<template>
  <footer class="bg-[url('/images/footer-background.png')] lg:pl-[138px]">
    <div class="sm:px-6 px-4 py-16 lg:py-24">
      <div class="mb-16 lg:mb-20">
        <div class="grid grid-cols-1 items-start">
          <div>
            <h2
              class="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-primary-dark-blue mb-5"
            >
              Sign up for free<br >
              Join thousands of users
            </h2>
          </div>
        </div>
      </div>

      <div
        class="border-t border-secondary-greyish-blue mb-16 hidden sm:block w-full h-full relative left-[-74px]"
      />

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 justify-between mb-16 w-full"
      >
        <div class="flex gap-[90px] w-full">
          <div>
            <h4 class="text-secondary-deep-blue text-base font-medium mb-6">
              Company
            </h4>
            <ul class="space-y-4 text-secondary-greyish-blue text-2xl">
              <li>
                <NuxtLink to="#about"> About Us </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#features"> Features </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#blog"> Blog </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#careers"> Careers </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#legal"> Legal </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 4: Support -->
          <div>
            <h4 class="text-secondary-deep-blue text-base font-medium mb-6">
              Support
            </h4>
            <ul class="space-y-4 text-secondary-greyish-blue text-2xl">
              <li>
                <NuxtLink to="mailto:hello@bomba.co"> hello@bomba.co </NuxtLink>
              </li>
              <li>
                <NuxtLink to="https://wa.me/233540000000"> WhatsApp </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#security"> Help Center </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- Column 2: Company -->

        <div class="max-w-100 w-full">
          <p class="text-secondary-deep-blue text-lg mb-4">
            The neo bank for Africans globally
          </p>
          <p class="text-secondary-greyish-blue text-lg leading-relaxed">
            Bomba Ltd is a UK-incorporated Company with Registration Number (RC.
            12551277)
          </p>
        </div>
      </div>

      <!-- Mobile Layout (Hidden on Desktop) -->
      <div class="lg:hidden space-y-12">
        <!-- Newsletter Section -->
        <div>
          <div class="text-secondary-deep-blue text-base font-semibold mb-4">
            Stay updated by subscribing to our newsletters
          </div>
          <div class="mb-2">
            <input
              type="email"
              placeholder="Enter your email address"
              class="w-full px-5 py-4 rounded-lg rounded-tl-none rounded-bl-none bg-primary-dark-blue text-white placeholder-secondary-greyish-blue/60 outline-none"
            >
          </div>
          <button  class="text-secondary-bright-blue text-sm font-medium border-b py-3">
            Call to action >
          </button>
        </div>

        <div class="flex  justify-between gap-4">

          <div class="flex flex-col gap-4 text-secondary-greyish-blue text-base">
            <NuxtLink to="#" class="hover:text-secondary-deep-blue">Instagram</NuxtLink>
            <NuxtLink to="#" class="hover:text-secondary-deep-blue">Facebook</NuxtLink>
            <NuxtLink to="#" class="hover:text-secondary-deep-blue">Linkedin</NuxtLink>
            <NuxtLink to="#" class="hover:text-secondary-deep-blue">Twitter</NuxtLink>
          </div>
  
          <!-- App Download Buttons -->
          <div class="flex flex-col gap-4">
            <div
              class="rounded-xl border border-secondary-greyish-blue py-3 px-5 flex items-center gap-2 max-w-[185px] w-full"
            >
              <img src="/images/playstore.png" alt="Google Play" class="w-[25px] h-[25px]">
              <div>
                <p class="text-primary-dark-blue text-sm">Get it on</p>
                <div class="text-primary-dark-blue text-lg font-bold">
                  Google Play
                </div>
              </div>
            </div>
            <div
              class="rounded-xl border border-secondary-greyish-blue py-3 px-5 flex items-center gap-2 max-w-[185px] w-full"
            >
              <img src="/images/apple-logo.png" alt="App Store" class="w-[25px] h-[25px]">
              <div>
                <p class="text-primary-dark-blue text-sm">Download on the</p>
                <div class="text-primary-dark-blue text-lg font-bold">
                  App Store
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media Links -->

        <!-- Copyright and Legal Links -->
        <div>
          <div class="text-secondary-deep-blue text-sm mb-2">
            © 2022 Bomba Limited. All rights reserved.
          </div>
          <div class="text-secondary-greyish-blue text-sm">
            Terms of Service | Privacy Policy | T&C UK | Cookie Policy
          </div>
        </div>
      </div>

      <!-- Desktop Layout (Hidden on Mobile) -->
      <div class="hidden lg:block pt-8">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-between mb-16 w-full"
        >
          <!-- Left: App Buttons & Copyright -->
          <div>
            <div class="flex sm:flex-row flex-col items-start sm:items-center gap-4 sm:gap-6">
              <div
                class="rounded-xl border border-secondary-greyish-blue py-3 px-5 flex items-center gap-2 max-w-[185px] w-full"
              >
                <img src="/images/playstore.png" alt="Google Play" class="w-[25px] h-[25px]">
                <div>
                  <p class="text-primary-dark-blue text-sm">Get it on</p>
                  <div class="text-primary-dark-blue text-lg font-bold">
                    Google Play
                  </div>
                </div>
              </div>
              <div
                class="rounded-xl border border-secondary-greyish-blue py-3 px-5 flex items-center gap-2 max-w-[185px] w-full"
              >
                <img src="/images/apple-logo.png" alt="App Store" class="w-[25px] h-[25px]">
                <div>
                  <p class="text-primary-dark-blue text-sm">Download on the</p>
                  <div class="text-primary-dark-blue text-lg font-bold">
                    App Store
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="text-secondary-deep-blue text-sm">
                © 2022 Bomba Limited. All rights reserved.
              </div>
              <div class="text-secondary-greyish-blue text-sm">
                Terms of Service | Privacy Policy | T&C UK | Cookie Policy
              </div>
            </div>
          </div>

          <!-- Right: Newsletter & Social Media -->
          <div class="flex flex-col items-start gap-6">
            <div class="w-full max-w-[400px]">
              <div class="text-secondary-deep-blue text-base font-semibold mb-4">
                Stay update on our newsletter
              </div>
              <div class="mb-2 flex items-center justify-between w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  class="px-5 py-4 rounded-lg bg-primary-dark-blue text-white w-full  placeholder-secondary-greyish-blue/60 outline-none max-w-[260px] rounded-tr-none rounded-br-none"
                >
                <button  class="text-secondary-bright-blue text-sm font-medium border-b py-3">
                  Subscribe >
                </button>
              </div>
            </div>

            <div class="text-secondary-greyish-blue text-base flex items-center gap-8">
              <NuxtLink to="#" class="hover:text-secondary-deep-blue">Instagram</NuxtLink>
              <NuxtLink to="#" class="hover:text-secondary-deep-blue">Facebook</NuxtLink>
              <NuxtLink to="#" class="hover:text-secondary-deep-blue">Linkedin</NuxtLink>
              <NuxtLink to="#" class="hover:text-secondary-deep-blue">Twitter</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
