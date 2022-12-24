import React from 'react'
import {useNavigate} from "react-router-dom";

import {FundCard,Loader} from '../components'
import {loader} from '../assets'

const DisplayCampaigns = ({title, isLoading, campaigns}) => {
    const navigate = useNavigate();
    const handleNavigate = (campaign) =>{
        navigate(`/campaign-details/${campaign.title}`,{state:campaign})
    }
    return (
        <div>
            <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
                {title}: {campaigns.length}
            </h1>
            <div className="flex flex-wrap mt-[20px] gap-[26px]">
                {isLoading && <Loader/>}
                {!isLoading && campaigns.length === 0 && (
                    <p className="font-epilogue font-semibold text-[#ccc]
                         text-[14px] leading-[30px]">Not campaings yet</p>)}
                {!isLoading && campaigns.length > 0 && campaigns.map((campaign,index) => (
                    <FundCard
                        key={index}
                        {...campaign}
                        handleClick={()=>handleNavigate(campaign)}

                    />
                ))}
            </div>
        </div>
    );
};
export default DisplayCampaigns;