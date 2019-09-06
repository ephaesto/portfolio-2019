<template>
  <div class="accueil">
    <section class="title" :class="{titleFixed:isFixed()}">
      <div class="row">
        <logo class="logo" />
        <h1>Emeric <span>Lebbrecht</span></h1>
      </div>
      <h2>Développeur d'application Web</h2>
    </section>
    <section class="presentation">
      <div class="container containerFlex">
        <div class="imgPart">
          <div class="imgRow">
            <img src="~/assets/img/avatar.png" alt="One personnal picture">
          </div>
        </div>
        <div class="textPart">
          <h2>Qui suis-je ?</h2>
          <p>
            Sept ans à trimer pour trouver ma voie !!! Je suis heureux de dire enfin je suis développeur, j’ai 27 ans et près à faire un 
            maximum de projets plus différents les uns que les autres.<br> 
            Mon côté robin des bois m’a conduit à la protection de l’environnement. Après avoir compris que ce milieu n’était pas fait pour 
            moi, j’ai erré pendant des années et en 2017 j’ai enfin commencé le développement web avec HTML et CSS puis JavaScript et PHP dans 
            une formation de webdesigner.<br>
            Les interfaces, c’est ce que j’aime faire, par contre je me suis vite rendu compte que ma faible connaissance en développement 
            allait être un frein. J’ai donc choisi de faire une formation tournée vers le PHP et Symfony(POO). A la fin de cette formation, 
            j’ai effectué un stage de 6 mois en Javascript (Vue.js) et Symfony. J’ai adoré ce stage et maintenant, je cherche à revenir sur mon 
            premier amour les interfaces en devenant développeur Front-end tout en gardant un fort intérêt pour le Back-end.
          </p>
        </div>
      </div>
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
/*-------------- Title end ----------------*/
/*-------------- Presentation ----------------*/
.presentation
  padding: 15rem 0
  .imgPart
    width: 33.33%
    display: flex
    justify-content: center
    align-items: center
    position: relative
    &:after
      content: ""
      overflow: hidden
      width: 36rem
      height: 36rem
      border-radius: 52% 48% 72% 28% / 33% 32% 68% 67%
      background: #2fa5fa
      position: absolute
      left: 50%
      top: 50%
      margin-left: -20rem
      margin-top: -20rem
      z-index: 2
    &:before
      content: ""
      width: 36rem
      height: 36rem
      overflow: hidden
      border-radius: 72% 28% 20% 80% / 60% 60% 40% 40%
      background: #5b43a1
      position: absolute
      left: 50%
      top: 50%
      margin-left: -20rem
      margin-top: -20rem
      z-index: 3
  .imgRow
    width: 32rem
    height: 32rem
    overflow: hidden
    border-radius: 33% 67% 60% 40% / 42% 36% 64% 58%
    display: flex
    justify-content: center
    align-items: center
    background: white
    position: relative
    z-index: 4
    img
      display: block
      height: 100%
  .textPart
    width: 66.66%
    h2
      color: #5b43a1
      font-size: 4rem
      padding-bottom: 3rem
    p
      font-size: 2rem
/*-------------- Presentation end ----------------*/

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
