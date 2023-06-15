import './noMatch.scss';
import {
    Link
  } from 'react-router-dom';

const NoMatch = () => {
    return (
        <section className='noMatch-container'>
            <p className='noMatch-container__heading'>404</p>
            <div className='noMatch-container__img'>
                <img src="/images/404.jpg" alt="Page404" />
            </div>
            <p className='noMatch-container__text'>Sorry, the page you are looking for is not found</p>
            <p className='noMatch-container__button'><Link className='noMatch-button' to='/'>Back to home page</Link></p>
        </section>
    );
}

export default NoMatch;