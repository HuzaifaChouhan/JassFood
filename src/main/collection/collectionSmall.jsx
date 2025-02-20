import './collectionSmall.css';
import pasta from '../../Images/pasta.png';

function CollectionSmall(props){
    return<>
        <div className='collection-small-row'>
            <div className='collection-small-curve'>
                <div className='collection-small-text'>
                    <h2 className='collection-small-h2'>
                        {props.smallh2}
                        Pasta
                    </h2>
                    <p className='collection-small-p'>
                        {props.smallp}
                        There are over 600 types of pasta, and some have over 1300 names.<br/>
                        The three most popular kinds of pasta are penne, spaghetti, and macaroni.
                    </p>
                </div>
                <div className='collection-small-img'>
                    <img src={pasta}>
                        {props.smallimg}
                    </img>
                </div>
            </div>
        </div>
    </>
}

export default CollectionSmall;