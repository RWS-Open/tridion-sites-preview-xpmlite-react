import logo from "../assets/rws-brand-icon2.png"
const TridionBar = () => {
    return (
        <nav id="tridion-bar" className="fixed-bottom" style={{ justifyContent: "space-between", padding:"10px 20px" }}>
            <div>
                <img src={logo} />
            </div>
            <div id="xpmlite">
            </div>
            
            <div style={{ display: "flex", alignItems: "center" }}>
                <span>Collaboration Tools:</span>
                <button>Channel</button>
                <button title='Comments'>Comments</button>
            </div>
        </nav>
    )
}

export default TridionBar