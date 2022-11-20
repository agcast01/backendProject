import { useState} from "react";
import * as spotActions from '../../store/spot';
import { useDispatch} from "react-redux";


const EditSpotForm = ({isOpen, setOpen, spot}) => {
    const dispatch = useDispatch()



    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        spot.address = address;
        spot.city = city;
        spot.state = state;
        spot.country = country;
        spot.lat = lat;
        spot.lng = lng;
        spot.name = name;
        spot.description = description;
        spot.price = price;

        dispatch(spotActions.edit(spot))
        
        setOpen(!isOpen)
    }
    return (
        <>  
            <div className="modal_background" />
            <form onSubmit={handleSubmit} className='modal'>
                <label>Address
                <input
                placeholder={spot.address}
                required
                value={address || spot.address}
                onChange={e => setAddress(e.target.value)}
                /></label>
                <label>City
                <input
                placeholder={spot.city}
                required
                value={city || spot.city}
                onChange={e => setCity(e.target.value)}
                /></label>
                <label>State
                <input
                placeholder={spot.state}
                required
                value={state || spot.state}
                onChange={e => setState(e.target.value)}
                /></label>
                <label>Country
                <input
                placeholder={spot.country}
                required
                value={country || spot.country}
                onChange={e => setCountry(e.target.value)}
                /></label>
                <label>Name
                <input
                    type="text"
                    required
                    placeholder={spot.name}
                    value={name || spot.name}
                    onChange={e => setName(e.target.value)}
                /></label>
                <label>Description
                <textarea
                    required
                    placeholder={spot.description}
                    value={description || spot.description}
                    onChange={e => setDescription(e.target.value)}
                /></label>
                <label>Price
                <input 
                    type='number'
                    required
                    value={price || spot.price}
                    onChange={e => setPrice(e.target.value)}
                /></label>
                <button type="submit">Edit spot</button>
                <button onClick={() => setOpen(!isOpen)}>Cancel</button>
            </form>
        </>
    )
}

export default EditSpotForm;
