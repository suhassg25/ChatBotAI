import Style from './Sample.module.css';

const SampleCard = ({ samples, handler }) => {

    return(
       <button className={Style.button} onClick={()=>handler(samples)} ><div className={Style.sampleCard}>
            <h2 id='question' className={Style.heading}>{samples.question}</h2>
            <p className={Style.subHeading}> Get immediate AI generated response</p>
        </div>
        </button>
    )

}
export default SampleCard;