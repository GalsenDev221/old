<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2 has-text-centered">Rejoignez-nous</h2>
      <nav class="level is-tablet">
        <div v-for="(social, i) in socials" :key="i" class="level-item has-text-centered mt-6">
          <a :href="social.link" target="_blank" rel="noopener">
            <p class="heading">
              <b-icon pack="fab" :icon="social.icon" custom-size="fa-3x" type="is-grey-dark"></b-icon>
            </p>
            <p class="subtitle">{{ social.name }}</p>
          </a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        socials: [
          {
            name: 'Discord',
            link: 'https://discord.gg/CKZcKqf',
            icon: 'discord'
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/galsendev221',
            icon: 'twitter'
          },
          {
            name: 'Telegram',
            link: 'https://t.me/galsendev221',
            icon: 'telegram-plane'
          },
          {
            name: 'Instagram',
            link: 'https://www.instagram.com/galsendev221',
            icon: 'instagram'
          },
          {
            name: 'Facebook',
            link: 'https://web.facebook.com/galsendev221',
            icon: 'facebook-f'
          },
          {
            name: 'Youtube',
            link: 'https://www.youtube.com/channel/UCw0TqM96VksbRMgcafdUVSQ',
            icon: 'youtube'
          }
        ]
      }
    }
  }
</script>