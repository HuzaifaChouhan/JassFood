import './collectionBig.css';
import chicken from '../../Images/chicken.png';

function CollectionBig(props){
    return<>
        <div className='collection-big-row'>
            <div className='collection-big-curve'>
                <div className='collection-big-img'>
                    <img src={chicken}></img>
                </div>
                <div className='collection-big-text'>
                    <h2 className='collection-big-h2'>
                        {props.bigh2}
                        Pasta
                    </h2>
                    <p className='collection-big-p'>
                        {props.bigp}
                        There are over 600 types of pasta, and some have over 1300 names.<br/>
                        The three most popular kinds of pasta are penne, spaghetti, and macaroni.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default CollectionBig;