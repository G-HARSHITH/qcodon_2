import { ContactHero } from '@/components/contact/ContactHero'
import { ContactChannels } from '@/components/contact/ContactChannels'
import { ContactForm } from '@/components/contact/ContactForm'
import { SiteFooter } from '@/components/contact/SiteFooter'

export default function Contact() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <ContactHero />
      <ContactChannels />
      <ContactForm />
      <SiteFooter />
    </div>
  )
}
