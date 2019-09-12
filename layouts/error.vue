<template>
  <div class="errorPage">
    <section class="title" :class="{titleFixed:isFixed()}">
      <h1>Oops, erreur {{ error.statusCode }}</h1>
    </section>
    <section class="myError">
      <div class="container">
        <h2 v-if="error.statusCode === 404" class="headline">
          La page n'existe pas !!!
        </h2>
        <h2 v-else class="headline">
          Une erreur inattendue est survenue !!!
        </h2>
        <nuxt-link to="/">
          Retournez à l'accueil
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  data() {
      return {
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
      isFixed(){
        if(this.widthWindows >=750){
         return this.scroll >= 54
        }
        return this.scroll >= 64
      },
    }
}
</script>

<style lang="sass" scoped>
/*-------------- Title ----------------*/
.title
  display: flex
  justify-content: center
  align-items: center
  background-image: url('~assets/img/fondAccueil.jpg')
  background-size: cover
  background-position: center
  margin-top: -5.334rem
  height: 330px
  position: relative
  left: 0
  top: 0
  &.titleFixed
      margin-top: 0 
  &:after
    content: ""
    position: absolute
    left: 0
    bottom: -1px
    width: 100%
    height: 200px
    background-image: url('~assets/img/waveWhite1.svg')
    background-repeat: repeat-x
    background-size: cover
    background-position: bottom
  &:before
    content: ""
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    height: 200px
    background-image: url('~assets/img/waveWhite2.svg')
    background-repeat: repeat-x;
    background-size: cover
    background-position: bottom 0 left 5px
  h1
    color: white
    font-size: 2.4rem
    font-family: 'Montserrat', sans-serif
    margin-block-start: 0
    margin-block-end: 0
    font-weight: 900
  .logo
    width: 70px
    height: 92px
/*-------------- Title end ----------------*/
/*-------------- My Error ----------------*/
.myError
  padding: 15rem 2rem 
  h2
    color: #2fa5fa
    font-size: 2.1rem
    padding-bottom: 2rem 
    text-align: center
  a
    display: block
    text-decoration: none
    font-size: 1.3rem
    font-weight: 900
    font-family: 'Montserrat', sans-serif
    text-transform: uppercase
    color: #b91ebd
    height: 100%
    width: 300px
    padding: 2rem
    margin: 0 auto
    &:focus
      outline: none
    &:active
      color: #b91ebd
    &:hover
      transform: scale(1.2)
/*-------------- My Error end ----------------*/
@media screen and (min-width: 360px)
  .title
    height: 400px
@media screen and (min-width: 411px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 100px
  /*-------------- Title end----------------*/
@media screen and (min-width: 436px)
  .title
    height: 500px
    h1
      font-size: 3.5rem
@media screen and (min-width: 575px)
  .title
    height: 600px
    &:before
      background-position: bottom 0 left 200px
    h1
      font-size: 4.5rem
    .logo
      width: 120px
      height: 150px

@media screen and (min-width: 750px)
  /*-------------- Title ----------------*/
  .title
    margin-top: -4.5rem 
    h1
      font-size: 5.5rem
  /*-------------- Title end ----------------*/
@media screen and (min-width: 1190px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 300px
  /*-------------- Title end ----------------*/
  /*-------------- My Error ----------------*/
  .myError
    padding: 15rem 4rem
    h2
      font-size: 3rem
    p
      font-size: 1.5rem
  /*-------------- My Error end ----------------*/
@media screen and (min-width: 1380px)
  .title
    &:before
      background-position: bottom 0 left 400px
@media screen and (min-width: 1575px)
  .title
    &:before
      background-position: bottom 0 left 500px

</style>