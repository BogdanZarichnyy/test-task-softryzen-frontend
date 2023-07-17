import './App.scss';
import sprite from './images/sprite.svg';

function App() {
    return (
        <div class='container'>
            <div class='lh'>asuybuhqbuydhbw</div>
            {/* <svg className={classname}>
                <use id={iconname} href={`${sprite}#${iconname}`} />
            </svg> */}
            <svg class='logo'>
                <use id="logo" href={`${sprite}#logo`} />
            </svg>
            <svg class='' width="40px" height="36px">
                <use id="logo" href={`${sprite}#logo`} />
            </svg>
            <svg class='' width="13px" height="12px">
                <use id="worning" href={`${sprite}#worning`} />
            </svg>
            <svg class='' width="35px" height="35px">
                <use id="facebook" href={`${sprite}#facebook`} />
            </svg>
            <svg class='' width="35px" height="30px">
                <use id="twitter" href={`${sprite}#twitter`} />
            </svg>
            <svg class='' width="38px" height="27px">
                <use id="youtube" href={`${sprite}#youtube`} />
            </svg>
            <svg class='' width="31px" height="31px">
                <use id="linkedIn" href={`${sprite}#linkedIn`} />
            </svg>
        </div >
    );
}

export default App;
