import React from 'react';
import CardData from './CardData';
import Card from './Card';

const Services = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>My Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                CardData.map((val,index)=>{
                                    return(
                                        <Card key={index} imgsrc={val.imgsrc} title={val.title}/>
                                    );

                                })
                            }
{/* 
                            <Card title="first" btntext="something" matter="my mym blah blah" imgsrc={} />
                            <Card title="first" btntext="something" matter="my mym blah blah" imgsrc={} /> */}
                            </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Services;