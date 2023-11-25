import React from "react";
import "./MyProfileStyles.css";
import foto from "../../assets/poto.jpeg";
export default function MyProfile() {
    return (
        <div className="myprofile">
            <div className="profile-parent">
                <div className="profile-details">
                    <h1>Rangga Ganupranowo Hadad</h1>
                    <p>Mahasiswa Teknik Komputer Universitas Diponegoro Semarang.</p>
                    <a href="https://www.instagram.com/ranggagph/?hl=en">
                        Hubungi Saya
                    </a>
                </div>
            </div>
            
            <div className="profile-picture">
                    <img src={foto} alt="" className="image-alya"/>
            </div>
        </div>

    )
}


