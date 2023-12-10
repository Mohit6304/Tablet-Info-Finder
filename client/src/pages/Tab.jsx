import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { toast } from 'react-hot-toast';
import './Tab.css';

const Tab = () => {
  const { user } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [tablets, setTablets] = useState([]);
  const [selectedTablet, setSelectedTablet] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTablet, setNewTablet] = useState({
    name: '',
    activeIngredients: '',
    uses: '',
    sideEffects: '',
    estimatedCost: '',
  });

  useEffect(() => {
    // Fetch tablets from the server
    axios
      .get('/tablet')
      .then((response) => setTablets(response.data))
      .catch((error) => console.error('Error fetching tablets:', error));
  }, []);

  const handleSearch = () => {
    // Implement search functionality if needed
    // You can filter the tablets array based on the searchTerm
  };

  const handleTabletSelect = (tablet) => {
    // Set the selected tablet for detailed view
    setSelectedTablet(tablet);
  };

  const handleAddTablet = () => {
    // Toggle the flag to show the add tablet form
    setIsAdding(!isAdding);
  };

  const handleInputChange = (e) => {
    // Update the newTablet state when the user types in the form
    setNewTablet({ ...newTablet, [e.target.name]: e.target.value });
  };

  const handleAddTabletSubmit = () => {
    // Send a request to add the new tablet to the server
    axios
      .post('/tablet/add', newTablet, { withCredentials: true })
      .then((response) => {
        setTablets([...tablets, response.data]);
        setIsAdding(false);
        setNewTablet({
          name: '',
          activeIngredients: '',
          uses: '',
          sideEffects: '',
          estimatedCost: '',
        });

        toast.success('Tablet added successfully!');
      })
      .catch((error) => {
        console.error('Error adding tablet:', error);
        toast.error('Error adding tablet!');
      });
  };

  return (
    <div className="tab-container">
      <h1 className="tab-heading">Tablets A-Z</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Tablet"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="tablet-list-container">
        {/* Tablet List */}
        {tablets.map((tablet) => (
          <div key={tablet._id}>
            <Link
              to={`/tablet/${tablet._id}`}
              onClick={() => handleTabletSelect(tablet)}
              className="tablet-link"
            >
              {tablet.name}
            </Link>
          </div>
        ))}
      </div>

      {isAdding && (
        <div className="add-tablet-container">
          {/* Add Tablet Form */}
          <h2>Add Tablet</h2>
          <form>
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={newTablet.name}
              onChange={handleInputChange}
              className="form-input"
            />
            {/* Add other input fields for tablet details */}
            <label className="form-label">Active Ingredients:</label>
            <input
              type="text"
              name="activeIngredients"
              value={newTablet.activeIngredients}
              onChange={handleInputChange}
              className="form-input"
            />
            <label className="form-label">Uses:</label>
            <input
              type="text"
              name="uses"
              value={newTablet.uses}
              onChange={handleInputChange}
              className="form-input"
            />
            <label className="form-label">Side Effects:</label>
            <input
              type="text"
              name="sideEffects"
              value={newTablet.sideEffects}
              onChange={handleInputChange}
              className="form-input"
            />
            <label className="form-label">Estimated Cost:</label>
            <input
              type="text"
              name="estimatedCost"
              value={newTablet.estimatedCost}
              onChange={handleInputChange}
              className="form-input"
            />

            <button
              type="button"
              onClick={handleAddTabletSubmit}
              className="submit-button"
            >
              Add Tablet
            </button>
          </form>
        </div>
      )}

      {selectedTablet && (
        <div className="detailed-tablet-container">
          {/* Detailed Tablet View */}
          <h2>{selectedTablet.name}</h2>
          <p>Active Ingredients: {selectedTablet.activeIngredients}</p>
          <p>Uses: {selectedTablet.uses}</p>
          <p>Side Effects: {selectedTablet.sideEffects}</p>
          <p>Estimated Cost: {selectedTablet.estimatedCost}</p>
        </div>
      )}

      {!isAdding && user && (
        <div className="user-actions-container">
          {/* Add, Delete, Modify Tablet Buttons */}
          <button onClick={handleAddTablet} className="add-tablet-button">
            Add Tablet
          </button>
        </div>
      )}
    </div>
  );
};

export default Tab