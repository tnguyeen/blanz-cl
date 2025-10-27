/**
 * A set of functions called "actions" for `cart`
 */

const classifyCode = (placesCodeQuery: string[]) => {
  const provinces = [];
  const wards = [];

  placesCodeQuery.forEach((code) => {
    const firstTwoChars = code.slice(0, 2);
    switch (firstTwoChars) {
      case "P-":
        provinces.push(code.slice(2));
        break;
      case "W-":
        wards.push(code.slice(2));
        break;
      default:
        break;
    }
  });

  return { provinces, wards };
};

export default {
  getCartItem: async (ctx) => {
    try {
      const placesCodeQuery: string[] = ctx.request.body.data.placesCodeQuery;

      const { provinces, wards } = classifyCode(placesCodeQuery);

      const provincesRes = provinces.length
        ? await strapi.db.query("api::province.province").findMany({
            where: { code: provinces },
            select: ["name", "code"],
          })
        : [];

      const wardsRes = wards.length
        ? await strapi.db.query("api::ward.ward").findMany({
            where: { ward_code: wards },
            select: ["name"],
          })
        : [];

      ctx.body = {
        data: [...provincesRes, ...wardsRes],
      };
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
    }
  },
};
