"use client"
import React from 'react'
import CountUp from 'react-countup';

function Conter() {
    return (
        <>
            <div className="container text-center achievements-section">
                <h2>Our <span>Achievements</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <div className="d-flex text-center justify-content-between total-record">
                    <div>
                        <b>+ <CountUp start={0} end={200} duration={10} delay={3} />M</b>
                        <p>Humans impacted</p>
                    </div>
                    <div>
                        <b><CountUp start={0} end={50} duration={10} delay={3} />k</b>
                        <p>Collaborators</p>
                    </div>
                    <div>
                        <b><CountUp start={0} end={370} duration={10} delay={3} />k</b>
                        <p>Assisted communities</p>
                    </div>
                    <div>
                        <b><CountUp start={0} end={100} duration={10} delay={3} />+</b>
                        <p>Donations</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conter