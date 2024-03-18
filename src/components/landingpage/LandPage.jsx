import React from 'react'
import Button from '../buttons/Button'
import Image1 from '../../assests/nouzimage1.svg'
import Imagepos from '../../assests/positiontop.svg'
import Imagebot from '../../assests/positionbot.svg'
import Plus from '../../assests/plus.svg'
import Location from '../../assests/location.svg'
import Lock from '../../assests/lockicon.svg'
import Chart from '../../assests/chart.svg'
import Setting from '../../assests/seticon.svg'
import Bigicon1 from '../../assests/installationBigicon.svg'
import Bigicon2 from '../../assests/maintainBigicon.svg'
import Bigicon3 from '../../assests/cleaningBigicon.svg'


function LandPage() {
    const Datas = [
        {
            dataicon: Lock,
            heading: 'New Solar Panels',
            text: 'Lorem ipsum lore magna aliqua. Ut enim ad minim veniam, quis nostrud veniam, quis nostrud '
        },
        {
            dataicon: Chart,
            heading: 'Regional Incentives',
            text: 'Lorem ipsum lore magna aliqua. Ut enim ad minim veniam, quis nostrud veniam, quis nostrud '
        },
        {
            dataicon: Setting,
            heading: 'Installation By Experts',
            text: 'Lorem ipsum lore magna aliqua. Ut enim ad minim veniam, quis nostrud veniam, quis nostrud '
        },
    ]


    const Value = [
        {
            headText: '10',
            icon: Plus,
            paraText: 'Years'
        },

        {
            headText: '954',
            icon: Plus,
            paraText: 'Projects'
        },

        {
            headText: '7',
            icon: Location,
            paraText: 'Locations'
        }

    ]

    const Services = [
        {
            imageUrl: Bigicon1,
            headheader: 'Installation',
            textservice: 'Lorem ipsum lore magna aliqua. Ut enim ad minim veniam, '
        },
        {
            imageUrl: Bigicon2,
            headheader: 'Maintenance',
            textservice: 'Lorem ipsum lore magna aliqua. Ut enim ad minim veniam, '
        },
        {
            imageUrl: Bigicon3,
            headheader: 'Cleaning',
            textservice: 'Lorem ipsum lore magna aliqua. Ut enim ad minim veniam, '
        },
    ]

    return (
        <div>
            <div className='flex pt-[30px] h-[650px]'>
                <div className='w-[55%] flex items-center'>
                    <div className='w-[520px]'>
                        <h1 className='text-[55px] font-[700]'>Switch To Green With Innovative Solar Panels</h1>
                        <p className='text-[20px] font-[300] w-[51]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dolorum laboriosam eos, ipsa maiores perferendis asperiores
                            error delectus inventore. Provident, reiciendis.
                        </p>
                        <div className='flex gap-[25px] py-6'>
                            <Button text='Get a Quote' className='secondary' />
                            <Button text='Call Us Now' className='primary' />
                        </div>
                        <div className='flex justify-between w-[250px]'>
                            {Value.map((Value, index) => {
                                return (
                                    <div key={index}>
                                        <div className='flex items-center'>
                                            <h1 className='text-[30px] font-[700]'> {Value.headText} </h1>
                                            <img src={Value.icon} alt="" />
                                        </div>
                                        <p className='text-'>{Value.paraText}</p>
                                    </div>
                                )
                            }

                            )}
                        </div>
                    </div>
                </div>
                <div className='w-[45%]' style={{ position: 'relative' }} >
                    <img className='h-[%] ' src={Image1} alt="" />
                    <img src={Imagepos} alt="" style={{ position: 'absolute', top: '-35px', left: '25%' }} />
                    <img src={Imagebot} alt="" style={{ position: 'absolute', bottom: '25px', left: '-100px' }} />
                </div>
            </div>

            <div className='flex py-[60px]'>
                <div className='w-full'>
                    <div className='backgroundImg w-[    %] h-full'>
                        {/* <img className='h-[] ' src={Image2} alt="" /> */}
                    </div>
                </div>
                <div>
                    <h2 className='text-[#1ADDBA] font-[700] text-[18px]'>SWITCH TO GREEN</h2>
                    <h1 className='text-[48px] py-3 font-[600]'>Switch To Green Energy Has Never Been Easier</h1>
                    <div className=''>
                        {Datas.map((Datas, index) => {
                            return (
                                <div key={index} className='flex gap-5 py-5'>
                                    <div className=' '>
                                        <img src={Datas.dataicon} alt="" className='bg-[#FFFFFF] bg-opacity-10 p-2 rounded-full text-[15px]' />
                                    </div>
                                    <div>
                                        <h3>{Datas.heading}</h3>
                                        <p>{Datas.text}</p>
                                    </div>
                                </div>
                            )
                        }

                        )}
                    </div>
                    <Button className='secondary' text='Try Now' />
                </div>
            </div>

            <div>
                <div className='text-center'>
                    <h2 className='text-[#1ADDBA] font-[700] text-[18px]'>SERVICES</h2>
                    <h1 className='text-[30px] py-1 font-[600]'> Our Services</h1>
                    <p className='w-[500px] mx-auto'>Lorem ipsum lore magna aliqua. Ut enim ad minim veniam, quis nostrud veniam, quis nostrud</p>
                </div>
                <div className='flex justify-evenly my-[60px]'>
                    {Services.map((Services, index) => {
                        return (
                            <div key={index} className='w-[200px] py-[25px] px-[20px] bg-[#1ADDBA] bg-opacity-10 text-center'>
                                <div className=''>
                                    <img src={Services.imageUrl} alt="" className='mx-auto ' />
                                    <h1 className='text-[18px] py-3 font-[700]'>{Services.headheader}</h1>
                                    <p className='text-[15px]'>{Services.textservice}</p>
                                </div>
                            </div>
                        )
                    }

                    )}
                </div>
            </div>
        </div>
    )
}

export default LandPage
