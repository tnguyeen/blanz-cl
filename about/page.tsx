"use client"

import React, { FormEvent } from "react"
import OrderForm from "./OrderForm"

const page = () => {
  const onSub = (e: FormEvent) => {
    e.preventDefault()
    console.log()
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <OrderForm />
    </div>
  )
}

export default page
