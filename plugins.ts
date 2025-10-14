export default ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "tainguyen.pham.133@gmail.com",
        defaultReplyTo: "tainguyen.pham.133@gmail.com",
        testAddress: "juliasedefdjian@strapi.io",
      },
    },
  },
  // ...
});
