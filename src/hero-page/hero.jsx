import './hero.css';
import food from '../Images/food.png';
import Button from './button';

function Hero(){
    return<>
        <div className='hero'>
            <div className='hero-left'>
                <h1 className='hero-left-h1'>
                    From <span className='hero-left-span'>Kitchen</span> to <br/> your <span className='hero-left-span'>Heart</span>
                </h1>
                <p className='hero-left-p'>
                    Welcome to Site, where culinary delights meet doorstep convenience. Indulge in a seamless dining
                </p>
                <Button/>
            </div>
            <div className='hero-right'>
                <div className='hero-right-div'>
                    <div className='hero-right-div-circle'>
                        <img src={food} className='hero-right-img'></img>
                    </div>
                    <div className='hero-right-h3'>
                        <h3>Ja<span className='hero-right-span'>sss</span>Food</h3>
                    </div>
                 </div>
            </div>
        </div>
    </>
}

export default Hero;