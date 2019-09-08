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
    <section class="career">
      <div class="container containerFlex containerFlexReverse">
        <div class="imgPart">
          <img src="~/assets/img/accueilTimeline.svg" alt="illstration timeline">
        </div>
        <div class="textPart">
          <h2>Mon parcours</h2>
          <h3>Avant l’informatique :</h3>
          <ul>
            <li><span class="dateCareer">2010 / 2013</span> BTSA aquaculture <span class="placeCareer">validée par ISETA de Poisy</span></li>
            <li><span class="dateCareer">2014 / 2015</span> DUT informatique <span class="placeCareer">IUT Orléans</span></li>
            <li><span class="dateCareer">2015 / 2016</span> Licence 1 de Psychologie <span class="placeCareer">Université Savoie Mont-Blanc</span></li>
          </ul>
          <h3>Et maintenant :</h3>
          <ul>
            <li><span class="dateCareer">2016 / 2017</span> Titre professionnel Designer web RNCP III <span class="placeCareer">validé par ARIES Grenoble</span></li>
            <li><span class="dateCareer">2017 / 2019</span> Chef de projet multimédia RNCP II <span class="placeCareer">validé par Openclassrooms</span></li>
          </ul>
        </div>
      </div>
    </section>
    <section class="goal">
      <div class="container containerFlex">
        <div class="imgPart">
          <img src="~/assets/img/accueilTechnologie.svg" alt="illstration all technologie">
        </div>
        <div class="textPart">
          <h2>Ma vision dans le monde du développement informatique </h2>
          <p>
            Pour moi le code peut s’apparenter à la glaise du sculpteur ou la peinture du peintre vous l’aurez compris j’aime créer. Les projets et 
            les défis sont les raisons pour lesquels je code.<br> 
            J’ai eu cette révélation que dans mes dernières années d’étude ce qui explique sûrement mon DUT d’informatique avorté. Mon objectif final 
            serait de compléter les compétences qui vont des métiers de UX designer, illustrateur et modélisateur 3D  aux métiers de  développeur IA, 
            big data, blockchain. Je ne suis pas intéressé par être le meilleur dans un langage, mais plutôt être capable de faire n’importe quel projet 
            qu’il soit loufoque ou non.<br>
            Bon c’est un projet ambitieux et il ne sera pas rempli tout de suite, mais connaître la ligne d’arrivée me permet aujourd’hui d’être curieux 
            et ouvert d’esprits dans pleins de domaines.
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
  padding: 10rem 0
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
    padding: 0 4rem
    h2
      color: #5b43a1
      font-size: 3rem
      padding-bottom: 2rem
    p
      font-size: 1.5rem
/*-------------- Presentation end ----------------*/
/*-------------- Career ----------------*/
.career
  padding: 20rem 0
  background: #2fa5fa
  position: relative
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
  .imgPart
    width: 33.33%
    display: flex
    justify-content: center
    align-items: center
    img
      display: block
      width: 100%
    
  .textPart
    width: 66.66%
    padding: 0 4rem
    h2
      color: white
      font-size: 3rem
      padding-bottom: 2rem
    h3
      color: white
      font-size: 2rem
    ul
      padding: 2rem
      li
        list-style: none
        font-size: 1.5rem
        color: #5b43a1
        font-weight: 700
        .dateCareer
          color: #b91ebd
          font-weight: 900
          padding-right: 1rem
        .placeCareer
          font-weight: 400

/*-------------- Career end ----------------*/
/*-------------- Goal ----------------*/
.goal
  padding: 10rem 0
  .imgPart
    width: 33.33%
    display: flex
    justify-content: center
    align-items: center
    img
      display: block
      width: 100%
    
  .textPart
    width: 66.66%
    padding: 0 4rem
    h2
      color: #5b43a1
      font-size: 3rem
      padding-bottom: 2rem
    p
      font-size: 1.5rem
/*-------------- Goal end ----------------*/

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
