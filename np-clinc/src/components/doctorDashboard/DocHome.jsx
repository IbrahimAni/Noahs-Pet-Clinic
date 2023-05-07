import React from 'react'
import ClientsInfo from './ClientsInfo'
import "../styles/doctorDashboard/DocHome.css"
import { useState, useEffect, useRef } from 'react'

function DocHome() {

    const percentBox = useRef(null)
    const percentValue = useRef(null)

    const [percentDone, setPercentDone] = useState("80")

    useEffect(() => {
        function PercentDisplay() {
            let progressStartValue = 0,
                progressEndValue = 70,
                speed = 10

            let progress = setInterval(() => {
                progressStartValue++
                if(percentValue.current) {
                    percentValue.current.textContent = `${progressStartValue}%`;
                }
                if (percentBox.current) {
                    percentBox.current.style.background = `conic-gradient(rgb(37, 150, 190) ${progressStartValue * 3.6}deg, #ededed 0deg)`
                }
                if(progressStartValue == progressEndValue) {
                    clearInterval(progress);
                }
            }, speed)
        }
        PercentDisplay()
    }, [])

  return (
    <div className='doc-home-main'>
        <h1>Good Morining Dr. Mukesh Ambani</h1>
        <div className='doc-home-main-inner'>
            <div className='left-doc-home'>
                <div className='appointment-time-left'>
                    <p>You next Appointment </p>
                    <div className='next-appointment-countdown'>
                        <span><p>12</p> :
                        <p>54</p> :
                        <p>12</p></span>
                    </div>
                </div>
                <div className='clinets-appoitnment-user-info'>
                    <p className='todays-client'>Today's Clients</p>
                    <div className='clients-appointment-user-inner'>
                        <ClientsInfo name= "Fernado Lorenzo"/>
                        <ClientsInfo name="Faerty Liamn"/>
                        <ClientsInfo name="Lakshmi Retty"/>
                        <ClientsInfo name="Kate Perry"/>
                        <ClientsInfo name="Lopez Iman"/>
                    </div>
                    
                </div>
            </div>
            <div className='right-doc-home'>
                <div className='percentage-done'>
                    <div className='progress-container'>
                        <div className='percentage-box' ref={percentBox}>
                            <p className='percentage-value' ref={percentValue}>0</p>
                        </div>
                    </div>
                </div>
                <div className='other-today-info'>
                    <div className='other-today-info-inner'>
                    <div>
                        <p>5</p>
                        <p>Appointments Today</p>
                    </div>
                    <div>
                        <p>2</p>
                        <p>Attended</p>
                    </div>
                    <div>
                        <p>0</p>
                        <p>Cancelled</p>
                    </div>
                    <div>
                        <p>1</p>
                        <p>Resheduled</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DocHome