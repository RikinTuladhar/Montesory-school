import React from 'react'

const Container = ({ children ,className}) => {
  console.log('Container component rendered with children:', children);
  return (
    <section className={`${className} w-full px-10  bg-background`}>
      {children}
    </section>
  )
}

export default Container
