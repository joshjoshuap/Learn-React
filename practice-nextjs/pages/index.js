import { Fragment } from "react";
import Link from 'next/link';

const HomePage = () => {
    return (
    <Fragment>
        <h1>Welcome</h1>
        <Link href='/users'> User List </Link>
    </Fragment>
    )
}

export default HomePage;

