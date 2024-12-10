import React from "react";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin-module">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin module! Use the options below to manage the art gallery.</p>
      
      <div className="admin-sections">
        {/* Section 1: Manage Artworks */}
        <div className="admin-section">
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Artworks"
          />
          <h3>Manage Artworks</h3>
          <p>Add, edit, or delete artworks in the gallery.</p>
          <button>Go to Artworks</button>
        </div>
        
        {/* Section 2: Manage Artists */}
        <div className="admin-section">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Artists"
          />
          <h3>Manage Artists</h3>
          <p>View and manage artists who contribute to the gallery.</p>
          <button>Go to Artists</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
