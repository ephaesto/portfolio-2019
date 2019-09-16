<template>
  <svg viewBox="0 0 138 201" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path :class="{black: isBlack}" d="M98.1 117.1H67.7v12.6c-2.6-2.7-5.6-5-9-6.9-6.7-3.8-14.2-5.7-22.5-5.7H8v28.4l20.5 14.7v-25.5h7.7c6.7
       0 11.8 2.3 15.3 6.9 3.5 4.6 5.3 11.5 5.3 20.7v4.1c0 5-.5 9.3-1.6 13l12.5 9 .3.3 9.8-7.1 12.6-9v-37.8h7.7c6.7
        0 11.8 2.3 15.3 6.9 2.2 2.9 3.7 6.5 4.5 11.1l10.1-7.2v-17.4c-2.2-2-4.7-3.8-7.4-5.4-6.6-3.8-14.1-5.7-22.5-5.7zM8
         107.7h120V93.1L8 93zM114 67.4H90.5V44.8h20.3L68 14.1l-.3.3v53H28.3V42.6l-5.6 4.1h-.1L8 57.2V85h14.5v.1h90.9v.1H128V67.4z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Logo',
  props: {
      isBlack:{
        type: Boolean,
        default:false
      },
    },
}
</script>
<style lang="sass" scoped>
  path
    fill: white
    &.black
      fill: black
  
</style>

