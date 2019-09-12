<template>
  <v-container fluid fill-height>
    <v-layout align-center>
      <v-flex text-xs-center>
        <h1 class="display-2 primary--text pt-5">
          Oops, erreur {{ error.statusCode }}
        </h1>
        <p v-if="error.statusCode === 404" class="headline">
          La page n'existe pas !!!
        </p>
        <p v-else class="headline">
          Une erreur inattendue est survenue !!!
        </p>
        <v-btn
          to="/"
          color="secondary"
          large="true"
        >
          Retournez à l'accueil
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>