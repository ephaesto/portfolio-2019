<template>
  <header>
    <button class="displayLarge burger" :class="{ buttonScroll:isButtonScroll(), buttonScrollIsVisible:isButtonVisible()}" @click="isVisible=true">
      ☰
    </button>
    <nav :class="{visible:isVisible, navScroll:isBlack(), navScrollIsVisible:isNavVisible()}">
      <button class="displayLarge cross" @click="isVisible=false">
        ╳
      </button>
      <logo class="logo" :is-black="isBlack(widthWindows)" />
      <ul>
        <li @click="isVisible=false">
          <nuxt-link to="/">
            Accueil
          </nuxt-link>
        </li>
        <li @click="isVisible=false">
          <nuxt-link to="/skills">
            Mes Compétences
          </nuxt-link>
        </li>
        <li @click="isVisible=false">
          <nuxt-link to="/works">
            Mes Créations
          </nuxt-link>
        </li>
        <li @click="isVisible=false">
          <nuxt-link to="/contact">
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
     data() {
      return {
        isVisible: false,
        widthWindows: 750,
        scroll: 0,
      }
    },
    mounted() {
      this.widthWindows = window.innerWidth
      window.addEventListener('resize', ()=>{ this.widthWindows = window.innerWidth} )
      window.addEventListener('scroll', ()=>{this.scroll = window.scrollY} )
    },
    methods: {
      isBlack(){
        if(this.widthWindows >=750){
          return this.scroll >= 54
        }
        return true
      },
      isNavVisible(){
        return this.widthWindows >=750 && this.scroll > 60
      },
      isButtonScroll(){
        return this.widthWindows <=750 && this.scroll > 64
      },
      isButtonVisible(){
        return this.widthWindows <=750 && this.scroll > 67
      }
    }
  }
</script>

<style lang="sass" scoped>
  header
    position: relative
    left: 0
    top: 0
    z-index: 998
  nav
    position: fixed
    top: 0
    left: -100%
    z-index: 999
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
    background-color: white
    transition: 500ms
    &.visible
      left: 0
      transition: 800ms 
  
  ul
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 0
    width: 100%
  
  li
    list-style: none
    height: 100%

  a
    display: block
    text-decoration: none
    font-size: 1.3rem
    padding: 0 1rem
    font-family: 'Montserrat', sans-serif
    font-weight: 900
    line-height: 4.5rem
    text-transform: uppercase
    color: black
    height: 100%
    &:focus
      outline: none
    &:active
      color: black
    &.nuxt-link-active
      transform: scale(1.1)
      &:hover
        transform: scale(1.2)
    &:hover
      transform: scale(1.2)

  .logo
    width: 120px
    height: 120px
    padding: 0.5rem
    margin-bottom: 4rem
  
  button 
    width: 54px
    height: 54px
    z-index: 1
    position: relative
    font-size: 1.3rem
    font-family: inherit
    font-weight: 900
    background-color: transparent
    color: white
    padding: 0.5rem 1rem
    outline: none
    border: none
    overflow: hidden
    transition: color 0.4s ease-in-out
    border-radius: 50%
    &:hover 
      cursor: pointer
      color: #161616
      &::before 
        transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15)

    &::before 
      content: ''
      z-index: -1
      position: absolute
      top: 100%
      left: 100%
      width: 1rem
      height: 1rem
      border-radius: 50%
      background-color: rgba(250,250,250,0.75)
      transform-origin: center
      transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0)
      transition: transform 0.45s ease-in-out

  .cross
   
    position: absolute
    top: 5px
    left: 5px
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)
    background-color: #5b43a1
    &:hover
      box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75)
    &::before
      background-color: #2fa5fa
  
  .burger
    margin: 5px
    font-size: 2.5rem
  
  .buttonScroll
    position: fixed
    left: 0
    top: -100%
    background-color: white
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)
    color: black
    &:hover
      box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75)
      color: white
    &::before
      background-color: #c9c9c9
  
  .buttonScrollIsVisible
    top: 0
    transition: top 500ms

  @media screen and (min-width: 750px) 
    nav
      flex-direction: row 
      height: auto
      background-color: transparent
      position: static
      justify-content: flex-start
      align-items: stretch
      left: 0
      transition: 0s

    .navScroll
      background-color: white
      width: 100%
      position: fixed
      top: -100%
      box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.75)
      a
        color: black
        &:active
          color: black
    .navScrollIsVisible
      top: 0
      transition: top 500ms

    ul
      flex-direction: row

    a
      padding: 0 1rem
      color: white
      &:active
        color: white
    .logo
      width: 54px
      height: 54px
      padding: 0.5rem
      margin-bottom: 0

    .displayLarge
      display: none

  @media screen and (min-width: 850px) 
    a
      padding: 0 2rem

</style>




