import Style from './Sample.module.css';

const SampleCard = ({ samples }) => {

    return(
       <button className={Style.button}><div className={Style.sampleCard}>
            <h2 className={Style.heading}>{samples.question}</h2>
            <p className={Style.subHeading}> Get immediate AI generated response</p>
        </div>
        </button>
    )

}
export default SampleCard;