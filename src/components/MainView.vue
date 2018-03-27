<template>
    <div>
        <div class="wrapper" v-if="descriptionClicked">
        <input class="seekBar" type="text" placeholder="co chcesz wyszukać?" v-model="searchItem">
                <div class="container">
                    <div class="row">
                        <div class="item" @click="showDescription(item)" v-for="item in filteredItems" :key="item.id">
                            <img :src="item.image">
                            <div class="title">Title: {{ item.title }}</div>
                            <div class="author">Author: {{ item.author }}</div>
                            <div class="type">Media type: {{ item.type }}</div>
                            <div class="price">Price: {{ item.price }}</div>
                            <button @click='addToBasket(item)'>Add to Basket</button> </div>
                    </div>
                </div>
        </div>
        <div v-else>
                            <div class="clickedItem">
                            <img :src="clickedItem.image">
                            <div class="title">Title: {{ clickedItem.title }}</div>
                            <div class="author">Author: {{ clickedItem.author }}</div>
                            <div class="type">Media type: {{ clickedItem.type }}</div>
                            <div class="price">Price: {{ clickedItem.price }}</div>
                            <div class="price">Price: {{ clickedItem.description }}</div>
                            <button @click='addToBasket(clickedItem)'>Add to Basket</button> 
                            <button @click="showDescription(item)">Close</button> </div>

        </div>
        <basket :basket="basket"></basket>
    </div>
</template>
  


<script>
export default {
    props: ['basket'],
    data() {
        return {
            descriptionClicked: true,
            clickedItem: {},
            searchItem: "",
            myItems: [
                { id: 1, 
                author: 'Daniel Defoe',
                type: 'book', 
                title: 'Robinson Crusoe', 
                image: 'http://via.placeholder.com/200x100',
                description: 'Tempor adipisicing deserunt culpa commodo exercitation velit magna aliquip deserunt sunt labore id enim.',
                price: 29
                },
                { id: 2, 
                author: 'Mandaryna',
                type: 'cd', 
                title: 'Letnie Hity', 
                image: 'http://via.placeholder.com/200x100',
                description: 'Ipsum est pariatur consequat laboris voluptate consectetur elit nulla ut veniam voluptate est.',
                price: 10
                },
                { id: 3, 
                author: 'Scatman John',
                type: 'clip', 
                title: 'ski-ba-bop-ba-dop-bop', 
                image: 'http://via.placeholder.com/200x100',
                description: 'Aliqua ex consectetur enim consequat excepteur pariatur. Ipsum nisi qui laborum enim veniam deserunt ex in velit.',
                price: 40 
                },
                { id: 4,
                author: 'Michael Tiddes', 
                type: 'e-book', 
                title: '20 twarzy Blacka', 
                image: 'http://via.placeholder.com/200x100',
                description: 'Elit elit ad sunt veniam labore amet ad. Aliqua enim do pariatur velit officia in laborum cupidatat.',
                price: 5 
                },
                { id: 5, 
                author: 'Daniel Defoe',
                type: 'book', 
                title: 'Robinson Crusoe', 
                image: 'http://via.placeholder.com/200x100',
                description: 'Tempor adipisicing deserunt culpa commodo exercitation velit magna aliquip deserunt sunt labore id enim.',
                price: 29
                },
                { id: 6, 
                author: 'Mandaryna',
                type: 'cd', 
                title: 'Letnie Hity', 
                image: 'http://via.placeholder.com/200x100',
                description: 'Ipsum est pariatur consequat laboris voluptate consectetur elit nulla ut veniam voluptate est.',
                price: 10
                },
                { id: 7, 
                author: 'Scatman John',
                type: 'clip', 
                title: 'ski-ba-bop-ba-dop-bop', 
                image: 'http://via.placeholder.com/200x100',
                description: 'Aliqua ex consectetur enim consequat excepteur pariatur. Ipsum nisi qui laborum enim veniam deserunt ex in velit.',
                price: 40 
                },
                { id: 8,
                author: 'Michael Tiddes', 
                type: 'e-book', 
                title: '20 twarzy Blacka', 
                image: 'http://via.placeholder.com/200x100',
                description: 'Elit elit ad sunt veniam labore amet ad. Aliqua enim do pariatur velit officia in laborum cupidatat.',
                price: 5 
                },
            ],
        }
    },
    methods: {
        showDescription (item) {
            // var temp = this;
            // console.log(item)
            this.descriptionClicked = !this.descriptionClicked;
            return this.clickedItem = item

        },
        closeDescription: function() {
            this.descriptionClicked = !this.descriptionClicked
        },
        addToBasket: function(clickedItem) {
            console.log(clickedItem);
            this.basket = clickedItem;
        }
    },
    computed: {
        filteredItems: function() {
      var temp = this;
      return this.myItems.filter(function(it) {
        return it.title.toLowerCase().indexOf(temp.searchItem.toLowerCase())>=0;
      });
    }
    }
}
</script>

<style>
.seekBar {

    text-align:center
}
.clickedItem {
    text-align: center;
    margin: 2em;
    padding: 2em;
}
.item {
    margin: 10px;
}
.wrapper {
        margin: 1em;
        text-align:center
}
</style>
