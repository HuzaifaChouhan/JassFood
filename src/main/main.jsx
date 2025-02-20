import './main.css';
import CollectionBig from './collection/collectionBig';
import CollectionSmall from './collection/collectionSmall';

function Main(){
    // const Bigparagraph = `There are over 600 types of pasta, and some have over 1300 names.The three most popular kinds of pasta are penne, spaghetti, and macaroni.`
    return<>
        <main>
            <CollectionBig/>
            <CollectionSmall/>
            <CollectionBig/>
            <CollectionSmall/>
        </main>
    </>
}

export default Main;