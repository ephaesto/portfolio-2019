<template>
  <div class="works">
    <section class="title" :class="{titleFixed:isFixed()}">
      <div class="titleImage">
        <img :src="require(`~/assets/img/works/${creation.img}`)" :alt="creation.alt">
      </div>
      <h1> {{ creation.title }} </h1>
    </section>
    <section class="explainWork">
      <div class="container">
        <h2>Présentation du projet {{ creation.name }}</h2>
        <p>{{ creation.text }}</p>
      </div>
    </section>
    <section class="technology">
      <h2 v-if="creation.technos.length > 1">
        Les technologies choisies
      </h2>
      <h2 v-else>
        La technologie choisie
      </h2>
      <div class="container containerFlex">
        <div v-for="(techno,indexTechno) in getTechnos(creation.technos)" :key="indexTechno" class="myCard flexCenter">
          <div class="myCardImg">
            <img :src="require(`~/assets/img/technos/${techno.img}`)" :alt="techno.imgAlt">
          </div>
          <div class="myCardText flexCenter">
            <h3>{{ techno.name }}</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="links">
      <div class="container">
        <h2>Voir le rendu du projet</h2>
        <a v-if="creation.link" :href="creation.link">
          Voir le site 
        </a>
        <a v-if="creation.git" :href="creation.git">
          Voir le dépot Git  
        </a>
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
    async asyncData({ $axios,route }) {
      const technos = await $axios.$get('http://localhost:8000/api/technos')
      const creations = await $axios.$get(`http://localhost:8000/api/creations/${route.params.id}`)
      return {
          creation: creations, 
          technos: technos["hydra:member"]
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
      getTechnos(technos) {
        if(technos[0]){
          technos = technos.map(techno => {
            let technoObject = this.technos.filter(technoObject => technoObject["@id"] === techno)
            return technoObject[0]
            })
        }
        return technos
      }
    }
}
</script>

<style lang="sass" scoped>
/*-------------- Title ----------------*/
.title
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-image: url('~assets/img/fondAccueil.jpg')
  background-size: cover
  background-position: center
  margin-top: -5.334rem
  height: 600px
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
    font-size: 2rem
    font-family: 'Montserrat', sans-serif
    margin-block-start: 0
    margin-block-end: 0
    font-weight: 900
    text-align: center
  .titleImage
    width: 20rem
    height: 20rem
    img
      height: 100%
/*-------------- Title end ----------------*/
/*-------------- Explain Work ----------------*/
.explainWork
  padding: 10rem 2rem 5rem 2rem
  .container
    flex-direction: column
  h2
    color: #2fa5fa
    font-size: 2.1rem
    padding-bottom: 2rem
    text-align: center
  p
    font-size: 1.1rem   
    
/*-------------- Explain Work end ----------------*/
/*-------------- Technology ----------------*/
.technology 
  flex-direction: column
  text-align: center
  padding: 15rem 0 
  background: #2fa5fa
  overflow: hidden
  position: relative
  &:before
    content: ""
    overflow: hidden
    width: 0
    height: 0
    border-style: solid
    border-width: 200px 10000px 0 0
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
    border-width: 0 0 200px 10000px
    border-color: transparent transparent white transparent
    position: absolute
    left: 50%
    bottom: 0
    margin-left: -5000px
    z-index: 2
  h2
    color: white
    font-size: 2.1rem
    padding-bottom: 3rem
  .container
    flex-wrap: wrap
    max-width: none
    width: 700px
  .myCard
    background-color: white
    width: 40%
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    overflow: hidden
    border-radius: 58% 42% 67% 33% / 44% 63% 37% 56%
    padding: 2rem
    margin: 0 0 2rem 0
    .myCardImg
      width: 10rem
      img
        width: 100%
  .myCardText
    h3
      display: inline-block
      color: #b91ebd
      font-size: 1.8rem
      padding: 1rem 0
/*-------------- Technology end ----------------*/
/*-------------- Links Work ----------------*/
.links
  padding: 5rem 2rem 15rem 2rem
  .container
    flex-direction: column
  h2
    color: #b91ebd
    font-size: 2.1rem
    padding-bottom: 2rem
    text-align: center
  a
    display: block
    text-decoration: none
    font-size: 1.5rem
    font-weight: 900
    text-align: center
    font-family: 'Montserrat', sans-serif
    text-transform: uppercase
    color: #5b43a1
    height: 100%
    padding-bottom: 0.5rem
    &:focus
      outline: none
    &:active
      color: #5b43a1
    &:hover
      transform: scale(1.2)

/*-------------- Links Work end ----------------*/
@media screen and (min-width: 411px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 100px
  /*-------------- Title end----------------*/
  /*-------------- Explain Work ----------------*/
  .explainWork
    padding: 10rem 4rem 5rem 4rem
  /*-------------- Explain Work end ----------------*/
@media screen and (min-width: 436px)
  .title
    height: 700px
@media screen and (min-width: 575px)
  .title
    &:before
      background-position: bottom 0 left 200px

@media screen and (min-width: 750px)
  /*-------------- Title ----------------*/
  .title
    margin-top: -4.5rem 
    h1
     font-size: 3rem 
  /*-------------- Title end ----------------*/
  /*-------------- Technology ----------------*/
  .technology 
    .myCard
      margin: 0 2rem 2rem 0
  /*-------------- Technology end  ----------------*/
@media screen and (min-width: 1190px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 300px
  /*-------------- Title end ----------------*/
  /*-------------- Explain Work ----------------*/
  .explainWork
    padding: 15rem 4rem 10rem 4rem
    h2
      font-size: 3rem
    p
      font-size: 1.5rem
  /*-------------- Explain Work end ----------------*/
  /*-------------- Technology ----------------*/
  .technology 
    h2
      font-size: 3rem
  /*-------------- Technology end  ----------------*/
@media screen and (min-width: 1380px)
  .title
    &:before
      background-position: bottom 0 left 400px
@media screen and (min-width: 1575px)
  .title
    &:before
      background-position: bottom 0 left 500px

</style>
