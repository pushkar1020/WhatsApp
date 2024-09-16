import './Details.css';
import logo from '../logo.svg';

function Details() {
    return (
        <div>
            <form className="details-info">
                <div ClassName="mobile-number">
                    <label htmlFor="phone">Enter your Whatsapp number:</label>
                    <input type="tel" id="country-code" name="country-code" value='+91' disabled="true" />
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                    <p>Enter valid number to get QR ( Scan and Chat )</p>
                </div>
            </form>
            <div>
                <a rel="noreferrer" target="_blank" href="http://wa.me/919506844256"
                   className="chat-on-whatsapp-button"><img src={logo} className="App-logo" alt="logo" />Chat on
                    whatsapp</a>
            </div>
            <img src= 'https://api.qrserver.com/v1/create-qr-code/?data=https://api.whatsapp.com/send/?phone=95068442568&text&type=phone_number&app_absent=0'/>
        </div>
    );
}

export default Details;
