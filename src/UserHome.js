import { useState, useEffect } from "react";
import { UserViewMenu } from "./UserViewMenu";
import UserNavbar from "./UserNavbar";
import { useDispatch } from "react-redux";
import { setMenuItems } from "./Store";
export const UserHome = () => {
const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const fetchMenuItems = async () => {
        try {
            const response = await fetch("http://localhost:8080/showusermenuitems", { method: "POST" });
            const text = await response.text();
            const data = JSON.parse(text.trim());
            dispatch(setMenuItems({menuItems:data.ans}));

            if (data.length > 0) {
                // setSelectedCategory(data[0].category_name);
            }
            console.log(data.ans);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };
    useEffect(() => {
        fetchMenuItems();
    }, []);
   
    

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        setUsername(storedUsername);
    }, []);
    return (
        <>
            <UserNavbar />
            <div className="alert alert-dark">
                Welcome {username}
            </div>


            <UserViewMenu />
        </>
    )
}