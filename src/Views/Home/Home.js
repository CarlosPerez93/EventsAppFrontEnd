import React from "react";
import { LayoutMenu } from "../LayoutMenu/layoutMenu";
import { Carousel } from 'antd';
import "../Home/Home.css"

export class Home extends React.Component {

    render() {

        return (

            <div className="mainHome">
                <LayoutMenu className="Layout" />

                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>,

                
            </div>
        )
    }
}