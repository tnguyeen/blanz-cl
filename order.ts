/**
 * order controller
 */

import { factories } from "@strapi/strapi";
import { sanitize } from "@strapi/utils";

export default factories.createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { request } = ctx;
    const { province_code, ward_code, email, username, address } = request.body.data; // dữ liệu JSON

    if (!ward_code || !province_code || !email || !username || !address) {
      ctx.throw(400, "everything is required");
      return;
    }

    const existingProvince = await strapi.db.query("api::province.province").findOne({
      where: { province_code },
    });
    const existingWard = await strapi.db.query("api::ward.ward").findOne({
      where: { ward_code },
    });

    if (!existingProvince || !existingWard) {
      ctx.throw(400, "khong cos tinh tp nay");
      return;
    }

    console.log(existingProvince.name, existingWard.name);

    strapi.plugins["email"].services.email.send({
      to: email,
      from: "tainguyen.pham.133@gmail.com",
      subject: "The Strapi Email feature worked successfully",
      text: "Hello world!",
      html: `<!DOCTYPE html> <html lang="vi"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Xác nhận đơn hàng</title> <style> body { margin: 0; padding: 0; font-family: "Helvetica", "Arial", sans-serif; background-color: #f5efe6; color: #000000; } .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); } .header { background-color: #2b8ac6; color: #ffffff; text-align: center; padding: 20px; } .header h1 { margin: 0; font-size: 22px; letter-spacing: 0.5px; } .content { padding: 20px 24px; } .content p { line-height: 1.6; font-size: 15px; margin-bottom: 16px; } .product-list { margin: 20px 0; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; } .product-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; } .product-item:last-child { border-bottom: none; } .product-name { font-weight: bold; } .product-price { color: #2b8ac6; font-weight: bold; } .total { text-align: right; font-size: 16px; margin-top: 10px; font-weight: bold; } .cta { text-align: center; margin: 30px 0; } .cta a { background-color: #2b8ac6; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; display: inline-block; font-weight: bold; } .cta a:hover { background-color: #2578ad; } .footer { background-color: #f5efe6; color: #000000; text-align: center; padding: 16px; font-size: 13px; border-top: 1px solid #ddd; } @media only screen and (max-width: 480px) { .container { border-radius: 0; box-shadow: none; } .content { padding: 16px; } .product-item { flex-direction: column; align-items: flex-start; } .product-price { margin-top: 4px; } .header h1 { font-size: 20px; } .cta a { width: 100%; padding: 14px 0; font-size: 16px; } } </style> </head> <body> <table role="presentation" width="100%"> <tr> <td align="center"> <div class="container"> <div class="header"> <h1>Xác nhận đơn hàng</h1> </div> <div class="content"> <p>Gửi <strong>{tên người dùng}</strong>,</p> <p> Cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi.<br /> Chúng tôi xin gửi lại thông tin đơn hàng, bạn vui lòng kiểm tra. Đơn hàng sẽ được giao trong khoảng <strong>3–5 ngày làm việc</strong>. </p> <div class="product-list"> <div class="product-item"> <span class="product-name">{Tên sản phẩm 1}</span> <span class="product-price">{Giá 1}</span> </div> <div class="product-item"> <span class="product-name">{Tên sản phẩm 2}</span> <span class="product-price">{Giá 2}</span> </div> <div class="product-item"> <span class="product-name">{Tên sản phẩm 3}</span> <span class="product-price">{Giá 3}</span> </div> </div> <div class="total">Tổng cộng: <span>{tổng tiền}</span></div> <div class="cta"> <a href="{link theo dõi đơn hàng}" target="_blank"> Theo dõi đơn hàng </a> </div> <p> Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua thông tin dưới đây: </p> <p style="margin-top: 8px; font-size: 14px"> {thông tin liên lạc của cửa hàng}<br /> Email: support@yourshop.com<br /> Hotline: 0123 456 789 </p> </div> <div class="footer">&copy; 2025 Your Shop — Mọi quyền được bảo lưu.</div> </div> </td> </tr> </table> </body> </html>`,
    });

    // strapi.plugins[email].service.email
  },
}));
