<template>
  <header>
    <nav>
      <logo class="logo" />
      <ul>
        <li>
          <nuxt-link to="/">
            Accueil
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Mes Compétences
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Mes Créations
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Contactez-moi
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import Logo from '~/components/svg/logo'
  export default {
    name: 'Navbar',
    components: {
      Logo
    },
  }
</script>

<style lang="sass">
  .logo
    width: 53px
    height: 53px
    .color-fill
      fill: black 
</style>




