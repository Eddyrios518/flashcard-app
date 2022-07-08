import { Link } from "react-router-dom";

function Breadcrumb({ deckId, deck }) {
    return (
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to='/'>
                        <i className='bi bi-house-door-fill'></i> Home
                    </Link>
                </li>
                <li className='breadcrumb-item'>
                    <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                    Add Card
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;