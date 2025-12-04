
<script lang="ts" setup>
import { currencies, exchangeMethods, type Currency, type ExchangeMethod } from './config'


const sendAmount = ref<string>('1,000.00')
const sendCurrency = ref<Currency>(currencies.find(c => c.code === 'GBP')!) // GBP
const receiveCurrency = ref<Currency>(currencies.find(c => c.code === 'GHS')!) // GHS
const exchangeMethod = ref<ExchangeMethod>('Express')
const feeAmount = ref<string>('2.99')


const showSendCurrencyDropdown = ref(false)
const showReceiveCurrencyDropdown = ref(false)
const showMethodDropdown = ref(false)


const receiveAmount = computed(() => {
  const cleanAmount = sendAmount.value.replace(/,/g, '')
  const numericAmount = parseFloat(cleanAmount) || 0
  const rate = receiveCurrency.value.rate / sendCurrency.value.rate
  const result = numericAmount * rate
  return formatNumber(result)
})

const formattedSendAmount = computed(() => {
  return sendAmount.value
})

const totalToPay = computed(() => {
  const cleanAmount = sendAmount.value.replace(/,/g, '')
  const numericAmount = parseFloat(cleanAmount) || 0
  const fee = parseFloat(feeAmount.value) || 0
  const total = numericAmount + fee
  return `${formatNumber(total)} ${sendCurrency.value.code}`
})

const exchangeRateDisplay = computed(() => {
  const rate = receiveCurrency.value.rate / sendCurrency.value.rate
  return `${sendCurrency.value.symbol}1 / ${receiveCurrency.value.code}${rate.toFixed(2)}`
})


function formatNumber(num: number): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

function handleSendAmountChange(event: Event) {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/[^\d.]/g, '')
  
  const parts = value.split('.')
  if (parts.length > 2) {
    value = parts[0] + '.' + parts.slice(1).join('')
  }
  
  const numericValue = parseFloat(value) || 0
  sendAmount.value = formatNumber(numericValue)
}

function toggleSendCurrencyDropdown() {
  showSendCurrencyDropdown.value = !showSendCurrencyDropdown.value
  showReceiveCurrencyDropdown.value = false
  showMethodDropdown.value = false
}

function toggleReceiveCurrencyDropdown() {
  showReceiveCurrencyDropdown.value = !showReceiveCurrencyDropdown.value
  showSendCurrencyDropdown.value = false
  showMethodDropdown.value = false
}

function toggleMethodDropdown() {
  showMethodDropdown.value = !showMethodDropdown.value
  showSendCurrencyDropdown.value = false
  showReceiveCurrencyDropdown.value = false
}

function handleSelectSendCurrency(currency: Currency) {
  sendCurrency.value = currency
  showSendCurrencyDropdown.value = false
}

function handleSelectReceiveCurrency(currency: Currency) {
  receiveCurrency.value = currency
  showReceiveCurrencyDropdown.value = false
}

function handleSelectMethod(method: ExchangeMethod) {
  exchangeMethod.value = method
  showMethodDropdown.value = false
}

function handleSwapCurrencies() {
  const temp = sendCurrency.value
  sendCurrency.value = receiveCurrency.value
  receiveCurrency.value = temp
}

