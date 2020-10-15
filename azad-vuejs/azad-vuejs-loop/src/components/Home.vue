<template>
  <section class="azad-section azad-home">
    <div class="azad-container">
      <h2>Home and home right</h2>
      <p>Hi there i will be there in few minutes.</p>
      <form @submit.prevent="addItem">
        <input v-model="newItem"  placeholder="Insert food name...">
        {{newItem}}
      </form>
      <ul class="food-list">
        <li v-for="(item,id) in items" :key="id">
          <span>{{item.name}} -</span> <span> Tk. <input v-model="item.price"></span><button class="cross" @click="removeItem(id)">x</button>
        </li>
        <li><span>Total -</span> <span> Tk. {{total}}</span></li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      items: [
        {name:'Rice',price:12},
        {name:'Paddy',price:60},
        {name:'Tomato',price:100}
      ],
      newItem:''
    }
  },
  methods: {
    addItem(){
      this.items.push({
        name: this.newItem,
        price: 12
      });
      this.newItem = ''
    },
    removeItem(i){
      this.items.splice(i,1)
    }
  },
  computed:{
    total(){
      var total = 0;
      this.items.forEach(item => {
        total += parseFloat(item.price)
      })
      return total
    }
  }
}
</script>

<style lang="scss" scopped>
  .azad-home {
    text-align: left;
    background: #e3e3e3;
    padding: 2rem 0;

    ul {
      width: 350px;
      li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background:white;
        margin-bottom: 5px;
        span {
          background: tomato;
        }
        .cross {
          padding: 5px;
        }
      }
    }
  }
</style>