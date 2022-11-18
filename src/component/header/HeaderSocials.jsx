import React from 'react'
import {SiLinkedin} from "react-icons/si"
import {FaGithubSquare} from "react-icons/fa"
import {SiHackerrank} from "react-icons/si"

const HeaderSocials = () => {
    return (
        <div className='headerSocials'>
            <a a href="https://www.linkedin.com/in/subhashis-patbandha-11859122b/" rel="noreferrer" target="_blank" > <SiLinkedin /></a>
            <a href="https://github.com/SubhashisPatbandha4" rel="noreferrer" target="_blank"><FaGithubSquare/></a>
            <a href="https://www.hackerrank.com/subhashispatban1" rel="noreferrer"target="_blank"><SiHackerrank/></a>
        </div >
    )
}

export default HeaderSocials