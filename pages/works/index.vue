<template>
  <div class="works">
    <section class="title" :class="{titleFixed:isFixed()}">
      <h1>Mes Créations</h1>
    </section>
    <section v-for="(creation,indexCreation) in creations" :key="indexCreation" :class="creation.name" class="myWorks">
      <div class="container containerFlex">
        <div class="imgPart">
          <img :src="require(`~/assets/img/works/${creation.img}`)" :alt="creation.alt">
        </div>
        <div class="textPart">
          <h2>{{ creation.title }}</h2>
          <p>{{ creation.resumer }}</p>
          <nuxt-link :to="`/works/${creation.id}`">
            Voir le projet
          </nuxt-link>
        </div>
      </div>
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
    async asyncData({ $axios }) {
      const creations = await $axios.$get('http://localhost:8000/api/creations')
      return {
          creations: creations["hydra:member"]
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
/*-------------- My Works ----------------*/
.myWorks
  padding: 2rem 2rem
  .imgPart
    display: flex
    justify-content: center
    align-items: center
    height: 24rem
    overflow: hidden
    border-radius: 58% 42% 67% 33% / 44% 63% 37% 56%
    background-color: #5b43a1
    img
      display: block
      height: 100%
    
  .textPart
    padding: 3rem 2rem
    h2
      color: #2fa5fa
      font-size: 2.1rem
      padding-bottom: 2rem
    p
      font-size: 1.1rem   
    a
      display: block
      text-decoration: none
      font-size: 1.3rem
      font-weight: 900
      font-family: 'Montserrat', sans-serif
      text-transform: uppercase
      color: #b91ebd
      height: 100%
      width: 200px
      padding: 2rem
      &:focus
        outline: none
      &:active
        color: #b91ebd
      &:hover
        transform: scale(1.2)
.myWorks
  overflow: hidden 
  &:nth-child(odd)
    background-color: #f7f7f7
    position: relative
    padding: 10rem 2rem 
    &:before
      content: ""
      overflow: hidden
      width: 0
      height: 0
      border-style: solid;
      border-width: 100px 10000px 0 0
      border-color: white transparent transparent transparent
      position: absolute
      left: 50%
      top: 0
      margin-left: -5000px
      z-index: 2
    &:after
        content: ""
        overflow: hidden
        width: 0
        height: 0
        border-style: solid
        border-width: 0 0 100px 10000px
        border-color: transparent transparent white transparent
        position: absolute
        left: 50%
        bottom: 0
        margin-left: -5000px
        z-index: 2
    .imgPart
      background-color: #b91ebd
    .textPart
      a
        color: #5b43a1
        &:active
          color: #b91ebd
.myWorks
  &:last-child
    padding: 2rem 2rem 8rem 2rem
    
/*-------------- My Works end ----------------*/
@media screen and (min-width: 360px)
  .title
    height: 400px
@media screen and (min-width: 411px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 100px
  /*-------------- Title end----------------*/
  /*-------------- My Works ----------------*/
  .works
    .container
      width: 900px
    .myCard
      padding: 5rem
  /*-------------- My Works end ----------------*/
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
  /*-------------- My Works ----------------*/
  .myWorks
    .imgPart
      width: 33.33%
      height: auto
      img
        height: auto
        width: 100%
    .textPart
      width: 66.66%
      padding: 0 2rem
  .myWorks:nth-child(odd)
    .containerFlex
        flex-direction: row-reverse
  /*-------------- My Works end ----------------*/
@media screen and (min-width: 1190px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 300px
  /*-------------- Title end ----------------*/
  /*-------------- My Works ----------------*/
  .myWorks
    .textPart
      padding: 0 4rem
      h2
        font-size: 3rem
      p
        font-size: 1.5rem
  /*-------------- My Works end ----------------*/
@media screen and (min-width: 1380px)
  .title
    &:before
      background-position: bottom 0 left 400px
@media screen and (min-width: 1575px)
  .title
    &:before
      background-position: bottom 0 left 500px

</style>
