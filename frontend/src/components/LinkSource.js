import React from 'react'
import '../styles/LinkSource.css'

const LinkSource = () => {
  return (
    <div className='images-source'>
      <span>Images: </span> <br />
      <a
        href='https://de.freepik.com/vektoren-kostenlos/realistische-weisse-smartphone-vorder-und-rueckseite_6208029.htm#query=iphone%2015&position=25&from_view=search&track=ais'
        target='_blank'
        rel='noopener noreferrer'
      >
        Bild von pikisuperstar
      </a>{' '}
      auf Freepik
      <br />
      <a
        href='https://de.freepik.com/fotos-kostenlos/glaenzende-schwarze-kopfhoerer-reflektieren-goldene-nachtclublichter-die-von-ki-erzeugt-werden_40970146.htm#query=jbl%20tune&position=19&from_view=search&track=ais'
        target='_blank'
        rel='noopener noreferrer'
      >
        Bild von vecstock
      </a>{' '}
      auf Freepik
    </div>
  )
}

export default LinkSource
