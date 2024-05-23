import { Link } from 'react-router-dom';

export default function MenuItem({ name, url }) {
    return <li>
        {url ? <Link to={url}>{name}</Link> : name}
    </li>
}