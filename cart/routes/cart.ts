export default {
  routes: [
    {
      method: "POST",
      path: "/cart",
      handler: "cart.getCartItem",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
