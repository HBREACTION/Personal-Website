import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className='row'>
                        <div className="col-10 mx-auto">
                            <div className='row'>

                           
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           <h1>{props.name}<strong className="brand-name">{props.strong}</strong></h1>

                           <div className="my-2 ">{props.desc}</div>
                           <div className="my-2 ">{props.desc1}</div>
                           <div className="my-2 ">{props.desc2}</div>                           
                           <div className="my-2 ">{props.desc3}</div>                           
                           <div className="my-2 ">{props.desc4}</div>                           
                           <div className="mt-3">
                            <NavLink to={props.visit} className='button-36'>{props.btnname}</NavLink>
                           </div>
                           <h5 className="mt-5 "><u>{props.random}</u></h5>
                           <div>{props.random1}</div>
                           <div>{props.random2}</div> 
                           <div>{props.random3}</div> 
                           <div>{props.random4}</div> 
                           <div>{props.random5}</div> 
                            </div>
                          
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc}className="img-fluid animated" alt='main img' />

                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;
