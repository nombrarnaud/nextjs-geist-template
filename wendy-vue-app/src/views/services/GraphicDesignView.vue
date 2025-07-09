<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-6">
            {{ translationStore.t.services.graphicDesign.title }}
          </h1>
          <p class="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            {{ translationStore.currentLanguage === 'en'
              ? 'Creative visual solutions that capture your brand essence and communicate your message effectively. From logos to complete brand identities, we bring your vision to life.'
              : 'Solutions visuelles créatives qui capturent l\'essence de votre marque et communiquent votre message efficacement. Des logos aux identités de marque complètes, nous donnons vie à votre vision.'
            }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact">
              <button class="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold">
                {{ translationStore.currentLanguage === 'en' ? 'Start Your Design' : 'Commencer votre design' }}
              </button>
            </router-link>
            <button class="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg">
              {{ translationStore.currentLanguage === 'en' ? 'View Portfolio' : 'Voir le portfolio' }}
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
            {{ translationStore.currentLanguage === 'en' ? 'Our Design Services' : 'Nos services de design' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ translationStore.currentLanguage === 'en'
              ? 'We create compelling visual designs that help your brand stand out and connect with your audience.'
              : 'Nous créons des designs visuels convaincants qui aident votre marque à se démarquer et à se connecter avec votre audience.'
            }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Brand Identity' : 'Identité de marque' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en' 
                ? 'Complete brand identity design including logos, color schemes, and style guides'
                : 'Conception complète d\'identité de marque incluant logos, palettes de couleurs et guides de style'
              }}
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Marketing Materials' : 'Matériaux marketing' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en'
                ? 'Eye-catching brochures, flyers, banners, and digital marketing assets'
                : 'Brochures, dépliants, bannières et supports marketing numériques accrocheurs'
              }}
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'UI/UX Design' : 'Design UI/UX' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en'
                ? 'User-centered interface design for web and mobile applications'
                : 'Conception d\'interface centrée sur l\'utilisateur pour les applications web et mobiles'
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
