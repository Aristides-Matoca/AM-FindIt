import './Search.css'

export default function Search({title}) {
    return(
        <div className="bbb">
            <form action="">
                <input id='inp' type="text" name="" placeholder={title} />
                <input id='inp' type="submit" value="search" />
            </form>
        </div>
    )
}