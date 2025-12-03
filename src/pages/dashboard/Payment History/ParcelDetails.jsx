const ParcelDetails = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[380px] shadow-lg">
        <h2 className="text-xl font-semibold text-center">Parcel Details</h2>
        <button
          type="button"
          onClick={closeModal}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default ParcelDetails;
