<template>
    <div class="basket">
  <button  type="button" @click="basketShow">Koszyk</button>
  <div v-if="basketShowBool">
  <table>
  <tbody>
        <tr v-for="it in basket" :key="it.id">
        <td><img class="card-img-top" :src="it.image" :alt="it.image">  </td>
        <td>{{ it.title }}</td>
        <td>{{ it.author }}</td>
        <td>{{ it.price }}</td>
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
    color: white;
}
.clickedItem {
    margin: 0 auto;
    max-width: 300px;
}
</style>
