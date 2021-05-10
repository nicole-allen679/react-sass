import React from 'react'
import services1 from '../assets/services1.png'
import services2 from '../assets/services2.png'
import services3 from '../assets/services3.jpeg'

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
      <div className="services__item">
        <img className="services__item--img" src={services2} alt="services" />
        <p className="services__item--p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          dignissimos, distinctio placeat hic odio, natus est quae reiciendis
          quis nobis iste quas optio provident nisi voluptas doloremque id magni
          saepe.
        </p>
      </div>
      <div className="services__item">
        <img className="services__item--img" src={services3} alt="services" />
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
