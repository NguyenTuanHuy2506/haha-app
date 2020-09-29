import React, { Component } from 'react';
import {Link , Navlink} from 'react-router-dom';
import '../../public/scss/common.scss'
import '../../public/scss/banner.scss'

import * as constants from '../../constants/constants.js'

export default class Js_mainpage extends Component {

    constructor(props){
        super(props);
        this.list_banner = constants.list_banner;
        this.sub_bannerContent = constants.sub_bannerContent;
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="mainpage__inner flex-box">
                        {
                            this.list_banner.map((val)=>(
                                <div className="flex-box__item flex-box__item-3">
                                    <h5 className="title title-light normal-title mt-3">
                                        {
                                            val.title
                                        }
                                    </h5>

                                    {
                                        val.text.split('.').map((v, ind)=> (
                                            <>
                                            {
                                                ind!=val.text.split('.').length-1?<p className="text text-description">{v+'.'}</p>: ''}
                                            </>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </>
        )
    }

}