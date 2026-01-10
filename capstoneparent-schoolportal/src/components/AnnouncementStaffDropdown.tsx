export const AnnouncementStaffDropdown = () => {
  return (
    <div className="absolute mt-2 w-48 bg-[var(--navbar-bg)] border border-gray-200 rounded-md shadow-lg z-10">
      <a
        href="#"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        General
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Staff
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Memorandum
      </a>
    </div>
  );
};