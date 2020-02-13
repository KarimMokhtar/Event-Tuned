import React from 'react'

const Location = () =>{
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.9127372486323!2d31.26187545255343!3d29.895614923929465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145849d604594fcd%3A0x862db45365941dc1!2zMjnCsDUzJzQ1LjIiTiAzMcKwMTUnNDMuOCJF!5e0!3m2!1sen!2seg!4v1581598392764!5m2!1sen!2seg" 
            width="100%" 
            height="500" 
            frameBorder="0" 
            allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location;