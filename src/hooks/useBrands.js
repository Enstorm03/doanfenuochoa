import { useEffect, useState } from 'react';
import api from '../services/api';

const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await api.getBrands(); // GET /api/catalog/thuong-hieu
      setBrands(data || []);
    } catch (err) {
      setError(err?.message || 'Không thể tải thương hiệu');
    } finally {
      setLoading(false);
    }
  };

  const openModal = (brand = null) => {
    setEditingBrand(brand);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingBrand(null);
  };

  const saveBrand = async (tenThuongHieu) => {
    const payload = { tenThuongHieu };

    try {
      setSaving(true);
      if (editingBrand?.idThuongHieu) {
        await api.updateBrand(editingBrand.idThuongHieu, payload);
      } else {
        await api.createBrand(payload);
      }
      closeModal();
      await fetchBrands();
    } finally {
      setSaving(false);
    }
  };

  const deleteBrand = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa thương hiệu này?')) return;

    try {
      setSaving(true);
      await api.deleteBrand(id);
      await fetchBrands();
    } finally {
      setSaving(false);
    }
  };

  return {
    brands,
    loading,
    saving,
    error,
    isModalOpen,
    editingBrand,
    fetchBrands,
    openModal,
    closeModal,
    saveBrand,
    deleteBrand,
  };
};

export default useBrands;