import React, { Component } from 'react'

export default class about extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    <div class="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <h6>More about me</h6>
                        <p class="lead">
                            I am a passionate developer who is creative and self-driven. I love challenges and finding solutions for problems. I am passionate about mobile and web development and look to better myself as a developer daily. I am a musician and an amateur photographer and would like to think of myself as a creative.
                            My passion for tech started at a tender age as my father bought a PC home when I was around 8, I was incredibly fascinated by this device. Ever since I wondered how applications worked, at the age of 16 I installed Visual Studio on my computer with Visual Basic, and hence my love for programming was birthed. I started coding in 2012 and in 2014 got my first job doing the thing I love.     
                        </p>
                    </div>
                        <div className="col-lg-4 mr-auto">
                            <h6>How I keep my skills sharp</h6>
                            <p class="lead">
                                Youtube and StackOverflow are my friends. I do a lot of research when it comes to new technology and love watching webinars on new software and new IDE's such as Visual Studio and Rider. I have a subscription with Pluralsight and constantly devour videos from courses as well as purchase Udemy Courses on the regular.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
