<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          {{ translationStore.t.services.title }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ translationStore.t.services.subtitle }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-lg p-6 text-center"
        >
          <div class="text-center pb-4">
            <div :class="`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`">
              <component :is="service.icon" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              {{ service.title }}
            </h3>
          </div>
          <div class="text-center">
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ service.description }}
            </p>
            <router-link :to="service.href">
              <button class="border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 px-4 py-2 rounded-md flex items-center mx-auto">
                {{ translationStore.currentLanguage === 'en' ? 'Learn More' : 'En savoir plus' }}
                <svg class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTranslationStore } from '@/stores/translations'

// Icon components (using simple SVG icons)
const HeadphonesIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1z" />
    </svg>
  `
}

const CodeIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  `
}

const PaletteIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
    </svg>
  `
}

const MegaphoneIcon = {
  template: `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
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

const translationStore = useTranslationStore()

const services = computed(() => [
  {
    icon: HeadphonesIcon,
    title: translationStore.t.services.technicalSupport.title,
    description: translationStore.t.services.technicalSupport.description,
    href: '/services/technical-support',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CodeIcon,
    title: translationStore.t.services.webMobileDev.title,
    description: translationStore.t.services.webMobileDev.description,
    href: '/services/web-mobile-development',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: PaletteIcon,
    title: translationStore.t.services.graphicDesign.title,
    description: translationStore.t.services.graphicDesign.description,
    href: '/services/graphic-design',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: MegaphoneIcon,
    title: translationStore.t.services.digitalMarketing.title,
    description: translationStore.t.services.digitalMarketing.description,
    href: '/services/digital-marketing',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: ShieldIcon,
    title: translationStore.t.services.cyberSecurity.title,
    description: translationStore.t.services.cyberSecurity.description,
    href: '/services/cyber-security',
    gradient: 'from-indigo-500 to-purple-500'
  }
])
</script>
