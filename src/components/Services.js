import React from 'react'
import services1 from '../assets/services1.png'

const Services = () => {
  return (
    <section className="services">
      <div className="services__item">
        <img className="services__item--img" src={services1} alt="services" />
        <p className="services__item--p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          dignissimos, distinctio placeat hic odio, natus est quae reiciendis
          quis nobis iste quas optio provident nisi voluptas doloremque id magni
          saepe.
        </p>
      </div>
    </section>
  )
}
export default Services
