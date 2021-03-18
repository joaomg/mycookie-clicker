const { useState } = React

const CookieClicker = ({ onClickFunction }) => {
    const handleClick = () => {
        onClickFunction(1)
    }
    return <button onClick={handleClick} className="pure-button pure-button-primary">
        <i className="fas fa-cookie-bite xlarge"></i> Bite me ;-)
    </button >    
}

const Cookie = () => {
    const [clicks, setClicks] = useState(0)

    const clickCookie = click => {
        setClicks(clicks + click)
    }

    return (
        <div>
            <CookieClicker onClickFunction={clickCookie} />
            <br />
            <span>Click count: {clicks}</span>
        </div>
    )
}

ReactDOM.render(<Cookie />, document.getElementById('cookie'))