<template>
    <div class="basket">
  <button  type="button" @click="basketShow">Basket</button>
  <div v-if="basketShowBool"><p>To jest koszyk!</p>
  <table>
  <tbody>
      <tr v-for="it in this.basket" :key="it.title">
      <td>{{ it.title }}</td>
      <!-- <td>Column2</td>
      <td>Column3</td> -->
      </tr>
  </tbody>
  </table>
  </div>
  </div>
</template>
<script>

export default {
        props: ['basket'],
    data() {
      return{
          basketShowBool: false
      }
    },
    methods: {
      basketShow: function() {
          this.basketShowBool = !this.basketShowBool;
          console.log("Koszyk działa!");
          console.log(this.basket.author);


      }
    }
}
</script>
<style>
.basket {
    position: fixed;
    top: 0em;
    right: 0em;
    text-align: right;
    z-index: 1;
    background-color: grey;
}
</style>
