import { SubmitHandler, useForm } from "react-hook-form"

import { OrderSchema, orderSchema } from "@/@type/OrderForm"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { orders, provinces, wards } from "@/strapi/strapiQuery"
import { API } from "@strapi/client"

const OrderForm = () => {
  const [listProvinces, setListProvinces] = useState<API.Document[]>([])
  const [listWards, setListWards] = useState<API.Document[]>([])
  const [provinceId, setProvinceId] = useState("")

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors }
  } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema)
  })

  const onProvinceChange = (value: string) => {
    setValue("province_code", value)
    setValue("ward_code", "")
    setProvinceId(value)
  }
  const onWardChange = (value: string) => {
    setValue("ward_code", value)
  }

  const onSubmit: SubmitHandler<OrderSchema> = async (data) => {
    console.log(data)
    await orders.create(data)
  }

  useEffect(() => {
    const getProvinces = async () => {
      const provinceRes = await provinces.find({
        pagination: {
          pageSize: 40
        }
      })
      setListProvinces(provinceRes.data)
    }

    getProvinces()
  }, [])

  useEffect(() => {
    const getWards = async () => {
      const wardsRes = await wards.find({
        filters: {
          province_code: { $contains: provinceId }
        },
        pagination: {
          pageSize: 200
        }
      })
      setListWards(wardsRes.data)
    }

    if (provinceId) getWards()
  }, [provinceId])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-100">
      {/* emali */}
      <Label htmlFor={register("email").name}>Email</Label>
      <Input {...register("email")} id={register("email").name} />
      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      {/* username */}
      <Label htmlFor={register("username").name}>username</Label>
      <Input {...register("username")} id={register("username").name} />
      {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username.message}</p>}
      {/* address */}
      <div className="flex justify-between items-center gap-3">
        <div className="space-y-2">
          <Label htmlFor={register("province_code").name}>province</Label>
          <Select onValueChange={onProvinceChange}>
            <SelectTrigger className="w-[180px]" id={register("province_code").name}>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              {listProvinces.map((province, index) => (
                <SelectItem value={String(province.province_code)} key={index}>
                  {province.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.province_code && (
            <p className="text-sm text-red-600 mt-1">{errors.province_code.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={register("ward_code").name}>ward</Label>
          <Select onValueChange={onWardChange}>
            <SelectTrigger className="w-[180px]" id={register("ward_code").name}>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              {listWards.map((ward, index) => (
                <SelectItem value={String(ward.ward_code)} key={index}>
                  {ward.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.ward_code && (
            <p className="text-sm text-red-600 mt-1">{errors.ward_code.message}</p>
          )}
        </div>
      </div>
      {/* address */}
      <Label htmlFor={register("address").name}>address</Label>
      <Input {...register("address")} id={register("address").name} />
      {errors.address && <p className="text-sm text-red-600 mt-1">{errors.address.message}</p>}

      {/*  */}
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default OrderForm
