import * as z from "zod"

const orderSchema = z.object({
  email: z.email("phai la email"),
  username: z.string().min(4, "must 4 beyond").max(20, "must 20 belowF"),
  province_code: z.string().min(1),
  ward_code: z.string().min(1),
  address: z.string().min(1)
})

type OrderSchema = z.infer<typeof orderSchema>

export { type OrderSchema, orderSchema }
