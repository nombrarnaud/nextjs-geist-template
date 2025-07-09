import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type Language = 'en' | 'fr'

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      technicalSupport: "Technical Support",
      webMobileDev: "Web & Mobile Development",
      graphicDesign: "Graphic Design",
      digitalMarketing: "Digital Marketing",
      cyberSecurity: "Cyber Security"
    },
    hero: {
      title: "Professional IT Solutions",
      subtitle: "Empowering Your Business with Cutting-Edge Technology",
      description: "Wendy Incorporated provides comprehensive technical support, development, design, marketing, and security services to help your business thrive in the digital age.",
      getStarted: "Get Started",
      learnMore: "Learn More"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for all your technology needs",
      technicalSupport: {
        title: "Technical Support",
        description: "24/7 professional technical assistance and troubleshooting for all your IT needs."
      },
      webMobileDev: {
        title: "Web & Mobile Development",
        description: "Custom web applications and mobile apps built with modern technologies."
      },
      graphicDesign: {
        title: "Graphic Design",
        description: "Creative visual solutions including branding, logos, and marketing materials."
      },
      digitalMarketing: {
        title: "Digital Marketing",
        description: "Strategic online marketing campaigns to grow your digital presence."
      },
      cyberSecurity: {
        title: "Cyber Security",
        description: "Comprehensive security solutions to protect your business from digital threats."
      }
    },
    partners: {
      title: "Our Partners",
      subtitle: "Trusted by leading companies worldwide"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      phone: "Phone",
      address: "Address",
      hours: "Business Hours"
    },
    footer: {
      company: "Wendy Incorporated",
      description: "Professional IT solutions for modern businesses",
      rights: "All rights reserved"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      technicalSupport: "Support Technique",
      webMobileDev: "Développement Web & Mobile",
      graphicDesign: "Design Graphique",
      digitalMarketing: "Marketing Digital",
      cyberSecurity: "Cybersécurité"
    },
    hero: {
      title: "Solutions IT Professionnelles",
      subtitle: "Donnez du pouvoir à votre entreprise avec une technologie de pointe",
      description: "Wendy Incorporated fournit un support technique complet, du développement, du design, du marketing et des services de sécurité pour aider votre entreprise à prospérer à l'ère numérique.",
      getStarted: "Commencer",
      learnMore: "En savoir plus"
    },
    services: {
      title: "Nos Services",
      subtitle: "Solutions complètes pour tous vos besoins technologiques",
      technicalSupport: {
        title: "Support Technique",
        description: "Assistance technique professionnelle 24/7 et dépannage pour tous vos besoins IT."
      },
      webMobileDev: {
        title: "Développement Web & Mobile",
        description: "Applications web personnalisées et applications mobiles construites avec des technologies modernes."
      },
      graphicDesign: {
        title: "Design Graphique",
        description: "Solutions visuelles créatives incluant l'image de marque, logos et matériaux marketing."
      },
      digitalMarketing: {
        title: "Marketing Digital",
        description: "Campagnes marketing en ligne stratégiques pour développer votre présence numérique."
      },
      cyberSecurity: {
        title: "Cybersécurité",
        description: "Solutions de sécurité complètes pour protéger votre entreprise des menaces numériques."
      }
    },
    partners: {
      title: "Nos Partenaires",
      subtitle: "Fait confiance par les entreprises leaders mondiales"
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Entrez en contact avec notre équipe",
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message",
      phone: "Téléphone",
      address: "Adresse",
      hours: "Heures d'ouverture"
    },
    footer: {
      company: "Wendy Incorporated",
      description: "Solutions IT professionnelles pour les entreprises modernes",
      rights: "Tous droits réservés"
    }
  }
}

export const useTranslationStore = defineStore('translation', () => {
  const currentLanguage = ref<Language>('en')
  
  const t = computed(() => translations[currentLanguage.value])
  
  function setLanguage(lang: Language) {
    currentLanguage.value = lang
  }
  
  function getTranslation(lang: Language) {
    return translations[lang] || translations.en
  }
  
  return {
    currentLanguage,
    t,
    setLanguage,
    getTranslation
  }
})
