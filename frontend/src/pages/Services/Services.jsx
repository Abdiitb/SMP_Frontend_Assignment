import React from 'react'

function Services() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center my-10 gap-10">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="bg-amber-600">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lmeacademy.com%2F&psig=AOvVaw3QOtqWpyF4nOeGIZZFtbCo&ust=1747500104869000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDog6q3qI0DFQAAAAAdAAAAABAE"
            alt="Album"
           />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>

      </div>
    </div>
  )
}

export default Services
