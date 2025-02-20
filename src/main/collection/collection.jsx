import './collection.css';
import pasta from '../../Images/pasta.png';

function Collection(){
    return<>
        <div className='collection-row'>
            <div className='collection-img'>
                <img src={pasta}></img>
            </div>
            <div className='collection-text'>
                <h2 className='collection-h2'>Pasta</h2>
                <p className='collection-p'>
                    There are over 600 types of pasta, and some have over 1300 names.<br/>
                    The three most popular kinds of pasta are penne, spaghetti, and macaroni.
                </p>
            </div>
        </div>
    </>
}

export default Collection;