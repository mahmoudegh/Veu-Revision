const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/01-blue.png",
      inventory: 0,
      details: ["50% cotton", "30% wool", "20% polyster"],
      variants: [
        { id: 1234, color: "Green" },
        { id: 5678, color: "Blue" },
      ],
    };
  },
});
