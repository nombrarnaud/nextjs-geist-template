<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-blue-600"></div>
            <span class="text-xl font-bold">Wendy Incorporated</span>
          </div>
          <p class="text-gray-400 mb-4">
            {{ translationStore.currentLanguage === 'en' 
              ? 'Professional IT solutions for modern businesses. We help companies thrive in the digital age with comprehensive technology services.'
              : 'Solutions IT professionnelles pour les entreprises modernes. Nous aidons les entreprises à prospérer à l\'ère numérique avec des services technologiques complets.'
            }}
          </p>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">
            {{ translationStore.t.nav.services }}
          </h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/services/technical-support" class="hover:text-white transition-colors">
                {{ translationStore.currentLanguage === 'en' ? 'Technical Support' : 'Support Technique' }}
              </router-link>
            </li>
            <li>
              <router-link to="/services/web-mobile-development" class="hover:text-white transition-colors">
                {{ translationStore.currentLanguage === 'en' ? 'Web Development' : 'Développement Web' }}
              </router-link>
            </li>
            <li>
              <router-link to="/services/graphic-design" class="hover:text-white transition-colors">
                {{ translationStore.currentLanguage === 'en' ? 'Graphic Design' : 'Design Graphique' }}
              </router-link>
            </li>
            <li>
              <router-link to="/services/digital-marketing" class="hover:text-white transition-colors">
                {{ translationStore.currentLanguage === 'en' ? 'Digital Marketing' : 'Marketing Digital' }}
              </router-link>
            </li>
            <li>
              <router-link to="/services/cyber-security" class="hover:text-white transition-colors">
                {{ translationStore.currentLanguage === 'en' ? 'Cyber Security' : 'Cybersécurité' }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">
            {{ translationStore.t.nav.contact }}
          </h3>
          <ul class="space-y-2 text-gray-400">
            <li>contact@wendyinc.com</li>
            <li>+1 (555) 123-4567</li>
            <li>
              {{ translationStore.currentLanguage === 'en' 
                ? '123 Business Ave, Tech City, TC 12345'
                : '123 Avenue des Affaires, Ville Tech, TC 12345'
              }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Wendy Incorporated. {{ translationStore.t.footer.rights }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useTranslationStore } from '@/stores/translations'

const translationStore = useTranslationStore()
</script>
