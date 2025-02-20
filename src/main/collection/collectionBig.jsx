import './collectionBig.css';
import pasta from '../../Images/pasta.png';

function CollectionBig(props){
    return<>
        <div className='collection-big-row'>
            <div className='collection-big-img'>
                <img src={pasta}></img>
            </div>
            <div className='collection-big-text'>
                <h2 className='collection-big-h2'>
                    {props.bigh2}
                    Pasta
                </h2>
                <p className='collection-big-p'>
                    {props.bigp}
                </p>
            </div>
        </div>
    </>
}

export default CollectionBig;