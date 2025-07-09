<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-100 rounded-md transition-colors"
    >
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
      </svg>
      <span>{{ currentLanguageFlag }}</span>
    </button>

    <!-- Dropdown -->
    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border z-50"
    >
      <div class="py-1">
        <button
          v-for="language in languages"
          :key="language.code"
          @click="selectLanguage(language.code)"
          class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          :class="{ 'bg-orange-50 text-orange-600': translationStore.currentLanguage === language.code }"
        >
          <span class="mr-2">{{ language.flag }}</span>
          {{ language.name }}
        </button>
      </div>
    </div>
  </div>

  <!-- Backdrop -->
  <div
    v-if="isDropdownOpen"
    @click="closeDropdown"
    class="fixed inset-0 z-40"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTranslationStore, type Language } from '@/stores/translations'

const translationStore = useTranslationStore()
const isDropdownOpen = ref(false)

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' }
]

const currentLanguageFlag = computed(() => {
  const current = languages.find(lang => lang.code === translationStore.currentLanguage)
  return current?.flag || '🇺🇸'
})

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function closeDropdown() {
  isDropdownOpen.value = false
}

function selectLanguage(lang: Language) {
  translationStore.setLanguage(lang)
  closeDropdown()
}
</script>
