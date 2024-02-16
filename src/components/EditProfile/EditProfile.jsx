import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/reducers/UserSlice.js';

function EditProfile() {
    const { token, firstName, lastName } = useSelector(state => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [tempFirstName, setTempFirstName] = useState(firstName);
    const [tempLastName, setTempLastName] = useState(lastName);
    const dispatch = useDispatch();

    const handleSave = async () => {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: 'PUT',
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName: tempFirstName, lastName: tempLastName })
            }
        );
        if (response.ok) {
            setIsEditing(false);
            console.log("Profile updated");
            setIsConfirmed(true);
            console.log("isConfirmed", isConfirmed);
            console.log("Tpken : →", token);

            const userResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            const userData = await userResponse.json();
            console.log('yolomodifactu', userData)
            dispatch(updateUser(userData.body))
        }
    };

    return (
        <>
            {isEditing ? (
                <div className={"edit-profile"}>
                    <div>
                        <input type="text" value={tempFirstName} onChange={e => setTempFirstName(e.target.value)} placeholder={firstName}/>
                        <input type="text" value={tempLastName} onChange={e => setTempLastName(e.target.value)} placeholder={lastName}/>
                    </div>
                    <div>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>

            ) : (
                <button onClick={() => {setIsEditing(true); setIsConfirmed(false);}}>{isConfirmed ? "Change confirmed" : "Edit Name"}</button>
            )}
        </>
    );
}

export default EditProfile;