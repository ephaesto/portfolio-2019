<template>
  <div class="skills">
    <section class="title" :class="{titleFixed:isFixed()}">
      <h1>Mes Compétences</h1>
    </section>
    <div v-if="technos && creations" class="mySkills">
      <section v-for="(technos,name,indexType) in technoByType(technos)" :key="indexType" :class="name">
        <div class="titreTypeTechno">
          <h2>{{ name }}</h2>
        </div>
        <div class="container containerFlex">
          <div v-for="(techno,indexTechno) in technos" :key="indexTechno" class="myCard flexCenter">
            <div class="myCardImg">
              <img :src="require(`~/assets/img/technos/${techno.img}`)" :alt="techno.imgAlt">
            </div>
            <div class="myCardText flexCenter">
              <h3>{{ techno.name }}</h3>
              <p><strong>{{ techno.level }}</strong></p>
              <p> {{ techno.exemple }} </p>
              <div class="ListLink bgwhit">
                <nuxt-link v-for="(creation,indexCreation) in getLink(techno.creations)" :key="indexCreation" to="">
                  Voir le projet  {{ creation.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
      const technos = await $axios.$get('http://localhost:8000/api/technos')
      const creations = await $axios.$get('http://localhost:8000/api/creations')
      return {
          technos: technos["hydra:member"],
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
      technoByType(technos) {
        const types = technos.reduce((technos, techno) => {
          technos[techno.type] = (technos[techno.type] || []).concat(techno)
          return technos
        }, {})
        return types
      },
      getLink(creations) {
        if(creations[0]){
          creations = creations.map(creation => {
            let creationObject = this.creations.filter(creationObject => creationObject["@id"] === creation)
            return creationObject[0]
            })
        }
        return creations
      }
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
/*-------------- My Skills ----------------*/
.mySkills 
  padding-bottom: 10rem
  section
    flex-direction: column
    .titreTypeTechno
      padding: 12rem 0 10rem 0
      background: #2fa5fa
      overflow: hidden
      position: relative
      width: 100%
      text-align: center
      &:before
          content: ""
          overflow: hidden
          width: 0
          height: 0
          border-style: solid;
          border-width: 200px 10000px 0 0;
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
          border-width: 0 0 200px 10000px;
          border-color: transparent transparent white transparent
          position: absolute
          left: 50%
          bottom: 0
          margin-left: -5000px
          z-index: 2
      h2
        color: white
        font-size: 2.1rem
        padding-bottom: 2rem
  .container
    flex-wrap: wrap
    max-width: none
    width: 700px
  .myCard
    background-color: #f7f7f7
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
      width: 12rem
      img
        width: 100%
  .myCardText
    h3
      display: inline-block
      color: #2fa5fa
      font-size: 1.8rem
      padding: 1rem 0
    strong
      color: #b91ebd
      font-size: 1.5rem
    p
      font-size: 1.1rem
    .ListLink
      padding: 1.5rem 0
      a
        display: block
        text-decoration: none
        font-size: 1.1rem
        font-weight: 900
        text-align: center
        color: #5b43a1
        height: 100%
        padding-bottom: 0.5rem
        &:focus
          outline: none
        &:active
          color: #5b43a1
        &:hover
          transform: scale(1.1)
  .Back-end
    .titreTypeTechno
      background: #5b43a1
  .Webdesign
    .titreTypeTechno
      background: #b91ebd
/*-------------- My Skills end ----------------*/
@media screen and (min-width: 360px)
  .title
    height: 400px
@media screen and (min-width: 411px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 100px
  /*-------------- Title end----------------*/
  /*-------------- My Skills ----------------*/
  .mySkills
    .container
      width: 900px
    .myCard
      padding: 5rem
  /*-------------- My Skills end ----------------*/
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
  /*-------------- My Skills ----------------*/
  .mySkills
    .container
      width: 800px
    .myCard
      margin: 0 2rem 2rem 0
  /*-------------- My Skills end ----------------*/
@media screen and (min-width: 860px)
  /*-------------- My Skills ----------------*/
  .mySkills
    .container
      width: 900px
  /*-------------- My Skills end ----------------*/
@media screen and (min-width: 1190px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 300px
  /*-------------- Title end ----------------*/
  /*-------------- My Skills ----------------*/
  .mySkills
    section
      .titreTypeTechno
        h2
          font-size: 3rem
  /*-------------- My Skills end ----------------*/
@media screen and (min-width: 1380px)
  .title
    &:before
      background-position: bottom 0 left 400px
@media screen and (min-width: 1575px)
  .title
    &:before
      background-position: bottom 0 left 500px

</style>
