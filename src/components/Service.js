import React from 'react';
import { Link, Switch, Route} from 'react-router-dom';
import PicComponent from './PicCompnent';

const imgUrls = [
    'https://images.ctfassets.net/t8zoy2hhffa5/7aWVGcMJDAh9MfoYWHWRne/e81e1f0ced613569b7790d7909dd4c62/43_NEU_TM_ZebrasXCorona-Visual_Blog.png?fit=fill&w=1200&h=630',
    'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
    'https://cdn.mos.cms.futurecdn.net/YB6aQqKZBVjtt3PuDSkJKe.jpg'
]

const Service = () => {

    return (
    <div>
        <h1 style={{marginLeft: 500,marginTop: 20}}> React routing page.. </h1>

        <br/>
        <div style={{marginLeft: 400}}>
            <p> Change the photo: </p>
            <ul>
                <li><Link to={'/Service/'}>Zebra</Link></li>
                <li><Link to={'/Service/Zirafa'}>Zirafa</Link></li>
                <li><Link to={'/Service/Tigar'}>Tigar</Link></li>
            </ul>
        </div>
        
          
        <div className="ui padded container segment" style={{width: 350, height: 250}}>
            <Switch>
                <Route exact path="/Service/" render={ (props) => <PicComponent imgSrc={imgUrls[0]}/>} />
                <Route exact path="/Service/Zirafa" component={ (props) => <PicComponent imgSrc={imgUrls[1]}/>} />
                <Route exact path="/Service/Tigar" component={(props) => <PicComponent imgSrc={imgUrls[2]} />} />
            </Switch>
        </div>
       
    </div>);
}

export default Service;