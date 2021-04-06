import React from 'react';

const PicComponent = ({imgSrc}) => {
    return (
        <div>
            <img className="ui small image" src={imgSrc} alt="noImgSorry:D" style={{width: 300, height: 200}} />
        </div>
    );
};

export default PicComponent;