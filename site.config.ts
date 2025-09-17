import { siteConfig } from './lib/site-config.ts'
import locale from './site.locale.json'

export default siteConfig({
  notionDbIds: [
    '271066442e2580468635dc166196e55a'
  ],

  // basic site info (required)
  name: 'Weird Physics',
  domain: 'weirdphysics.vercel.app',
  author: 'Onyu Kim',

  // open graph metadata (optional)
  description: 'Your Notion pages, reborn as a stunning blog',

  // hero section (optional)
  heroAssets: [
    
  ],

  // author metadata (optional)
  authors: [
    {
      name: 'Onyu Kim',                       // Author name
      avatar_dir: '/authors/Onyukim2025.jpg',   // Author avatar image path in public folder (28px x 28px recommended)
      home_url: 'https://weirdphysics.vercel.app/',   // Author home URL
    }
  ],

  // social links, the order is preserved.
  socials: {
    //github: 'alemem64',  // optional github username
    //linkedin: 'alemem64', // optional linkedin username
    //youtube: 'channel/UCV7iVbVip33wD_rsiQLSubg?si=Tf0bKAPvtDY_J833', // optional youtube channel id eg. channel/UCXXXXXXXXXXXXXXXXXXXXXX
    //instagram: 'alemem64', // optional instagram username
    // tiktok: '#', // optional tiktok username
    // threads: '#', // optional threads username
    // facebook: '#',  // optional facebook profile id on profile page eg. 1000XXXXXXXXXXX
    // twitter: '#', // optional twitter username
    // mastodon: '#', // optional mastodon profile URL, provides link verification
    // newsletter: '#' // optional personal newsletter URL
  },

  // locale configuration
  locale,

  // Incremental Static Regeneration (ISR) configuration
  isr: {
    revalidate: 60 // revalidate time in seconds
  }
})
