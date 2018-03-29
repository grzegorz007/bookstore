<template>
    <div class="basket">
  <button  type="button" @click="basketShow">Koszyk</button>
  <div class="basketBody" v-if="basketShowBool">
  <table>
  <tbody>
        <tr v-for="it in basket" :key="it.id">
        <td><img class="card-img-top" :src="it.image" :alt="it.image">  </td>
        <td>{{ it.title }}</td>
        <td>{{ it.author }}</td>
        <td>{{ it.price }}</td>
        <td></td>
        </tr>
  </tbody>
  </table>
  {{ basket }}
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
          console.log(this.basket);



      }
    }
}
</script>
<style scoped>
.basketBody {
    padding: 10px;
}
.basket {
    position: fixed;
    top: 2em;
    right: 1em;
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
