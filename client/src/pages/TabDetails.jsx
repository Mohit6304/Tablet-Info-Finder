import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { toast } from 'react-hot-toast';

const TabDetails = () => {
  const { user } = useContext(UserContext);
  const [tablet, setTablet] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [modifiedTablet, setModifiedTablet] = useState({
    name: '',
    activeIngredients: '',
    uses: '',
    sideEffects: '',
    estimatedCost: '',
  });

  useEffect(() => {
    const fetchTabletDetails = async () => {
      try {
        const response = await axios.get(`/tablet/${id}`);
        setTablet(response.data);
        // Set the initial values for the modified tablet
        setModifiedTablet(response.data);
      } catch (error) {
        console.error('Error fetching tablet details:', error);
      }
    };

    fetchTabletDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/tablet/delete/${id}`, { withCredentials: true });
      // Redirect the user to another page or update the UI as needed
      navigate('/tab');
      toast.success('Tablet deleted successfully!');
    } catch (error) {
      console.error('Error deleting tablet:', error);
      toast.error('Error deleting tablet!');
    }
  };

  const handleModify = () => {
    setIsEditing(true);
  };

  const handleSaveModification = async () => {
    try {
      // Send a request to update the tablet details
      await axios.put(`/tablet/update/${id}`, modifiedTablet, { withCredentials: true });
      setIsEditing(false);
      toast.success('Tablet modified successfully!');
    } catch (error) {
      console.error('Error modifying tablet:', error);
      toast.error('Error modifying tablet!');
    }
  };

  const handleCancelModification = () => {
    // Reset the modified tablet to the original tablet details
    setModifiedTablet(tablet);
    setIsEditing(false);
    toast('Modification cancelled!');
  };

  const handleInputChange = (e) => {
    // Update the modifiedTablet state when the user types in the form
    setModifiedTablet({ ...modifiedTablet, [e.target.name]: e.target.value });
  };

  if (!tablet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tablet.name} Details</h1>
      {isEditing ? (
        <div>
          {/* Form for editing tablet details */}
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={modifiedTablet.name}
            onChange={handleInputChange}
          />
          <label>Active Ingredients:</label>
            <input
                type="text"
                name="activeIngredients"
                value={modifiedTablet.activeIngredients}
                onChange={handleInputChange}
            />
            <label>Uses:</label>
            <input
                type="text"
                name="uses"
                value={modifiedTablet.uses}
                onChange={handleInputChange}
            />
            <label>Side Effects:</label>
            <input
                type="text"
                name="sideEffects"
                value={modifiedTablet.sideEffects}
                onChange={handleInputChange}
            />
            <label>Estimated Cost:</label>
            <input
                type="text"
                name="estimatedCost"
                value={modifiedTablet.estimatedCost}
                onChange={handleInputChange}
            />
            
          <button onClick={handleSaveModification}>Save</button>
          <button onClick={handleCancelModification}>Cancel</button>
        </div>
      ) : (
        <div>
          {/* Display tablet details */}
          <p>Active Ingredients: {tablet.activeIngredients}</p>
          <p>Uses: {tablet.uses}</p>
          <p>Side Effects: {tablet.sideEffects}</p>
          <p>Estimated Cost: {tablet.estimatedCost}</p>
        </div>
      )}

      {/* Buttons for modification and deletion */}
      {user && user.id === tablet.userId && (
        <div>
          {!isEditing && <button onClick={handleModify}>Modify</button>}
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TabDetails;
