<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-6">
            {{ translationStore.t.services.cyberSecurity.title }}
          </h1>
          <p class="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            {{ translationStore.currentLanguage === 'en'
              ? 'Comprehensive security solutions to protect your business from digital threats. We provide advanced cybersecurity services to safeguard your data, systems, and reputation.'
              : 'Solutions de sécurité complètes pour protéger votre entreprise des menaces numériques. Nous fournissons des services de cybersécurité avancés pour protéger vos données, systèmes et réputation.'
            }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact">
              <button class="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold">
                {{ translationStore.currentLanguage === 'en' ? 'Secure Your Business' : 'Sécurisez votre entreprise' }}
              </button>
            </router-link>
            <button class="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg">
              {{ translationStore.currentLanguage === 'en' ? 'Security Assessment' : 'Évaluation de sécurité' }}
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
            {{ translationStore.currentLanguage === 'en' ? 'Our Security Solutions' : 'Nos solutions de sécurité' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ translationStore.currentLanguage === 'en'
              ? 'We provide multi-layered security solutions designed to protect your business from evolving cyber threats.'
              : 'Nous fournissons des solutions de sécurité multicouches conçues pour protéger votre entreprise des menaces cyber évolutives.'
            }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Threat Protection' : 'Protection contre les menaces' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en' 
                ? 'Advanced threat detection and prevention systems to safeguard your business'
                : 'Systèmes avancés de détection et prévention des menaces pour protéger votre entreprise'
              }}
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? 'Data Security' : 'Sécurité des données' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en'
                ? 'Comprehensive data encryption and secure storage solutions'
                : 'Solutions complètes de chiffrement des données et stockage sécurisé'
              }}
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ translationStore.currentLanguage === 'en' ? '24/7 Monitoring' : 'Surveillance 24/7' }}
            </h3>
            <p class="text-gray-600">
              {{ translationStore.currentLanguage === 'en'
                ? 'Round-the-clock security monitoring and incident response'
                : 'Surveillance de sécurité 24h/24 et réponse aux incidents'
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {{ translationStore.currentLanguage === 'en' ? 'Security by the Numbers' : 'Sécurité en chiffres' }}
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
            <p class="text-gray-600">{{ translationStore.currentLanguage === 'en' ? 'Threat Detection Rate' : 'Taux de détection des menaces' }}</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-indigo-600 mb-2"><5 min</div>
            <p class="text-gray-600">{{ translationStore.currentLanguage === 'en' ? 'Average Response Time' : 'Temps de réponse moyen' }}</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-indigo-600 mb-2">500+</div>
            <p class="text-gray-600">{{ translationStore.currentLanguage === 'en' ? 'Businesses Protected' : 'Entreprises protégées' }}</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-indigo-600 mb-2">0</div>
            <p class="text-gray-600">{{ translationStore.currentLanguage === 'en' ? 'Successful Breaches' : 'Violations réussies' }}</p>
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