if (typeof window !== 'undefined') {
  watch([showSendCurrencyDropdown, showReceiveCurrencyDropdown, showMethodDropdown], () => {
    if (showSendCurrencyDropdown.value || showReceiveCurrencyDropdown.value || showMethodDropdown.value) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (!target.closest('button')) {
          showSendCurrencyDropdown.value = false
          showReceiveCurrencyDropdown.value = false
          showMethodDropdown.value = false
        }
      }
      
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside, { once: true })
      }, 0)
    }
  })
}
</script>
<template>
  <div class="w-full max-w-[659px] mx-auto">
    <!-- Main Widget Container -->
    <div class="relative bg-white rounded-lg sm:rounded-2xl">
      <!-- Divider Line -->
      <div class="absolute left-[30px] sm:left-[31px] top-[68px] sm:top-[68px] w-px h-[75px] sm:h-[75px] bg-gray-300" />

      <!-- You Send Section -->
      <div class="relative pt-0">
        <!-- Label positioned on the border -->
        <label class="absolute top-0 left-[21px] sm:left-[35px] -translate-y-1/2 text-[10px] leading-[18px] text-gray-500 bg-white px-[6px] z-10">
          You send
        </label>
        
        <div class="relative flex flex-row items-stretch border border-gray-300 rounded-lg sm:rounded-2xl overflow-hidden">
          <!-- Input Section -->
          <div class="flex-1 bg-white p-4 sm:p-6">
            <input
              v-model="sendAmount"
              type="text"
              class="w-full text-xl sm:text-[24px] font-medium text-[#0D2C65] outline-none px-0 sm:px-[14px]"
              @input="handleSendAmountChange"
            >
          </div>

          <!-- Currency Selector -->
          <div class="relative bg-primary-dark-blue w-[98px] sm:w-[138px] flex items-center justify-center">
            <button
              class="flex items-center justify-center gap-1 sm:gap-[10px] text-white py-4 px-2 sm:px-4 w-full"
              @click="toggleSendCurrencyDropdown"
            >
              <span class="text-base sm:text-base">{{ sendCurrency.flag }}</span>
              <span class="text-xs sm:text-sm font-normal">{{ sendCurrency.code }}</span>
              <img src="/images/arrow-down.svg" alt="dropdown" class="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" :class="{ 'rotate-180': showSendCurrencyDropdown }">
            </button>
            
            <!-- Dropdown -->
            <div v-if="showSendCurrencyDropdown" class="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg z-10 rounded-b-lg">
              <button
                v-for="currency in currencies"
                :key="currency.code"
                class="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-2 text-[#0D2C65]"
                @click="handleSelectSendCurrency(currency)"
              >
                <span class="text-lg">{{ currency.flag }}</span>
                <span class="text-sm">{{ currency.code }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Swap Button & Fee Section -->
      <div class="relative flex items-center justify-between px-4 sm:px-0 py-4 sm:py-5">
        <!-- Swap Circle Button -->
        <button
          class="absolute left-4 sm:left-[23px] top-1/2 -translate-y-1/2 w-[17px] h-[17px] sm:w-[17px] sm:h-[17px] rounded-full bg-black border border-gray-300 flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
          @click="handleSwapCurrencies"
        >
          <div class="w-[9px] h-px sm:w-[9px] sm:h-px bg-[#23CE6B]" />
        </button>

        <!-- Mobile Only: Fee Display & Method Selector -->
        <div class="flex sm:hidden items-center gap-2 ml-auto">
          <span class="text-[10px] text-gray-600">{{ feeAmount }} {{ sendCurrency.code }} Fee</span>
          
          <button
            class="flex items-center gap-1 px-[15px] py-1 bg-gray-200 rounded-sm text-[10px] relative"
            @click="toggleMethodDropdown"
          >
            <span>{{ exchangeMethod }}</span>
            <img src="/images/arrow-down.svg" alt="dropdown" class="w-[18px] h-[18px]" :class="{ 'rotate-180': showMethodDropdown }">
          </button>
          
          <div v-if="showMethodDropdown" class="absolute right-4 top-full mt-1 bg-white border border-gray-300 shadow-lg z-20 rounded-lg">
            <button
              v-for="method in exchangeMethods"
              :key="method"
              class="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm whitespace-nowrap"
              @click="handleSelectMethod(method)"
            >
              {{ method }}
            </button>
          </div>
        </div>
      </div>

      <!-- Recipient Gets Section -->
      <div class="relative">
        <!-- Label positioned on the border -->
        <label class="absolute top-0 left-[21px] sm:left-[35px] -translate-y-1/2 text-[10px] leading-[18px] text-gray-500 bg-white px-[6px] z-10">
          Recipient Gets
        </label>
        
        <div class="relative flex flex-row items-stretch border border-gray-300 rounded-lg sm:rounded-2xl overflow-hidden">
          <!-- Input Section -->
          <div class="flex-1 bg-white p-4 sm:p-6">
            <input
              v-model="receiveAmount"
              type="text"
              class="w-full text-xl sm:text-[24px] font-medium text-[#0D2C65] outline-none px-0 sm:px-[14px]"
              readonly
            >
          </div>

          <!-- Currency Selector -->
          <div class="relative bg-primary-dark-blue w-[98px] sm:w-[138px] flex items-center justify-center">
            <button
              class="flex items-center justify-center gap-1 sm:gap-[10px] text-white py-4 px-2 sm:px-4 w-full"
              @click="toggleReceiveCurrencyDropdown"
            >
              <span class="text-base sm:text-base">{{ receiveCurrency.flag }}</span>
              <span class="text-xs sm:text-sm font-normal">{{ receiveCurrency.code }}</span>
              <img src="/images/arrow-down.svg" alt="dropdown" class="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" :class="{ 'rotate-180': showReceiveCurrencyDropdown }">
            </button>
            
            <!-- Dropdown -->
            <div v-if="showReceiveCurrencyDropdown" class="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg z-10 rounded-b-lg">
              <button
                v-for="currency in currencies"
                :key="currency.code"
                class="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-2 text-[#0D2C65]"
                @click="handleSelectReceiveCurrency(currency)"
              >
                <span class="text-lg">{{ currency.flag }}</span>
                <span class="text-sm">{{ currency.code }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Transaction Details -->
      <div class="mt-8 sm:mt-12 space-y-4 sm:space-y-6 px-4 sm:px-0">
        <!-- Row 1 -->
        <div class="flex justify-between items-start">
          <div>
            <p class="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Amount we'll convert</p>
            <p class="text-sm sm:text-lg font-normal text-[#0D2C65]">{{ formattedSendAmount }}</p>
          </div>
          <div class="text-right">
            <div class="flex items-center gap-2 justify-end mb-1 sm:mb-2">
              <div class="w-4 h-4 sm:w-[15px] sm:h-[15px] rounded-full bg-[#23CE6B] flex items-center justify-center">
                <svg class="w-3 h-3 sm:w-[10px] sm:h-[10px]" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM7.5 13.5C4.185 13.5 1.5 10.815 1.5 7.5C1.5 4.185 4.185 1.5 7.5 1.5C10.815 1.5 13.5 4.185 13.5 7.5C13.5 10.815 10.815 13.5 7.5 13.5Z" fill="black"/>
                  <path d="M7.5 3.75V7.875L10.5 9.375" fill="black"/>
                </svg>
              </div>
              <p class="text-xs sm:text-sm text-gray-500">Guaranteed rate (1 hrs)</p>
            </div>
            <p class="text-sm sm:text-lg font-normal text-[#0D2C65]">{{ exchangeRateDisplay }}</p>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="flex justify-between items-start">
          <div>
            <p class="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Total to Pay</p>
            <p class="text-sm sm:text-lg font-normal text-[#0D2C65]">{{ totalToPay }}</p>
          </div>
          <div class="text-right">
            <p class="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Average duration</p>
            <p class="text-sm sm:text-lg font-normal text-[#0D2C65]">Instant</p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <button class="w-full mt-8 sm:mt-10 bg-primary-dark-blue text-white py-4 px-6 rounded-md text-base font-medium hover:opacity-90 transition-all">
        Get started for free
      </button>
    </div>
  </div>
</template>



