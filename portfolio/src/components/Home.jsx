import React from 'react'
import './style.css'

export const Home = () => {
    return (
        <div className="main content">
            <section className="home section">
                <div className="container">
                    <div className="row">
                        <div className="home-info">
                            <h3 className="hello">
                                Hola, mi nombre es
                                <span className="name"> Hermes Batres</span>
                            </h3>
                            <h3 className="my-profession">
                                Soy un
                                <span className="typing">Diseñador Web</span>
                            </h3>
                            <p>
                                Bienvenido a mi portafolio. Me encanta todo lo
                                relacionado con el mundo de la tecnología y el
                                desarrollo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
