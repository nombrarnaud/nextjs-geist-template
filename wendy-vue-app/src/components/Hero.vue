<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-blue-600">
      <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
    </div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    <div class="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"></div>
    <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300/30 rounded-full blur-lg"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-white space-y-8">
          <div class="space-y-4">
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
              {{ translationStore.t.hero.title }}
            </h1>
            <h2 class="text-xl lg:text-2xl font-medium text-orange-100">
              {{ translationStore.t.hero.subtitle }}
            </h2>
            <p class="text-lg text-white/90 max-w-lg">
              {{ translationStore.t.hero.description }}
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
              {{ translationStore.t.hero.getStarted }}
              <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button class="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
              <svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h10a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z" />
              </svg>
              {{ translationStore.t.hero.learnMore }}
            </button>
          </div>
        </div>
        
        <!-- Illustration -->
        <div class="relative">
          <div class="relative z-10">
            <!-- Main Device -->
            <div class="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div class="text-center space-y-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl mx-auto flex items-center justify-center">
                    <div class="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <div class="space-y-2">
                    <div class="h-3 bg-gray-300 rounded w-24 mx-auto"></div>
                    <div class="h-2 bg-gray-200 rounded w-16 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Cards -->
            <div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-12">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div class="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
            </div>
            
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 transform rotate-12">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <div class="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
            </div>
          </div>
          
          <!-- Background Elements -->
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-8 right-8 w-20 h-20 bg-white/20 rounded-full"></div>
            <div class="absolute bottom-12 left-12 w-16 h-16 bg-orange-300/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTranslationStore } from '@/stores/translations'

const translationStore = useTranslationStore()
</script>
