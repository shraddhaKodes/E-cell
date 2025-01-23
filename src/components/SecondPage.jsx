import React from 'react';
import './SecondPage.css'; // Import the external CSS

const SecondPage = () => {
    const handleRedirect = () => {
        // Redirect to Instagram when button is clicked
        window.open("https://www.instagram.com/your-username", "_blank");
    };

    return (
        <div className="second-page-container">
            <div className="profile-container">
                {/* Profile Section */}
                <div className="text-center">
                    <div className="profile-image-wrapper">
                        <img 
                            src="src/assets/shraddha2.jpg" 
                            alt="Shraddha Kumari" 
                            className="profile-image"
                        />
                    </div>
                    <h1 className="profile-name">
                        Shraddha Kumari
                    </h1>
                    <p className="registration-number">
                        Registration Number: 20235081
                    </p>

                    <button 
                        className="instagram-button"
                        onClick={handleRedirect}
                    >
                        Go to Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;
