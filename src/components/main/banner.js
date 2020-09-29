import React, { Component } from 'react';
import {Link , Navlink} from 'react-router-dom';
import '../../public/scss/common.scss'
import '../../public/scss/banner.scss'

import * as constants from '../../constants/constants.js'

export default class Js_banner extends Component {
    
    constructor(props){
        super(props);
        this.bannerContent = constants.bannerContent;
        this.sub_bannerContent = constants.sub_bannerContent;
    }

    render() {
        return (
            <>
                <div className="banner__inner">
                    <div className="banner__img">
                        
                    </div>
                    <div className="banner__content">
                        <h2>
                            <span>
                                {
                                    this.bannerContent
                                }
                            </span>
                            {
                                this.sub_bannerContent
                            }
                        </h2>

                    </div>
                </div>
            </>
        )
    }
}