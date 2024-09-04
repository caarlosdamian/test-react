import React, { useEffect } from 'react';

export const Prueba = ({name}:{name:string}) => {
  useEffect(() => {
    console.log('Este componente se esta montando&&&&&&&');

    return () => {
      console.log('Esto se ejecuta solo cuando se desmonta');
    };
  }, [name]); // al incio y al final y cuando cambia la dependecia

  useEffect(() => {
    console.log('Este componente se esta montando++');

    return () => {
      console.log('Esto se ejecuta solo cuando se desmonta');
    };
  }, []); // al incio y al final 

  useEffect(() => {
    console.log('Este componente se esta montando====');

    return () => {
      console.log('Esto se ejecuta solo cuando se desmonta');
    };
  }); // al inicio al final y cuando un estado cambio 



  return <div>Prueba</div>;
};
