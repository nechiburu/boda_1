import React, { Component } from 'react'
import Image from 'next/image'
import SectionTitle from '../../components/SectionTitle'
import vec1 from '/public/images/contact/1.png'
import vec2 from '/public/images/contact/2.png'

class RSVP extends Component {


    state = {
        name: '',
        email: '',
        address: '',
        meal: '',
        service: '',
        guest: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            address,
            service,
            meal,
            guest, error } = this.state;

        if (name === '') {
            error.name = "Por favor ingresa tu nombre";
        }
        if (email === '') {
            error.email = "Por favor ingresa tu correo";
        }
        if (address === '') {
            error.address = "Por favor ingresa tu dirección";
        }
        if (service === '') {
            error.service = "Por favor selecciona tu servicio";
        }
        if (guest === '') {
            error.guest = "Por favor selecciona el número de invitados";
        }
        if (meal === '') {
            error.meal = "Por favor selecciona tu cena";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.service === '' && error.address === '' && error.meal === '' && error.guest === '') {
            this.setState({
                name: '',
                email: '',
                address: '',
                meal: '',
                guest: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            address,
            service,
            guest,
            meal,
            error } = this.state;

        return(
            <section className="wpo-contact-section section-padding" id="RSVP">
                <div className="container">
                    <div className="wpo-contact-section-wrapper">
                        <div className="wpo-contact-form-area">
                            <SectionTitle topTitle={'Conozcámonos'} MainTitle={'Realiza una Consulta'}/>
                            <form onSubmit={this.subimtHandler} className="form">
                                <div className="row">
                                    <div>
                                        <div className="form-field">
                                            <input value={name} onChange={this.changeHandler} className="form-control" type="text" name="name" placeholder="Nombre"/>
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <input onChange={this.changeHandler} value={email} type="email" className="form-control" name="email" placeholder="Email"/>
                                            <p>{error.email ? error.email : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <input onChange={this.changeHandler} value={address} type="text" className="form-control" name="address" placeholder="Dirección"/>
                                            <p>{error.address ? error.address : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select name="service" className="form-control" value={service} onChange={this.changeHandler}>
                                            <option>Servicio</option>
                                            <option>Photography</option>
                                            <option>The Rehearsal Dinner</option>
                                            <option>The Afterparty</option>
                                            <option>Videographers</option>
                                            <option>Perfect Cake</option>
                                            <option>All Of The Above</option>
                                        </select>
                                        <p>{error.service ? error.service : ''}</p>
                                    </div>
                                    <div>
                                        <select name="guest" className="form-control" value={guest} onChange={this.changeHandler}>
                                            <option>Número de invitados</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                        </select>
                                        <p>{error.guest ? error.guest : ''}</p>
                                    </div>
                                    <div>
                                        <select name="meal" className="form-control last" value={meal} onChange={this.changeHandler}>
                                            <option>Cena deseada</option>
                                            <option>Chicken Soup</option>
                                            <option>Motton Kabab</option>
                                            <option>Chicken BBQ</option>
                                            <option>Mix Salad</option>
                                            <option>Beef Ribs </option>
                                        </select>
                                        <p>{error.meal ? error.meal : ''}</p>
                                    </div>
                                    <div className="submit-area">
                                        <div className="form-submit">
                                            <button type="submit" className="theme-btn-s3">Enviar Mensaje</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="border-style"></div>
                        </div>
                        <div className="vector-1">
                            <Image src={vec1} alt=""/>
                        </div>
                        <div className="vector-2">
                            <Image src={vec2} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  RSVP;