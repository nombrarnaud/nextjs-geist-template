<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          {{ translationStore.t.partners.title }}
        </h2>
        <p class="text-xl text-gray-600">
          {{ translationStore.t.partners.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
        >
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
              <span class="text-white font-bold text-lg">{{ partner.logo }}</span>
            </div>
            <p class="text-sm font-medium text-gray-700">{{ partner.name }}</p>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">
            {{ translationStore.currentLanguage === 'en' ? 'Become Our Partner' : 'Devenez Notre Partenaire' }}
          </h3>
          <p class="text-lg mb-6 opacity-90">
            {{ translationStore.currentLanguage === 'en' 
              ? 'Join our network of trusted partners and grow your business with us.'
              : 'Rejoignez notre réseau de partenaires de confiance et développez votre entreprise avec nous.'
            }}
          </p>
          <button class="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300">
            {{ translationStore.currentLanguage === 'en' ? 'Contact Us' : 'Contactez-nous' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTranslationStore } from '@/stores/translations'

const translationStore = useTranslationStore()

const partners = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateLab', logo: 'IL' },
  { name: 'Digital Solutions', logo: 'DS' },
  { name: 'CloudTech', logo: 'CT' },
  { name: 'SecureNet', logo: 'SN' },
  { name: 'DataFlow', logo: 'DF' }
]
</script>
