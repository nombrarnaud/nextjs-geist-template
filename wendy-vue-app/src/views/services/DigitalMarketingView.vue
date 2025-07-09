<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-6">
            {{ translationStore.t.services.digitalMarketing.title }}
          </h1>
          <p class="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            {{ translationStore.currentLanguage === 'en'
              ? 'Strategic online marketing campaigns that drive traffic, generate leads, and boost conversions. We help businesses grow their digital presence and reach their target audience effectively.'
              : 'Campagnes marketing en ligne stratégiques qui génèrent du trafic, créent des leads et augmentent les conversions. Nous aidons les entreprises à développer leur présence numérique et à atteindre efficacement leur audience cible.'
            }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact">
              <button class="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold">
                {{ translationStore.currentLanguage === 'en' ? 'Boost Your Marketing' : 'Boostez votre marketing' }}
              </button>
            </router-link>
            <button class="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg">
              {{ translationStore.currentLanguage === 'en' ? 'View Case Studies' : 'Voir les études de cas' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {{ translationStore.currentLanguage === 'en' ? 'Our Marketing Approach' : 'Notre approche marketing' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ translationStore.currentLanguage === 'en'
              ? 'We combine creativity with data-driven insights to create marketing campaigns that deliver measurable results.'
              : 'Nous combinons créativité et insights basés sur les données pour créer des campagnes marketing qui livrent des résultats mesurables.'
            }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Targeted Campaigns' : 'Campagnes ciblées' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en' 
                ? 'Precision-targeted marketing campaigns that reach your ideal customers'
                : 'Campagnes marketing ciblées avec précision qui atteignent vos clients idéaux'
              }}
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Growth Strategy' : 'Stratégie de croissance' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en'
                ? 'Data-driven strategies designed to accelerate your business growth'
                : 'Stratégies basées sur les données conçues pour accélérer la croissance de votre entreprise'
              }}
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Analytics & Insights' : 'Analyses et insights' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en'
                ? 'Comprehensive analytics and reporting to track campaign performance'
                : 'Analyses complètes et rapports pour suivre les performances des campagnes'
              }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useTranslationStore } from '@/stores/translations'

const translationStore = useTranslationStore()
</script>
