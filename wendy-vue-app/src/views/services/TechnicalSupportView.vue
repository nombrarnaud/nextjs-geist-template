<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold mb-6">
              {{ translationStore.t.services.technicalSupport.title }}
            </h1>
            <p class="text-xl mb-8 text-blue-100">
              {{ translationStore.currentLanguage === 'en'
                ? 'Professional technical assistance and troubleshooting for all your IT needs. Our expert team is available 24/7 to keep your systems running smoothly.'
                : 'Assistance technique professionnelle et dépannage pour tous vos besoins IT. Notre équipe d\'experts est disponible 24h/24 pour maintenir vos systèmes en bon état de fonctionnement.'
              }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/contact">
                <button class="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold flex items-center">
                  {{ translationStore.currentLanguage === 'en' ? 'Get Support Now' : 'Obtenir de l\'aide maintenant' }}
                  <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </router-link>
              <button class="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg">
                {{ translationStore.currentLanguage === 'en' ? 'Learn More' : 'En savoir plus' }}
              </button>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div class="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1z" />
                </svg>
              </div>
              <div class="text-center">
                <h3 class="text-2xl font-bold mb-2">
                  {{ translationStore.currentLanguage === 'en' ? 'Always Available' : 'Toujours disponible' }}
                </h3>
                <p class="text-blue-100">
                  {{ translationStore.currentLanguage === 'en' ? 'Expert help when you need it most' : 'Aide d\'expert quand vous en avez le plus besoin' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {{ translationStore.currentLanguage === 'en' ? 'Why Choose Our Support?' : 'Pourquoi choisir notre support ?' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ translationStore.currentLanguage === 'en'
              ? 'We provide comprehensive technical support with a focus on quick resolution and customer satisfaction.'
              : 'Nous fournissons un support technique complet avec un focus sur la résolution rapide et la satisfaction client.'
            }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg p-6"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <component :is="feature.icon" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services List -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              {{ translationStore.currentLanguage === 'en' ? 'Our Support Services' : 'Nos services de support' }}
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              {{ translationStore.currentLanguage === 'en'
                ? 'From basic troubleshooting to complex system configurations, we handle it all with expertise and care.'
                : 'Du dépannage de base aux configurations système complexes, nous gérons tout avec expertise et soin.'
              }}
            </p>
            <ul class="space-y-4">
              <li
                v-for="(service, index) in services"
                :key="index"
                class="flex items-center space-x-3"
              >
                <svg class="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ service }}</span>
              </li>
            </ul>
          </div>
          
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 class="text-2xl font-bold mb-4">
                {{ translationStore.currentLanguage === 'en' ? 'Need Immediate Help?' : 'Besoin d\'aide immédiate ?' }}
              </h3>
              <p class="mb-6 text-blue-100">
                {{ translationStore.currentLanguage === 'en'
                  ? 'Our technical support team is standing by to assist you with any IT challenges you may face.'
                  : 'Notre équipe de support technique est prête à vous aider avec tous les défis IT que vous pourriez rencontrer.'
                }}
              </p>
              <router-link to="/contact">
                <button class="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold">
                  {{ translationStore.currentLanguage === 'en' ? 'Contact Support' : 'Contacter le support' }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTranslationStore } from '@/stores/translations'

const translationStore = useTranslationStore()

// Icon components
const ClockIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
}

const UsersIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  `
}

const ShieldIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  `
}

const features = computed(() => [
  {
    icon: ClockIcon,
    title: translationStore.currentLanguage === 'en' ? '24/7 Support' : 'Support 24/7',
    description: translationStore.currentLanguage === 'en' 
      ? 'Round-the-clock technical assistance whenever you need it'
      : 'Assistance technique 24h/24 quand vous en avez besoin'
  },
  {
    icon: UsersIcon,
    title: translationStore.currentLanguage === 'en' ? 'Expert Team' : 'Équipe d\'experts',
    description: translationStore.currentLanguage === 'en'
      ? 'Certified professionals with years of experience'
      : 'Professionnels certifiés avec des années d\'expérience'
  },
  {
    icon: ShieldIcon,
    title: translationStore.currentLanguage === 'en' ? 'Secure Solutions' : 'Solutions sécurisées',
    description: translationStore.currentLanguage === 'en'
      ? 'All support sessions are encrypted and secure'
      : 'Toutes les sessions de support sont cryptées et sécurisées'
  }
])

const services = computed(() => [
  translationStore.currentLanguage === 'en' ? 'Hardware troubleshooting' : 'Dépannage matériel',
  translationStore.currentLanguage === 'en' ? 'Software installation and configuration' : 'Installation et configuration logicielle',
  translationStore.currentLanguage === 'en' ? 'Network connectivity issues' : 'Problèmes de connectivité réseau',
  translationStore.currentLanguage === 'en' ? 'System optimization' : 'Optimisation système',
  translationStore.currentLanguage === 'en' ? 'Data backup and recovery' : 'Sauvegarde et récupération de données',
  translationStore.currentLanguage === 'en' ? 'Security updates and patches' : 'Mises à jour et correctifs de sécurité'
])
</script>
