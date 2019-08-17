import React, {Component, Fragment} from 'react';
import Gallery from "react-grid-gallery";

import photos, { tagColor } from './GalleryDogSettings'

// Styles
import './GalleryDog.scss'

import PageTitle from "../PageTitle/PageTitle";

export default class GalleryDog extends Component {

    render() {
        return (
            <Fragment>
                <PageTitle title='Galerie' divider='divider-colored' />
                <Gallery images={ photos }  enableImageSelection={false} tagStyle={{color:'#FEBE51',
                                                                                    backgroundColor: 'rgba(0,0,0,0.65)',
                                                                                    padding: '0.2em 0.6em 0.3em',
                                                                                    borderRadius: '0.25em',
                                                                                    display: 'inline',
                                                                                    fontWeight: '600',
                                                                                    lineHeight: '1',
                                                                                    fontSize: '75%',
                                                                                    textAlign: 'center',
                                                                                    verticalAlign: 'baseline',
                                                                                    whiteSpace: 'nowrap'}} />
            </Fragment>
        );
    }
}
