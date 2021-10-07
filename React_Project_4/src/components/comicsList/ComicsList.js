import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const ComicsList = (props) => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 9) {
            ended = true;
        }

        setComicsList([...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setComicsEnded(ended);    
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {

            return (
                <li className = 'comics__item' key = {i}>
                    <Link to = {`/comics/${item.id}`}>
                        <img src = {item.thumbnail} alt = {item.title} className = 'comics__item-img'/>
                        <div className = 'comics__item-name'>{item.title}</div>
                        <div className = 'comics__item-price'>{item.price}</div>
                    </Link>
                </li>
            )
        });         

        return (
            <ul className = 'comics__grid'>
                {items}
            </ul>
        )
    }

    const items = renderItems(comicsList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className = 'comics__list'>
            {errorMessage}
            {spinner}
            {items}
            <button
                className = 'button button__main button__long'
                disabled = {newItemLoading}
                style = {{'display': comicsEnded ? 'none' : 'block'}}
                onClock = {() => onRequest(offset)}>
                    <div className = 'inner'> Load More </div>
            </button>
        </div>
    )
}

export default ComicsList;