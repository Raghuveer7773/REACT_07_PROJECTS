import styles from './Navigation.module.css';
const Navigation = () => {
    console.log(styles);
    return <nav className= {`${styles.navigation} container`}>
        <div className="logo">
            <img src="public/images/Frame 2 1.png" alt="" />
        </div>

        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
};


export default Navigation;