import React from 'react'

const OrdersList = async (): Promise<React.JSX.Element> => {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold">Orders</h1>
      <p className='text-gray-500'>Manage your Orders</p>
    </React.Fragment>
  )
}

export default OrdersList
