import React from 'react';
import { useSelector } from "react-redux";

const LoadingComponent = () => {

    const loading = useSelector((state) => state.loading);

    return (
        <div>
            { loading === true && <div>
                <div className="ui segment" style={{width: 200,height:70, marginLeft: 480}}>
                    <div className="ui active inverted dimmer">
                        <div className="ui small text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            </div>}
        </div>
    );

};

export default LoadingComponent;