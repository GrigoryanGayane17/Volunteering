import React from 'react';

function Footer(props) {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div style={{padding: '100px 30px'}} className={'col-lg-6 col-md-6 col-sm-12 section8-div1'}>
                    <h1 style={{
                        fontSize: '50px',
                        fontWeight: '800',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}>Contact Us</h1>
                    <div style={{fontSize: '20px'}}>
                        <div className={'section8-inputs-div1'}>
                            <div style={{width: '100%', margin: '20px'}}>
                                <p style={{marginBottom: '0'}}>Email </p>
                                <input className={'section8-input1'} placeholder={'Enter your Email'}
                                       type={'text'}/>
                            </div>
                            <div style={{width: '100%', margin: '20px'}}>
                                <p style={{marginBottom: '0'}}>Name </p>
                                <input className={'section8-input1'} placeholder={'Enter your name'} type={'text'}/>
                            </div>
                        </div>
                        <div style={{margin: '20px'}}>
                            <p style={{marginBottom: '0'}}>Phone </p>
                            <input className={'section8-input2'}
                                   placeholder={'Enter your phone (e.g. +14155552675)'} type={'text'}/>
                        </div>

                        <div style={{margin: '20px'}}>
                            <p style={{marginBottom: '0'}}>Message </p>
                            <textarea style={{height: '135px'}} className={'section8-input2'}></textarea>
                        </div>
                        <div>
                            <input type={'checkbox'}/>
                            <span
                                style={{marginLeft: '20px', fontSize: '20px'}}>I accept the Terms of Service</span>
                        </div>
                        <button className={'section8-btn'}>SUBMIT</button>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',padding:'100px 30px'}}
                     className={'col-lg-6 col-md-6 col-sm-12'}>
                    <div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <img style={{width: '116px', height: '116px'}}
                                 src={'https://cdn-icons-png.freepik.com/512/12643/12643041.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                        </div>
                        <h1 className={'section8-numbers'}>1 (234) 567-891</h1>
                        <h1 className={'section8-numbers'}>1 (234) 987-654</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;