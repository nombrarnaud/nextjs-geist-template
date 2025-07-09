<template>
  <main class="min-h-screen">
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ translationStore.t.contact.title }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ translationStore.t.contact.subtitle }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="border-0 shadow-xl bg-white rounded-lg p-8">
            <div class="mb-6">
              <h2 class="text-2xl font-semibold mb-2">
                {{ translationStore.currentLanguage === 'en' ? 'Send us a message' : 'Envoyez-nous un message' }}
              </h2>
              <p class="text-gray-600">
                {{ translationStore.currentLanguage === 'en' 
                  ? 'Fill out the form below and we\'ll get back to you as soon as possible.'
                  : 'Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.'
                }}
              </p>
            </div>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ translationStore.t.contact.name }}
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ translationStore.t.contact.email }}
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ translationStore.t.contact.subject }}
                </label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ translationStore.t.contact.message }}
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="6"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
              >
                {{ translationStore.t.contact.send }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="border-0 shadow-xl bg-white rounded-lg p-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ translationStore.t.contact.email }}</h3>
                  <p class="text-gray-600">contact@wendyinc.com</p>
                  <p class="text-gray-600">support@wendyinc.com</p>
                </div>
              </div>
            </div>

            <div class="border-0 shadow-xl bg-white rounded-lg p-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ translationStore.t.contact.phone }}</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                  <p class="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div class="border-0 shadow-xl bg-white rounded-lg p-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ translationStore.t.contact.address }}</h3>
                  <p class="text-gray-600 whitespace-pre-line">
                    {{ translationStore.currentLanguage === 'en' 
                      ? '123 Business Avenue\nTech City, TC 12345\nUnited States'
                      : '123 Avenue des Affaires\nVille Tech, TC 12345\nÉtats-Unis'
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div class="border-0 shadow-xl bg-white rounded-lg p-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ translationStore.t.contact.hours }}</h3>
                  <p class="text-gray-600 whitespace-pre-line">
                    {{ translationStore.currentLanguage === 'en' 
                      ? 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
                      : 'Lundi - Vendredi: 9h00 - 18h00\nSamedi: 10h00 - 16h00\nDimanche: Fermé'
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTranslationStore } from '@/stores/translations'

const translationStore = useTranslationStore()

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function handleSubmit() {
  console.log('Form submitted:', formData.value)
  alert(translationStore.currentLanguage === 'en' ? 'Message sent successfully!' : 'Message envoyé avec succès!')
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>
