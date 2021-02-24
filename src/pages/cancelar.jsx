import React from 'react';
import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';
import { Link } from 'gatsby';

export default function cancelar() {
    return (
        <div>
            <SEO title="Compra cancelada"/>
            <Purchase>
                <h1>Su compra ah sido cancelada</h1>
                <p>No tiene el dinero suficiente</p>
                <span role='img' aria-label='emoji'>💔</span>
                <Link to="/">
                    <Button>Volver al Catálogo</Button>
                </Link>
            </Purchase>
        </div>
    )
}
