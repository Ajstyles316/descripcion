import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Edit2Icon } from './Edit2Icon.js';
import classes from './InformacionPlato.module.css';
import { Rectangle2Icon } from './Rectangle2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 688:4311 */
export const Frame97: FC<Props> = memo(function Frame97(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.salchipapa}>Salchipapa</div>
      <div className={classes.plato}>Plato</div>
      <div className={classes.detallesPrinicipales}>Detalles prinicipales</div>
      <div className={classes.ingredientes}>Ingredientes</div>
      <div className={classes.nombreDelPlato}>Nombre del plato</div>
      <div className={classes.salchipapa2}>Salchipapa</div>
      <div className={classes.papaSalchichaMayonesaKetchupMo}>
        <div className={classes.textBlock}>Papa, Salchicha, Mayonesa,</div>
        <div className={classes.textBlock2}>Ketchup, Mostaza</div>
      </div>
      <div className={classes.iDPlato}>ID Plato</div>
      <div className={classes._456567}>456567</div>
      <div className={classes.valorLimite}>Valor Limite</div>
      <div className={classes._12}>12</div>
      <div className={classes.line13}></div>
      <div className={classes.imagen}></div>
      <div className={classes.stockApertura}>Stock apertura</div>
      <div className={classes.stockRestante}>Stock Restante</div>
      <div className={classes.valorLimite2}>Valor Limite</div>
      <div className={classes._40}>40</div>
      <div className={classes._34}>34</div>
      <div className={classes._122}>12</div>
      <div className={classes.rectangle101}></div>
      <button className={classes.button}>
        
      </button>
      <div className={classes.rectangle2}>
        <Rectangle2Icon className={classes.icon2} />
      </div>
      <button className={classes.atras}>Atras</button>
    </div>
    
  );
});