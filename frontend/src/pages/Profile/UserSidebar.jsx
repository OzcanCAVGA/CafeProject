import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
const UserSidebar = () => {
    const { Logout } = useAuth()
    const handleLogout = () => {
        Logout()
    }
    return (
        <div className="bg-gray-800 m-3 rounded-lg text-white min-w-56 h-3/4 flex flex-col py-5">
            <h2 className="text-lg font-bold py-4 px-6">Kullanıcı Panelı</h2>
            <ul>
                <li className="px-6 py-3">
                    <Link to="account-settings">Hesap Ayarları</Link>
                </li>

                <li className="px-6 py-3">
                    <Link to="order-history">Geçmiş Siparişlerim</Link>
                </li>
                <li className="px-6 py-3">
                    <Link to="/" onClick={Logout}>Çıkış</Link>
                </li>
                {/* <li className="px-6 py-3">
            <Link to="/view-tatistics">İstatistikleri gör</Link>
        </li> */}
            </ul>
        </div>
    )
}

export default UserSidebar;
