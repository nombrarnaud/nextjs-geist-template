<template>
  <nav class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-blue-600"></div>
          <span class="text-xl font-bold text-gray-900">Wendy Inc.</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group"
          >
            {{ item.label }}
            <!-- Submenu for Services -->
            <div
              v-if="item.submenu"
              class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div class="py-2">
                <router-link
                  v-for="subItem in item.submenu"
                  :key="subItem.href"
                  :to="subItem.href"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {{ subItem.label }}
                </router-link>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Language Switcher & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          
          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden py-4 border-t">
        <div class="flex flex-col space-y-4">
          <router-link
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>
          <!-- Mobile submenu items -->
          <div v-for="item in navItems" :key="`mobile-${item.href}`">
            <div v-if="item.submenu" class="ml-4 mt-2 space-y-2">
              <router-link
                v-for="subItem in item.submenu"
                :key="subItem.href"
                :to="subItem.href"
                class="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                @click="closeMobileMenu"
              >
                {{ subItem.label }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTranslationStore } from '@/stores/translations'
import LanguageSwitcher from './LanguageSwitcher.vue'

const translationStore = useTranslationStore()
const isMobileMenuOpen = ref(false)

const navItems = computed(() => [
  { href: '/', label: translationStore.t.nav.home },
  { 
    href: '/services', 
    label: translationStore.t.nav.services,
    submenu: [
      { href: '/services/technical-support', label: translationStore.t.nav.technicalSupport },
      { href: '/services/web-mobile-development', label: translationStore.t.nav.webMobileDev },
      { href: '/services/graphic-design', label: translationStore.t.nav.graphicDesign },
      { href: '/services/digital-marketing', label: translationStore.t.nav.digitalMarketing },
      { href: '/services/cyber-security', label: translationStore.t.nav.cyberSecurity },
    ]
  },
  { href: '/contact', label: translationStore.t.nav.contact },
])

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>
