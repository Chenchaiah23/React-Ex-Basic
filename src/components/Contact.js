
const Contact = () => {
    return(
        <>
            <div>
            <h1 className="font-bold m-2">Contact us page</h1>
            <form>
                <input type="text" className="border border-black m-2" placeholder="Name"/>
                <input type="text" className="border border-black m-2" placeholder="Message"/>
                <button className="border border-black m-2 px-2 bg-green-200">Submit</button>
            </form>
        </div>
        </>
        
    )
}

export default Contact;