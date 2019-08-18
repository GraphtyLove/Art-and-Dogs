import React, {Component, Fragment} from 'react';

// Styles
import './Services.scss'

// Pictures
import imgBath from '../../assets/img/bain.png'
import imgTrimming from '../../assets/img/heart.png'
import imgScissors from '../../assets/img/scisso.png'
import imgPaw from '../../assets/img/paw.png'
import serviceDog from '../../assets/img/serviceDog.png'

// Components
import PageTitle from '../PageTitle/PageTitle'


export default class Services extends Component {
    render() {
        return (
            <Fragment>
                <main className='services-container'>
                    <div className=' colored-bg' />

                    <PageTitle title='Nos services' divider='divider-black' />

                    <div className='general-container'>
                    <section className='container-sub container-sub-left flex-center'>
                         <div className='box-center'>
                            <article className='article-left'>
                                <div className='services-txt'>
                                    <h3>Bains</h3>
                                    <p>Les bains sont inclus dans tous nos services sauf pour le trimming.</p>
                                </div>
                                <img src={imgBath} alt="Icône de bain" className='icone' />
                            </article>
                            <article className='article-left'>
                                <div className='services-txt'>
                                    <h3>Trimming</h3>
                                    <p>Une technique professionnelle pour le bien être de votre animal.</p>
                                </div>
                                <img src={imgTrimming} alt="Icône de trimming" className='icone' />
                            </article>
                        </div>
                    </section>
                    <img className='service-Dog' src={serviceDog} alt="chien"/>
                    <section className='container-sub container-sub-right flex-center'>
                        <div className='box-center'>
                            <article className='article-right'>
                                <img src={imgScissors} alt="Icône de ciseaux" className='icone' />
                                <div className='services-txt'>
                                    <h3>Coupes ciseaux</h3>
                                    <p>Coupes standards, coupes asiatiques, tonte.</p>
                                </div>
                            </article>
                            <article className='article-right'>
                                <img src={imgPaw} alt="Icône de patte" className='icone' />
                                <div className='services-txt'>
                                    <h3>Coupe d'ongles et nettoyage des coussinets</h3>
                                </div>
                            </article>
                        </div>
                    </section>
                    </div>
                </main>

            </Fragment>
        );
    }
}