<template>
  <footer>
    <div class="textFooter">
      <logo class="logo" />
      <p>
        Créé par Emeric Lebbrecht © 2018 :
        <nuxt-link to="/mentions">
          Mentions Légales
        </nuxt-link>
      </p> 
      <div class="reseauxRaw">
        <a class="reseaux">
          <span class="mdi mdi-github-box" />
        </a>
        <a class="reseaux">
          <span class="mdi mdi-linkedin-box" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  import Logo from '~/components/svg/logo'
  export default {
    name: 'MyFooter',
    components: {
      Logo
    },
  }
</script>

<style lang="sass" scoped>
  footer
    background: #5b43a1
    box-shadow: -5px 0 15px 0px rgba(0,0,0,0.75)
    overflow: hidden
    position: relative
    &:before
      content: ""
      overflow: hidden
      width: 0
      height: 0
      border-style: solid
      border-width: 400px 100px 0 0
      border-color: #b91ebd transparent transparent transparent
      position: absolute
      left: 0
      top: 50%
      margin-top: -200px
      z-index: 2
    &:after
      content: ""
      overflow: hidden
      width: 0
      height: 0
      border-style: solid
      border-width: 0 0 400px 100px
      border-color: transparent transparent #2fa5fa transparent
      position: absolute
      right: 0
      top: 50%
      margin-top: -200px
      z-index: 2
  .textFooter
    display: flex
    flex-direction: column
    justify-content: space-evenly
    align-items: center
    padding: 2rem 0
    position: relative
    z-index: 3
    p
      font-size: 1.1rem
      font-weight: 500
      color: white
      padding-bottom: 2rem
      a
        display: block
        text-decoration: none
        font-size: 1.3rem
        font-family: 'Montserrat', sans-serif
        font-weight: 900
        line-height: 4.5rem
        text-transform: uppercase
        text-align: center
        color: white
        height: 100%
        &:focus
          outline: none
        &:active
          color: white
        &:hover
          transform: scale(1.2)
  
  .reseauxRaw
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    .reseaux
      display: flex
      justify-content: center
      align-items: center
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
      span
        &::before
          font-size: 3.5rem
      &:hover 
        cursor: pointer
        color: #161616
        &::before 
          transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15)

      &::before 
        content: ''
        z-index: -1
        position: absolute
        bottom: 100%
        right: 100%
        width: 1em
        height: 1em
        border-radius: 50%
        background-color: rgba(250,250,250,0.75)
        transform-origin: center
        transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0)
        transition: transform 0.45s ease-in-out
  .logo
    width: 100px
    height: 100px
    padding-bottom: 2rem

  @media screen and (min-width: 700px)
    footer
      &:before
        border-width: 300px 300px 0 0
      &:after
        border-width: 0 0 300px 300px
    .textFooter
      flex-direction: row
      p
        font-size: 1.5rem
        padding-bottom: 0
    .reseauxRaw
      flex-direction: column
  @media screen and (min-width: 900px)
    .textFooter
      p
        a
          display: inline-block
          padding-left: 1.5rem
          text-align: left

  @media screen and (min-width: 1030px)
    footer
      &:before
        border-width: 300px 500px 0 0
      &:after
        border-width: 0 0 300px 500px

  @media screen and (min-width: 1527px)
    footer
      &:before
        border-width: 300px 800px 0 0
      &:after
        border-width: 0 0 300px 800px
  
</style>




