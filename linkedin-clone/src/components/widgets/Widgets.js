import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function Widgets() {
    const newsArticle = (headline, newssource, subtitle, readers ) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FormatListBulletedIcon />
            </div>
            <div className="widgets__articleright">
                <h4>{headline}</h4>
                <h5>{newssource}</h5>
                <p>{subtitle}</p>
                <h6>{`${readers} readers`}</h6>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn news</h2>
                <InfoIcon />
            </div>
            {newsArticle('Hyvinvointi / Työelämä', 'Helsingin Sanomat', 'Voiko työnantaja pakottaa lähitöihin? Entä etätöihin? Entä jos koronatilanne huolestuttaa? Työoikeuden professori vastaa kysymyksiin ja kertoo sopimusten sudenkuopista', '350,108')}
            {newsArticle('Covid-19', 'New York Times', 'The Delta Variant Is the Symptom of a Bigger Threat: Vaccine Refusal', '2.5M')}
            {newsArticle('Covid-19', 'BBC News', 'Fauci says US heading in wrong direction as cases rise', '1.8M')}
            {newsArticle('Tokyo Olympics 2020', 'BBC News', 'Bizarre false start as Brownlee competes in triathlon', '455,735')}
            {newsArticle('UK Weather', 'BBC News', 'Flooding in London after heavy rain', '5,619')}
        </div>
    )
}

export default Widgets;