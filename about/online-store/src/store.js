
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.store({
  state: {
    cart: [],
    products: [
      {
        name: "Crewneck T-Shirt",
        id: 53362,
        price: 9.5,
        color: "white",
        size: "small",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash",
          additional: "Some colors feature different-colored yarns for a heathered effect."
        },
        images: [
          '53362-1.jpg',
          '53362-2.jpg',
          '53362-3.jpg',
        ]
      },
      {
        name: "Cardigan Sweater",
        id: 53363,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Sweaters",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53363-1.jpg',
          '53363-2.jpg',
          '53363-3.jpg',
          '53363-4.jpg',
          '53363-5.jpg',
        ]
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
});
