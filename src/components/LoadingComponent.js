import React from 'react';
import { useSelector } from "react-redux";

const LoadingComponent = () => {

    const loading = useSelector((state) => state.loading);

    return (
        <div>
            { loading === true && <div>
                <div class="ui segment" style={{width: 200,height:70, marginLeft: 480}}>
                    <div class="ui active inverted dimmer">
                        <div class="ui small text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            </div>}
        </div>
    );

};

export default LoadingComponent;