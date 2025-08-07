function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-1">MediBot</h3>
          <p>
            An AI-powered Health Assistant designed to provide insights using
            voice, text, and image input.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Disclaimer</h3>
          <p>
            This tool is for demo and educational use only.
            <br />
            It is not a substitute for professional medical advice, diagnosis,
            or treatment.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Contact & Tech</h3>
          <p>📧 support@medibot.ai</p>
          <p className="mt-1">
            🛠 Built with React, Flask, MongoDB, Tailwind, Whisper, and LLaMA.
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-6">
        © 2025 MediBot – All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
