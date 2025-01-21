import React from 'react';
import Header from "../components/Header";
import '../assets/css/ourTeam.css'
import usersJson from '../assets/JSONS/users.json'
import Footer from "../components/Footer";

function OurTeam(props) {
    return (<div>
        <Header/>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 team-section1'}>
                    <img className={'team-section1-img'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/full-shot-people-sitting-chairs8967.jpg'}/>
                    <div className={'team-section1-absolute-div1'}></div>
                    <div className={'team-section1-absolute-div2'}>
                        <h1 className={'team-section1-absolute-div1-h1'}>Our Professional Team of Therapists</h1>
                        <p style={{fontSize: '20px', lineHeight: '40px'}}>Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        <button className={'team-section1-btn'}>learn more</button>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div style={{padding: '100px 0 0 0 '}} className={'row'}>
                <div style={{padding: '100px 0 0 0'}} className={'col-12'}>
                    <h1 style={{fontSize: '50px', fontWeight: '800', textAlign: 'center'}}>WHO WE ARE</h1>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div style={{padding: '100px 0'}} className={'row'}>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} className={'col-12'}>
                    <div style={{
                        backgroundColor: '#1f2645'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'white'}}>How we are unique</h3>
                        <p style={{fontSize: '20px', lineHeight: '40px', color: 'white'}}>We stand at the heart of a
                            global, purpose-driven, multi-sport ecosystem.</p>
                    </div>

                    <div style={{
                        backgroundColor: '#eacabd'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'black'}}>What we do</h3>
                        <p style={{fontSize: '20px', lineHeight: '40px', color: 'black'}}>We stand at the heart of a
                            global, purpose-driven, multi-sport ecosystem.</p>
                    </div>

                    <div style={{
                        backgroundColor: '#1f2645'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'white'}}>What we value</h3>
                        <p style={{fontSize: '20px', lineHeight: '40px', color: 'white'}}>Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.</p>
                    </div>

                    <div style={{
                        backgroundColor: '#eacabd'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'black'}}>People & Careers</h3>
                        <p style={{fontSize: '20px', lineHeight: '40px', color: 'black'}}>Excepteur sint occaecat
                            cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div className={'row'}>
                <div style={{padding:'0 20px 80px 20px'}} className={'col-12'}>
                    <h1 style={{fontSize: '50px', fontWeight: '800', textAlign: 'center'}}>Our Professional Team of
                        Therapists</h1>
                </div>
            </div>
        </div>


        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                        {usersJson.map((item) => (
                            <div style={{margin: '30px 40px'}} key={item.id}>

                                <div style={{
                                    backgroundColor: '#e8c8bd',
                                    width: '250px',
                                    height: '250px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <img style={{
                                        width: '238px',
                                        height: '238px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }} src={item.image}/>
                                </div>
                                <h4 style={{textAlign: 'center', fontWeight: '800', marginTop: '20px'}}>{item.name}</h4>
                                <p style={{textAlign: 'center', marginTop: '20px', fontSize: '20px'}}>{item.skill}</p>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{width: '19px', height: '19px', cursor: 'pointer', margin: '10px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/1077/1077092.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                    <img style={{width: '19px', height: '19px', cursor: 'pointer', margin: '10px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/717/717392.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                    <img style={{width: '19px', height: '19px', cursor: 'pointer', margin: '10px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/3800/3800046.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                </div>

                            </div>))}
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>);
}

export default OurTeam;