<script lang="ts" setup>
interface PressItem {
  id: number
  date: string
  category: string
  title: string
  image: string
  link: string
}

const pressItems: PressItem[] = [
  {
    id: 1,
    category: 'Connecting Africa',
    title: 'Combining AI, fintech to solve African problems - Ericsson',
    date: 'December 06, 2021',
    image: '/images/press/press-1.png',
    link: '#'
  },
  {
    id: 2,
    category: 'Tech Labari',
    title: 'Ghana to Host the 14th Africa Fintech Summit on October 8th',
    date: 'May 24, 2022',
    image: '/images/press/press-2.png',
    link: '#'
  },
  {
    id: 3,
    category: 'Techstars',
    title: 'Midterm Report: Techstars Toronto\'s Second 2021 Class',
    date: 'Dec 06, 2021',
    image: '/images/press/press-3.png',
    link: '#'
  },
  {
    id: 4,
    category: 'Medium',
    title: 'Wise granted approval to join Zengin, Japan\'s domestic payment system',
    date: 'December 06, 2021',
    image: '/images/press/press-4.png',
    link: '#'
  },
  {
    id: 5,
    category: 'Further Africa',
    title: 'African startups to participate at Techstars Toronto October 2021 cohort',
    date: 'October 23, 2021',
    image: '/images/press/press-5.png',
    link: '#'
  },
  {
    id: 6,
    category: 'TechCrunch',
    title: 'More African startups get into Techstars Toronto',
    date: 'October 18, 2021',
    image: '/images/press/press-5.png',
    link: '#'
  }
]
</script>

<template>
  <div class="w-full">
    <PressHeroSection />

    <section class="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="item in pressItems"
            :key="item.id"
            :href="item.link"
            class="group flex flex-col overflow-hidden rounded-lg hover:-translate-y-1 transition-transform duration-300"
          >
             <div class="flex flex-col gap-3 pt-4">
              <span class="inline-flex w-fit items-center rounded bg-primary-green px-3 py-1 text-xs font-medium text-white">
                {{ item.category }}
              </span>
              
              <h3 class="text-lg font-medium text-secondary-deep-blue leading-snug group-hover:text-primary-green transition-colors">
                {{ item.title }}
              </h3>
              
              <p class="text-sm text-secondary-greyish-blue">
                {{ item.date }}
              </p>
            </div>

            <div class="aspect-16/10 w-full overflow-hidden bg-secondary-gray/20">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              >
            </div>
            
         
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

