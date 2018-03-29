<template>
    <div>
        <div class="wrapper" v-if="descriptionClicked">
        <input class="seekBar form-control" type="text" placeholder="wpisz szukany tytuł" v-model="searchItem">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="item card" v-for="item in filteredItems" :key="item.id">
                            <img class="card-img-top" @click="showDescription(item)" :src="item.image" :alt="item.image">
                            <div class="card-body">
                                <h5 class="title card-title">Tytuł: {{ item.title }}</h5>
                                <div class="author card-text">Autor: {{ item.author }}</div>
                                <div class="type card-text">Rodzaj nośnika: {{ item.type }}</div>
                                <div class="price card-text">Cena: {{ item.price }} PLN</div>
                                <button class="button btn btn-secondary" @click='addToBasket(item)'>Do koszyka</button> 
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div v-else>
            <div class="clickedItem">
                <img class="card-img-top" :src="clickedItem.image" :alt="clickedItem.image">
                <div class="title card-title">Tytuł: {{ clickedItem.title }}</div>
                <div class="author card-text">Autor: {{ clickedItem.author }}</div>
                <div class="type card-text">Rodzaj nośnika: {{ clickedItem.type }}</div>
                <div class="price card-text">Cena: {{ clickedItem.price }} PLN</div>
                <div class="description card-text">Opis: {{ clickedItem.description }}</div>
                <button class="btn btn-secondary" @click='addToBasket(clickedItem)'>Do koszyka</button> 
                <button class="btn btn-danger" @click="showDescription(item)">Zamknij</button>
            </div>

        </div>

        
        <basket :basket="basket"></basket>
    </div>
</template>
  


<script>
export default {
    props: ['basket'],
    data() {
        return {
            basketTemp: [],
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
            this.descriptionClicked = !this.descriptionClicked;
            return this.clickedItem = item

        },
        closeDescription: function() {
            this.descriptionClicked = !this.descriptionClicked
        },
        addToBasket: function(clickedItem) {
            
            this.basketTemp.push(clickedItem);
            return this.basket = this.basketTemp
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
    margin: 2px;
    padding: 2px;
}
.item {
    margin: 10px;
}
.wrapper {
    margin: 1em;
    text-align:center
}
.button {
    position: absolute;
    right: 62px;
    align-self: center;
    top: 274px;
}
.card {
    min-height: 320px;
    width: 15rem;
    border-radius: 15px;
}
.card:hover {
    background-color: grey;
}
.card-img-top {
    max-width: 300px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
</style>
