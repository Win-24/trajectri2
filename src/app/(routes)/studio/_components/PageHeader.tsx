
import React, { ReactNode } from 'react'

const PageHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className='text-4xl'>{children}</h1>
    </div>
  )
}

export default PageHeader
