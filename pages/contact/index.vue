<template>
  <div class="contact">
    <section class="title" :class="{titleFixed:isFixed()}">
      <h1>Contactez-moi !</h1>
    </section>
    <section class="fromContact">
      <div class="container">
        <h2>Envoyez-moi un message !</h2>
        <p v-if="isSend===true" class="mailValide">
          Votre mail a été envoyé !
        </p>
        <p v-if="isSend===false" class="mailError">
          Une erreur est survenu. Pouvez-vous recommencer?
        </p>
        <form>
          <label for="name">Qui êtes-vous?</label>
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
            placeholder="Dénomination"
          >
          <p v-if="errors.name" class="error">
            <strong class="badge">erreur :</strong> {{ errors.name }}
          </p>
          <label for="email">Votre adresse email :</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="Votre adresse email"
          >
          <p v-if="errors.email" class="error">
            <strong class="badge">erreur :</strong> {{ errors.email }}
          </p>
          <label for="email">Le sujet de votre message :</label>
          <input
            id="subject"
            v-model="subject"
            type="text"
            name="subject"
            placeholder="Pourquoi vous me contactez ?"
          >
          <p v-if="errors.subject" class="error">
            <strong class="badge">erreur :</strong> {{ errors.subject }}
          </p>
          <label for="movie">Votre message :</label>
          <textarea 
            v-model="message" 
            placeholder="Votre message..."
          />
          <p v-if="errors.message" class="error">
            <strong class="badge">erreur :</strong> {{ errors.message }}
          </p>
          <button class="submit" @click="checkForm">
            Envoyer
          </button>
        </form>
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
        errors: {
          name: null,
          email: null,
          subject: null,
          message: null
        },
        name: null,
        email: null,
        subject: null,
        message: null,
        isSend:null
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
    checkForm(e) {
      e.preventDefault()
      this.errors = {
          name: null,
          email: null,
          subject: null,
          message: null
        }
      if (!this.name) {
        this.errors.name = "Une dénomination est obligatoire"
      }
      if (!this.email) {
        this.errors.email = "Un email est obligatoire"
      } else if (!this.validEmail(this.email)) {
        this.errors.email = "Un email valide est obligatoire"
      }
      if (!this.subject) {
        this.errors.subject = "Un sujet est obligatoire"
      }
      if (!this.message) {
        this.errors.message = "Un message est obligatoire"
      }
      if (!this.errors.message && !this.errors.subject && !this.errors.email && !this.errors.name ) {
        this.$axios.post(`http://localhost:8000/api/contact/email`,
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
          },{ headers: { Accept: "application/json"}}
        ).then(()=>{
          this.isSend= true
        }).catch(()=>{
        this.isSend= false
        })
      }
    },
    validEmail(email) {
      /*eslint-disable-next-line no-alert*/
      var RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return RegExp.test(email)
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
/*-------------- Title end ----------------*/
/*-------------- Form ----------------*/
.fromContact
  padding: 5rem 2rem 10rem 2rem
  form
    margin: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  h2
    font-size: 2rem
    text-align: center
    letter-spacing: 0.09rem
    padding-top: 2.5rem
    padding-bottom: 2rem
  label
    padding: 2.5rem 0 1.5rem 0
    font-size: 1.5rem
    font-weight: 500
    width: 100%
  input,textarea
    background-image: none
    background-color: #e6e6e6
    border-radius: 0.65rem
    padding: 0.4375rem 1rem
    border: none
    width: 100%
    height: 4rem
    &:focus
      outline: none
  
  textarea
    height: 18.75rem
    resize: none
  .error 
    display: inline-block
    color:#b91ebd
    font-weight: 500
    margin: 1rem 0
    width: 100%
    .badge
      color: white
      background-color: #5b43a1
      margin-right: 0.65rem
      overflow: hidden
      border-radius: 0.3rem
      padding: 0 0.5rem

  .mailValide
    color: white
    background-color: #6d52bc
    border: 2px solid #5b43a1
    border-radius: 1rem
    width: 100%
    text-align: center
    font-weight: 600
    padding: 1rem 1rem
  .mailError
    color: white
    background-color: #ba2fbe
    border: 2px solid #b91ebd
    border-radius: 1rem
    width: 100%
    text-align: center
    font-weight: 600
    padding: 1rem 1rem
  button 
    z-index: 1
    position: relative
    font-size: 2rem
    font-family: inherit
    font-weight: 900
    background-color: transparent
    color: white
    padding: 0.5rem 1rem
    outline: none
    border: none
    overflow: hidden
    transition: color 0.4s ease-in-out
    border-radius: 1rem
    margin-top: 2rem
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
      width: 2rem
      height: 2rem
      border-radius: 50%
      background-color: rgba(250,250,250,0.75)
      transform-origin: center
      transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0)
      transition: transform 0.45s ease-in-out
  .submit
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)
    background-color: #5b43a1
    &:hover
      box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75)
    &::before
      background-color: #2fa5fa

/*-------------- Form end ----------------*/

@media screen and (min-width: 360px)
  .title
    height: 400px
@media screen and (min-width: 411px)
  .title
    &:before
      background-position: bottom 0 left 100px
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
  /*-------------- Form ----------------*/
  .fromContact
    .container
      width: 600px
      max-width: none
  /*-------------- Form end ----------------*/

@media screen and (min-width: 1190px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 300px
  /*-------------- Title end ----------------*/
  /*-------------- Form ----------------*/
  .fromContact
    .container
      width: 900px
      max-width: none
  /*-------------- Form end ----------------*/
@media screen and (min-width: 1380px)
  .title
    &:before
      background-position: bottom 0 left 400px
@media screen and (min-width: 1575px)
  .title
    &:before
      background-position: bottom 0 left 500px

</style>



