import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function About(props) {
    return (<div>
        <Header/>

        <div className={'container-fluid'}>
            <div className={'row'}>
                <div style={{backgroundColor: '#1f2544', display: 'flex', justifyContent: 'center'}}
                     className={'col-12 section1'}>
                    <img className={'section1-image'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/gdzrte.jpg'}/>
                    <div className={'section1-absolute-div'}>
                        <h1 style={{fontWeight: '800'}}>What is Group Psychotherapy?</h1>
                        <p style={{fontWeight: '500', lineHeight: '40px', fontSize: '20px'}}>
                            Group psychotherapy is a therapy format where individuals with similar issues come
                            together to share experiences and support each other under the guidance of a trained
                            therapist.</p>
                        <button className={'section1-btn'}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container-fluid'}>
            <div className={'row'}>
                <div style={{padding: '100px 50px 100px 50px'}}
                     className={'col-lg-5 col-md-12 col-sm-12 section2-img-div'}>
                    <img className={'section2-img'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/rse.jpg'}/>
                </div>
                <div style={{padding: '100px 0 100px 0 '}} className={'col-lg-7 col-md-12 col-sm-12'}>
                    <h1 className={'section2-texts-h2'}>About Us</h1>
                    <div className={'section2-texts-div'}>
                        <div style={{width: '300px'}}>
                            <p style={{fontSize: '20px', lineHeight: '40px', margin: '10px'}}>Teraphi is an
                                innovative company specializing in cutting-edge technology solutions designed to
                                improve health and wellness. With a focus on harnessing the power of digital tools,
                                Teraphi develops products and services aimed at enhancing the lives of individuals
                                through personalized care and data-driven insights. </p>
                        </div>
                        <div style={{width: '300px'}}>
                            <p style={{fontSize: '20px', lineHeight: '40px', margin: '10px'}}>Teraphi is committed to
                                improving accessibility to healthcare and making wellness more attainable for a broad
                                range of people. By leveraging artificial intelligence, wearable devices, and health
                                monitoring systems, Teraphi empowers users to take control of their physical and mental
                                well-being.</p>
                            <a href={'#'} className={'section2-texts-link'}>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className={'container-fluid'}>
            <div className={'row'}>
                <div style={{display: 'flex', justifyContent: 'center'}}
                     className={'col-12 section3'}>
                    <img className={'section3-image'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/eere.jpg'}/>
                    <div className={'section3-absolute-div'}>
                        <div className={'section3-square'}>
                            <h1 style={{fontWeight: '800', fontSize: '40px'}}>Find the best group therapy</h1>
                            <svg style={{marginTop: '50px'}} xmlns="http://www.w3.org/2000/svg" height="72px"
                                 viewBox="0 -960 960 960"
                                 width="72px" fill="#FFFFFF">
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                            </svg>
                        </div>
                        <div className={'section3-text-div'}
                             style={{minWidth: '200px', display: 'flex', alignItems: 'end', maxWidth: '500px'}}>
                            <div className={'section3-p-div'}>
                                <p className={'section3-p'}> Group therapy offers a safe
                                    space to share, learn, and grow together, guided by experienced professionals.
                                    Whether you’re dealing with stress, anxiety, depression, or other challenges, group
                                    therapy provides valuable insights and the opportunity to build meaningful
                                    connections.</p>
                                <button className={'section3-btn'}>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div className={'row'}>
                <div style={{padding: '100px 0 100px 0', display: 'flex', justifyContent: 'center'}}
                     className={'col-12'}>
                    <div style={{maxWidth: '900px', minWidth: '400px'}}>
                        <h1 style={{textAlign: 'center', fontSize: '45px', fontWeight: '700'}}>Online
                            Process-oriented Training
                            Groups</h1>
                        <p style={{textAlign: 'center', color: 'gray', fontSize: '20px',}}><em>Join our Online
                            Process-Oriented Training Groups to explore personal growth in a supportive, virtual space.
                            Work with experienced facilitators and connect with others to deepen self-awareness and
                            tackle challenges. </em></p>
                    </div>
                </div>
            </div>

            <div className={'row'}>
                <div style={{display: 'flex', justifyContent: 'center'}}
                     className={'col-lg-6 col-md-12 col-sm-12'}>
                    <div>
                        <div style={{display: 'flex', margin: '20px'}}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '90px',
                                height: '90px',
                                borderRadius: '50%',
                                backgroundColor: '#e8c8bd',
                                padding: '20px'
                            }}>
                                <img style={{width: '70px', height: '70px'}}
                                     src={'https://cdn-icons-png.freepik.com/512/903/903506.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                            </div>
                            <div style={{marginLeft: '20px'}}>
                                <h3 style={{fontWeight: '600'}}>Pre-Group Meetings</h3>
                                <p style={{color: 'gray', lineHeight: '40px', fontSize: '20px'}}>These sessions offer a
                                    chance to clarify expectations, set goals, and get to know fellow participants in a
                                    supportive environment.</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', margin: '20px'}}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '90px',
                                height: '90px',
                                borderRadius: '50%',
                                backgroundColor: '#e8c8bd',
                                padding: '20px'
                            }}>
                                <img style={{width: '50px', height: '50px'}}
                                     src={'https://cdn-icons-png.freepik.com/512/18451/18451088.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                            </div>
                            <div style={{marginLeft: '20px'}}>
                                <h3 style={{fontWeight: '600'}}>Definition and Benefits</h3>
                                <p style={{color: 'gray', lineHeight: '40px', fontSize: '20px'}}>Learn the definition
                                    and discover the benefits, including personal growth, skill development, and
                                    enhanced well-being.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}
                     className={'col-lg-6 col-md-12 col-sm-12'}>
                    <div>
                        <div style={{display: 'flex', margin: '20px'}}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '90px',
                                height: '90px',
                                borderRadius: '50%',
                                backgroundColor: '#e8c8bd',
                                padding: '20px'
                            }}>
                                <img style={{width: '70px', height: '70px'}}
                                     src={'https://cdn-icons-png.freepik.com/512/16906/16906467.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                            </div>
                            <div style={{marginLeft: '20px'}}>
                                <h3 style={{fontWeight: '600'}}>Professional Therapist</h3>
                                <p style={{color: 'gray', lineHeight: '40px', fontSize: '20px'}}>
                                    A Professional Therapist is a trained and experienced expert who provides guidance
                                    and support to individuals seeking help with mental, emotional, or behavioral
                                    challenges.</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', margin: '20px'}}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '90px',
                                height: '90px',
                                borderRadius: '50%',
                                backgroundColor: '#e8c8bd',
                                padding: '20px'
                            }}>
                                <img style={{width: '70px', height: '70px'}}
                                     src={'https://cdn-icons-png.freepik.com/512/11638/11638205.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                            </div>
                            <div style={{marginLeft: '20px'}}>
                                <h3 style={{fontWeight: '600'}}>New Training Group</h3>
                                <p style={{color: 'gray', lineHeight: '40px', fontSize: '20px'}}>Join our New Training
                                    Group to learn, grow, and connect in a supportive environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container-fluid'}>
            <div className={'row'}>
                <div style={{display: 'flex', justifyContent: 'center'}}
                     className={'col-12 section4'}>
                    <img className={'section4-image'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/fd.jpg'}/>
                    <div className={'section4-absolute-div1'}>
                        <div className={'section4-square1'}>
                            <h2 style={{fontWeight: '800'}}>Keys to great group therapy</h2>
                            <p style={{fontSize: '20px', lineHeight: '40px'}}>
                                The keys to great group therapy include trust, open communication, a supportive
                                environment, and skilled facilitation. These elements create a space where individuals
                                can share, learn, and heal together, fostering personal growth and connection.</p>
                        </div>
                    </div>

                    <div className={'section4-absolute-div2'}>
                        <div className={'section4-square2'}>

                        </div>
                    </div>

                    <div className={'section4-absolute-div3'}>
                        <div className={'section4-square3'}>
                            <h1 style={{fontSize: '40px', fontWeight: '800'}}>What We Do</h1>
                            <p style={{color: '#475386', fontSize: '25px', fontWeight: '500'}}><em>We provide high
                                quality ONLINE group therapy training for mental health
                                clinicians. Additionally, we offer ONLINE group therapy services to people</em></p>
                            <button className={'section4-btn'}>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div className={'row'}>

                <div style={{display: 'flex', justifyContent: 'center', padding: '100px 0 0 0', flexWrap: 'wrap'}}
                     className={'col-12'}>
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                        <div className={'section5-img-div'}>
                            <img className={'section5-img'}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/appointment-psychologist_144627-39504.jpg'}/>
                            <div className={'section5-absolute-div'}></div>
                        </div>
                        <div className={'section5-img-div'}>
                            <img className={'section5-img'}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/supportive-husband_23-2147990619.jpg'}/>
                            <div className={'section5-absolute-div'}></div>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                        <div className={'section5-img-div'}>
                            <img className={'section5-img'}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/therapist-with-couple_23-2147990611.jpg'}/>
                            <div className={'section5-absolute-div'}></div>
                        </div>
                        <div className={'section5-img-div'}>
                            <img className={'section5-img'}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/mid-shot-woman-therapist-with-clipboard_23-2148759113.jpg'}/>
                            <div className={'section5-absolute-div'}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <div style={{padding: '50px '}} className={'col-lg-5 col-md-12 col-sm-12'}>
                    <h1 style={{fontSize: '45px', fontWeight: '800'}}>Group Therapy vs. Support Group</h1>
                </div>
                <div style={{padding: '50px '}} className={'col-lg-7 col-md-12 col-sm-12'}>

                    <p style={{fontSize: '20px', fontWeight: '400', lineHeight: '40px'}}>
                        Group Therapy focuses on therapeutic techniques led by a licensed professional to address
                        emotional or psychological challenges. Support Groups, on the other hand, provide a space for
                        individuals with similar experiences to share and support each other. Both offer valuable
                        benefits, but therapy involves professional guidance, while support groups emphasize peer
                        connection.</p>
                </div>
            </div>
        </div>


        <div className={'container-fluid'}>
            <div className={'row'}>
                <div style={{display: 'flex', justifyContent: 'center'}}
                     className={'col-12 section6'}>
                    <img className={'section6-image'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/fdggg-min.jpg'}/>
                    <div className={'section6-absolute-div1'}>

                        <div className={'section6-square3'}>
                            <img style={{width: '423px', height: '541px', objectFit: 'cover'}}
                                 src={'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c0beab8ecace53ff85e7a9e6/mid-shot-woman-therapist-with-clipboard_23-2148759113.jpg'}/>
                        </div>

                        <div className={'section6-square1'}>
                            <h2 style={{fontWeight: '800', color: '#1f2544'}}>Affordable, private online
                                counseling</h2>
                            <p style={{fontSize: '20px', lineHeight: '40px'}}>Talk with a licensed, professional
                                therapist online</p>
                            <button className={'section6-btn'}>GET STARTED</button>
                        </div>
                    </div>

                    <div className={'section6-absolute-div2'}>
                        <div className={'section6-square2'}>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-12 section7'}>
                    <div className={'section7-absolute-div'}>
                        <h1 style={{fontSize: '50px', fontWeight: '800'}}>The Group Therapy</h1>
                        <p style={{fontSize: '20px', lineHeight: '40px',}}>The group therapy session is a
                            collaborative effort in which the therapist assumes
                            clinical responsibility for the group and its members. In a typical session, which lasts
                            about 75-90 minutes, members work to express their own problems, feelings, ideas and
                            reactions as freely and honestly as possible.</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>);
}

export default About;