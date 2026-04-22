import React, { useEffect, useState } from 'react';
import useBrands from '../../hooks/useBrands';

const BrandModal = ({ open, brand, saving, onClose, onSave }) => {
  const [tenThuongHieu, setTenThuongHieu] = useState('');

  useEffect(() => {
    setTenThuongHieu(brand?.tenThuongHieu || '');
  }, [brand]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {brand?.idThuongHieu ? 'Sửa thương hiệu' : 'Thêm thương hiệu'}
          </h2>
          <button onClick={onClose} disabled={saving} className="px-2 py-1">
            ✕
          </button>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Tên thương hiệu</label>
          <input
            value={tenThuongHieu}
            onChange={(e) => setTenThuongHieu(e.target.value)}
            className="w-full rounded-lg border px-3 py-2"
            placeholder="VD: Dior"
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            disabled={saving}
            className="rounded-lg border px-4 py-2"
          >
            Hủy
          </button>
          <button
            onClick={() => onSave(tenThuongHieu.trim())}
            disabled={saving || !tenThuongHieu.trim()}
            className="rounded-lg bg-primary px-4 py-2 text-white"
          >
            {saving ? 'Đang lưu...' : 'Lưu'}
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminBrandsPage = () => {
  const {
    brands,
    loading,
    saving,
    error,
    isModalOpen,
    editingBrand,
    openModal,
    closeModal,
    saveBrand,
    deleteBrand,
    fetchBrands,
  } = useBrands();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchBrands}
          className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Thử lại
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl text-text-light dark:text-text-dark">
            Quản Lý Thương Hiệu
          </h1>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => openModal(null)}
              className="flex items-center justify-center gap-2 h-9 px-4 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary/90"
            >
              <span className="material-symbols-outlined text-base">add_circle</span>
              Thêm Thương Hiệu
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
          <table className="w-full text-sm">
            <thead className="border-b border-border-light dark:border-border-dark">
              <tr>
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Tên thương hiệu</th>
                <th className="text-left p-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((b) => (
                <tr key={b.idThuongHieu} className="border-b border-border-light dark:border-border-dark">
                  <td className="p-3">{b.idThuongHieu}</td>
                  <td className="p-3">{b.tenThuongHieu}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => openModal(b)}
                      disabled={saving}
                      className="rounded-md border px-3 py-1"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => deleteBrand(b.idThuongHieu)}
                      disabled={saving}
                      className="rounded-md border px-3 py-1 text-red-600"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}

              {brands.length === 0 && (
                <tr>
                  <td className="p-3" colSpan={3}>Chưa có thương hiệu.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <BrandModal
        open={isModalOpen}
        brand={editingBrand}
        saving={saving}
        onClose={closeModal}
        onSave={saveBrand}
      />
    </>
  );
};

export default AdminBrandsPage;