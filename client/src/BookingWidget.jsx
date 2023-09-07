export default function BookingWidget(){
    return(
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-2xl text-center">
                Price:${place.price}/per Night
            </div>
            <div className="border rounded-2xl mt-4 mb-2">
                <div className="flex">
                    <div className="py-3 px-4 ">
                        <label>Check in : </label>
                        <input type="date"/>
                    </div>
                    <div className="py-3 px-4">
                        <label>Check out : </label>
                        <input type="number" value={""}/>
                    </div>
                </div>
                <div className="py-3 px-4 border-t">
                    <label>Number of guests</label>
                    <input type="number" value={1}/>
                </div>
            </div>
            <button className="primary">Book this place</button>    
        </div>
    )
}