<template>
  <div class="mentions">
    <section class="title" :class="{titleFixed:isFixed()}">
      <h1 class="display-2 font-weight-bold">
        Mentions légales
      </h1>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Présentation du site :</h2>
        <div>
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,
            il est précisé aux utilisateurs du site <a href="/">{{ websiteUrl }}</a> l'identité des
            différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul>
            <li><strong>Propriétaire : </strong> {{ clientName }} – {{ clientAddress }}</li>
            <li><strong>Créateur : </strong><a href="/">{{ websiteUrl }}</a></li>
            <li><strong>Responsable publication : </strong>{{ publicationManager }}</li>
            <p> responsable publication est une personne physique ou une personne morale.</p>
            <li><strong>Webmaster : </strong> {{ webmaster }}</li>
            <li><strong>Hébergeur: </strong>{{ hosting }}<br></li>
            <li><strong>Crédits : </strong> Mentions légales générés par <a target="_blank" href="https://www.subdelirium.com/generateur-de-mentions-legales/">Subdelirium.com</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Conditions générales d’utilisation du site et des services proposés :</h2>
        <div>
          <p>
            L’utilisation du site <a href="/">{{ websiteUrl }}</a> implique l’acceptation pleine et entière
            des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées
            ou complétées à tout moment, les utilisateurs du site <a href="/">{{ websiteUrl }}</a> sont donc
            invités à les consulter de manière régulière.
          </p>
          <p>
            Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique
            peut être toutefois décidée par {{ clientName }}, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates
            et heures de l’intervention.
          </p>
          <p>
            Le site <a href="/">{{ websiteUrl }}</a> est mis à jour régulièrement par Ngtv Experience.
            De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur
            qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
          </p>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Description des services fournis :</h2>
        <div>
          <p>
            Le site <a href="/">{{ websiteUrl }}</a> a pour objet de fournir une information
            concernant l’ensemble des activités de la société.
          </p>
          <p>
            {{ clientName }} s’efforce de fournir sur le site <a href="/">{{ websiteUrl }}</a> des informations
            aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences
            dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p>
            Tous les informations indiquées sur le site <a href="/">{{ websiteUrl }}</a> sont données à titre
            indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site <a href="/">{{ websiteUrl }}</a>
            ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
          </p>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Limitations contractuelles sur les données techniques :</h2>
        <div>
          <p>Le site utilise la technologie JavaScript.</p>
          <p>
            Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site.
            De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas
            de virus et avec un navigateur de dernière génération mis-à-jour
          </p>
          <div />
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Propriété intellectuelle et contrefaçons :</h2>
        <div>
          <p>
            {{ clientName }} est propriétaire des droits de propriété intellectuelle ou détient les droits
            d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de
            tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
            interdite, sauf autorisation écrite préalable de : {{ clientName }}.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il
            contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément
            aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Limitations de responsabilité :</h2>
        <div>
          <p>
            {{ clientName }} ne pourra être tenue responsable des dommages directs et indirects
            causés au matériel de l’utilisateur, lors de l’accès au site <a href="/">{{ websiteUrl }}</a>, et résultant
            soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de
            l’apparition d’un bug ou d’une incompatibilité.
          </p>
          <p>
            {{ clientName }} ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché
            ou perte d’une chance) consécutifs à l’utilisation du site <a href="/">{{ websiteUrl }}</a>.
          </p>
          <p>
            Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. {{ clientName }} se réserve
            le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France,
            en particulier aux dispositions relatives à la protection des données. Le cas échéant, {{ clientName }} se réserve également la possibilité de mettre
            en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux,
            diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
          </p>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Gestion des données personnelles :</h2>
        <div>
          <p>
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978,
            la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
          </p>
          <p>
            A l'occasion de l'utilisation du site <a href="/">{{ websiteUrl }}</a>, peuvent
            êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site <a href="/">{{ websiteUrl }}</a>,
            le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
          </p>
          <p>
            En tout état de cause {{ clientName }} ne collecte des informations personnelles relatives à l'utilisateur
            que pour le besoin de certains services proposés par le site <a href="/">{{ websiteUrl }}</a>. L'utilisateur
            fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé
            à l'utilisateur du site <a href="/">{{ websiteUrl }}</a> l’obligation ou non de fournir ces informations.
          </p>
          <p>
            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés,
            tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite
            et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être
            envoyée.
          </p>
          <p>
            Aucune information personnelle de l'utilisateur du site <a href="/">{{ websiteUrl }}</a> n'est publiée à l'insu de
            l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de {{ clientName }} et de ses
            droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation
            et de modification des données vis à vis de l'utilisateur du site <a href="/">{{ websiteUrl }}</a>.
          </p>
          <p>Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles. .</p>
          <p>
            Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
            relative à la protection juridique des bases de données.
          </p>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Liens hypertextes et cookies :</h2>
        <div>
          <p>
            Le site <a href="/">{{ websiteUrl }}</a> contient un certain nombre de liens hypertextes vers d’autres
            sites, mis en place avec l’autorisation de {{ clientName }}. Cependant, {{ clientName }} n’a pas la possibilité de vérifier le contenu des sites
            ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
          </p>
          <p>
            La navigation sur le site <a href="/">{{ websiteUrl }}</a> est susceptible de provoquer l’installation
            de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’
            utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues
            visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
          </p>
          <p>
            Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer
            son ordinateur de la manière suivante, pour refuser l’installation des cookies :
          </p>
          <p>
            Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité
            et choisissez Bloquer tous les cookies. Validez sur Ok.
          </p>
          <p>
            Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée.
            Paramétrez les Règles de conservation sur :  utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour  désactiver les cookies.
          </p>
          <p>
            Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres.
            Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section
            "Cookies", vous pouvez bloquer les cookies.
          </p>
          <p>
            Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales).
            Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences.
            Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.
          </p>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Droit applicable et attribution de juridiction :</h2>
        <div>
          <p>
            Tout litige en relation avec l’utilisation du site <a href="/">{{ websiteUrl }}</a> est soumis au droit
            français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
          </p>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Les principales lois concernées :</h2>
        <div>
          <p>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</p>
          <p> Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
        </div>
      </div>
    </section>
    <section class="block">
      <div class="container ">
        <h2>Lexique :</h2>
        <div>
          <p>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
          <p>
            Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non,
            l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
          </p>
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
        websiteUrl: "le-dev-web.com",
        clientName: "LEBBRECHT Emeric",
        clientAddress: "16 rue de la charvaz, 73170 YENNE",
        publicationManager: "LEBBRECHT Emeric",
        webmaster: "LEBBRECHT Emeric",
        hosting: "OVH – 2 rue Kellermann - 59100 Roubaix - France"
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
/*-------------- Block ----------------*/
.block
  padding: 5rem 2rem
  .container
    flex-direction: column
    h2
      color: #2fa5fa
      font-size: 2.1rem
      padding-bottom: 2rem
    p
      font-size: 1.1rem  
    a
      display: inline-block
      text-decoration: none
      font-size: 1.1rem
      font-weight: 900
      color: #5b43a1
      height: 100%
      &:focus
        outline: none
      &:active
        color: #5b43a1
      &:hover
        transform: scale(1.1)
  &:nth-child(odd)
    flex-direction: column
    background: #2fa5fa
    padding: 15rem 2rem
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
      color: White
    p
      color: black
    a
      color: #b91ebd
      &:active
        color: #b91ebd
  &:last-child
    padding: 5rem 2rem 10rem 2rem
/*-------------- Block end ----------------*/
@media screen and (min-width: 360px)
  .title
    height: 400px
@media screen and (min-width: 411px)
  /*-------------- Title ----------------*/
  .title
    &:before
      background-position: bottom 0 left 100px
  /*-------------- Title end----------------*/
  /*-------------- Block ----------------*/
  .block
    padding: 5rem 4rem
    &:nth-child(odd)
      padding: 15rem 4rem
    &:last-child
      padding: 5rem 4rem 10rem 4rem
  /*-------------- Block end ----------------*/
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
  /*-------------- Block ----------------*/
  .block
    h2
      font-size: 3rem
    p
      font-size: 1.5rem
  /*-------------- Block end ----------------*/
@media screen and (min-width: 1380px)
  .title
    &:before
      background-position: bottom 0 left 400px
@media screen and (min-width: 1575px)
  .title
    &:before
      background-position: bottom 0 left 500px

</style>