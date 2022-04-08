import React from 'react'
import Iphone from "../../images/iphone.png"

function MidBanner() {
  return (
      <>
        <div className='midbanner'>
            <div className='midbanner-info'>
                <h1>Vi finns i mobilen</h1>
                <h1>Ekologisk mat levererad - direkt till dig</h1>
                <p>Vi är en online restaurang med snabba leveranser. Hitta maten 
                du gillar och klicka hem den på bara några sekunder! Ladda gärna ner våran App!</p>
            </div>
            <div className='absolute midbanner-img'>
                <img src={Iphone} alt="" />
            </div>
        </div>
    </>
  )
}

export default MidBanner