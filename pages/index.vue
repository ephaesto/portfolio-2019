<template>
  <div class="accueil">
    <section class="title" :class="{titleFixed:isFixed()}">
      <div class="row">
        <logo class="logo" />
        <h1>Emeric <span>Lebbrecht</span></h1>
      </div>
      <h2>Développeur d'application Web</h2>
    </section>
    <section>
      <div class="row">
        <logo class="logo" />
        <h1>Emeric <span>Lebbrecht</span></h1>
      </div>
      <h2>Développeur d'application Web</h2>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/svg/logo'
export default {
  components: {
    Logo
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

.title
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-image: url('~assets/img/fondAccueil.jpg')
  background-size: cover
  background-position: center
  margin-top: -5.334rem
  height: 530px
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
    height: 130px
    background-image: url('~assets/img/waveWhite1.svg')
    background-repeat: repeat-x;
    background-size: cover
    background-position: bottom
  &:before
    content: ""
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    height: 130px
    background-image: url('~assets/img/waveWhite2.svg')
    background-repeat: repeat-x;
    background-size: cover
    background-position: bottom 0 left 5px;
  .row
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center

  h1
    color: white
    font-size: 4rem
    font-family: 'Montserrat', sans-serif
    margin-block-start: 0
    margin-block-end: 0
    font-weight: 900
    span
      display: block
      text-transform: uppercase
      font-size: 2.3rem
  h2
    color: white
    font-family: 'Roboto', sans-serif
    font-weight: 500
    font-size: 1.4rem
    padding-top: 1.5rem
  .logo
    width: 70px
    height: 92px
@media screen and (min-width: 360px)
  .title
    height: 600px
@media screen and (min-width: 411px)
  .title
    height: 700px
    &:before
      background-position: bottom 0 left 100px;
@media screen and (min-width: 575px)
  .title
    height: 800px
    &:before
      background-position: bottom 0 left 200px;
    h1
      font-size: 7rem
      span
        font-size: 4rem
    h2
      font-size: 2.5rem
      padding-top: 3rem
    .logo
      width: 120px
      height: 150px

@media screen and (min-width: 750px)
  .title
    margin-top: -4.5rem 
@media screen and (min-width: 1190px)
  .title
    &:before
      background-position: bottom 0 left 300px;
@media screen and (min-width: 1380px)
  .title
    &:before
      background-position: bottom 0 left 400px;
@media screen and (min-width: 1575px)
  .title
    &:before
      background-position: bottom 0 left 500px;

</style>
