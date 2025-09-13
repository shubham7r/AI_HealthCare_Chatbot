import React, { useState } from "react";
import LoginModal from "../auth/LoginModal";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 relative">
      {/* Avatar */}
      <img
        src="https://img.freepik.com/premium-photo/illustration-single-man-american-cartoon-art-style-images-with-ai-generated_545052-3009.jpg?w=740"
        alt="User"
        className="w-10 h-10 rounded-full cursor-pointer"
      />

      {/* Login Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition ease-in-out cursor-pointer"
      >
        Login
      </button>

      {open && <LoginModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default UserMenu;
