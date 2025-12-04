export const partners = [
    {
      name: 'VFD',
      image: '/images/vfd.svg',
      imageColor: '/images/vfd-color.svg'
    },
    {
      name: 'thunes',
      image: '/images/thunes.svg',
      imageColor: '/images/thunes-color.svg'
    },
    {
      name: 'true-layer',
      image: '/images/true-layer.svg',
      imageColor: '/images/true-layer-color.svg'
    },
    {
        name:'access',
        image:'/images/access.svg',
        imageColor: '/images/access-color.svg'
    },
    {
        name:'rail',
        image:'/images/rail.svg',
        imageColor: '/images/rail-color.svg'
    },
    {
        name:'truenarrative',
        image:'/images/truenarrative.svg',
        imageColor: '/images/truenarrative-color.svg'
    },
    {
        name:'paga',
        image:'/images/paga.svg',
        imageColor: '/images/paga-color.svg'
    },
    {
        name:'solid',
        image:'/images/solid.svg',
        imageColor: '/images/solid-color.svg'
    },
    {
        name:'identity-pass',
        image:'/images/identity-pass.svg',
        imageColor: '/images/identity-pass-color.svg'
    },
    {
        name:'stitch',
        image:'/images/stitch.svg',
        imageColor: '/images/stitch-color.svg'
    },
    {
        name:'evolve',
        image:'/images/evolve.svg',
        imageColor: '/images/evolve-color.svg'
    }
  ] as const

export interface Currency {
  code: string
  flag: string
  symbol: string
  rate: number
}

export const currencies: Currency[] = [
  {
    code: 'GBP',
    flag: '🇬🇧',
    symbol: '£',
    rate: 1
  },
  {
    code: 'GHS',
    flag: '🇬🇭',
    symbol: '₵',
    rate: 1.19
  },
  {
    code: 'NGN',
    flag: '🇳🇬',
    symbol: '₦',
    rate: 502.1507
  },
  {
    code: 'USD',
    flag: '🇺🇸',
    symbol: '$',
    rate: 1.27
  },
  {
    code: 'EUR',
    flag: '🇪🇺',
    symbol: '€',
    rate: 0.85
  }
]

export const exchangeMethods = ['Express', 'Swap'] as const
export type ExchangeMethod = typeof exchangeMethods[number]