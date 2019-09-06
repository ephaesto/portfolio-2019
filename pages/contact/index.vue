<template>
  <div class="contact">
    <section class="title" :class="{titleFixed:isFixed()}">
      <h1>Contactez-moi !</h1>
    </section>
  </div>
</template>

<script>
export default {
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
    background-repeat: repeat-x;
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
    background-position: bottom 0 left 5px;
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

@media screen and (min-width: 360px)
  .title
    height: 400px
@media screen and (min-width: 411px)
  .title
    &:before
      background-position: bottom 0 left 100px;
@media screen and (min-width: 436px)
  .title
    height: 500px
    h1
      font-size: 3.5rem

@media screen and (min-width: 575px)
  .title
    height: 600px
    &:before
      background-position: bottom 0 left 200px;
    h1
      font-size: 4.5rem
    .logo
      width: 120px
      height: 150px

@media screen and (min-width: 750px)
  .title
    margin-top: -4.5rem 
    h1
      font-size: 5.5rem

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
