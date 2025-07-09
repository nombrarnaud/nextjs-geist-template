<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-6">
            {{ translationStore.t.services.webMobileDev.title }}
          </h1>
          <p class="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            {{ translationStore.currentLanguage === 'en'
              ? 'Custom web applications and mobile apps built with modern technologies. We create digital solutions that drive business growth and enhance user engagement.'
              : 'Applications web personnalisées et applications mobiles construites avec des technologies modernes. Nous créons des solutions numériques qui stimulent la croissance des entreprises et améliorent l\'engagement des utilisateurs.'
            }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact">
              <button class="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold">
                {{ translationStore.currentLanguage === 'en' ? 'Start Your Project' : 'Démarrer votre projet' }}
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
            {{ translationStore.currentLanguage === 'en' ? 'Our Development Expertise' : 'Notre expertise en développement' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ translationStore.currentLanguage === 'en'
              ? 'We specialize in creating high-performance applications that deliver exceptional user experiences.'
              : 'Nous nous spécialisons dans la création d\'applications haute performance qui offrent des expériences utilisateur exceptionnelles.'
            }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Web Applications' : 'Applications Web' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en' 
                ? 'Modern, responsive web applications built with cutting-edge technologies'
                : 'Applications web modernes et responsives construites avec des technologies de pointe'
              }}
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Mobile Apps' : 'Applications mobiles' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en'
                ? 'Native and cross-platform mobile applications for iOS and Android'
                : 'Applications mobiles natives et multiplateformes pour iOS et Android'
              }}
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Performance Optimized' : 'Optimisé pour la performance' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en'
                ? 'Fast, scalable applications designed for optimal user experience'
                : 'Applications rapides et évolutives conçues pour une expérience utilisateur optimale'
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
