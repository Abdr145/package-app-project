import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PackageForm({ savePackage }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: 'Box',
    material: 'Cardboard',
    length: '',
    width: '',
    height: '',
    volume: '',
    weight: '',
    price: '',
    discount: '',
    variant: 'Standard'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePackage(formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Package</h2>
      <input name="name" placeholder="Package Name" value={formData.name} onChange={handleChange} required />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Box">Box</option>
        <option value="Bag">Bag</option>
        <option value="Container">Container</option>
        <option value="Barrel">Barrel</option>
      </select>
      <select name="material" value={formData.material} onChange={handleChange}>
        <option value="Cardboard">Cardboard</option>
        <option value="Plastic">Plastic</option>
        <option value="Glass">Glass</option>
        <option value="Metal">Metal</option>
      </select>
      <input name="length" placeholder="Length (cm)" value={formData.length} onChange={handleChange} required />
      <input name="width" placeholder="Width (cm)" value={formData.width} onChange={handleChange} required />
      <input name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} required />
      <input name="volume" placeholder="Volume (cm³)" value={formData.volume} onChange={handleChange} required />
      <input name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required />
      <input name="price" placeholder="Price ($)" value={formData.price} onChange={handleChange} required />
      <input name="discount" placeholder="Discount (%)" value={formData.discount} onChange={handleChange} />
      <select name="variant" value={formData.variant} onChange={handleChange}>
        <option value="Standard">Standard</option>
        <option value="Gift">Gift</option>
        <option value="Special">Special</option>
      </select>
      <button type="submit">Save Package</button>
    </form>
  );
}

export default PackageForm;
