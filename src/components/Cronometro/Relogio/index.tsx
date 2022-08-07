import React from "react";
import sytle from './relogio.module.scss';

interface Props {
    tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return (
        <>
            <span className={sytle.relogioNumero}>{minutoDezena}</span>
            <span className={sytle.relogioNumero}>{minutoUnidade}</span>
            <span className={sytle.relogioDivisao}>:</span>
            <span className={sytle.relogioNumero}>{segundoDezena}</span>
            <span className={sytle.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}