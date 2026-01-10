import { useState } from "react";
import { Navbar } from "@/components/NavbarStaff";

type AnnouncementTab = "GENERAL" | "STAFF" | "MEMORANDUM";

const tabs: AnnouncementTab[] = ["GENERAL", "STAFF", "MEMORANDUM"];

export const AnnouncementStaffDash: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AnnouncementTab>("GENERAL");

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
     
      {/* Navbar - Moved here for proper header placement */}
      <Navbar />

      {/* Tabs */}
      <div className="bg-white border-b flex justify-center gap-10 py-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 text-sm font-medium transition ${
              activeTab === tab
                ? "font-bold border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Placeholder */}
      <div className="max-w-4xl mx-auto py-6">
        {activeTab === "GENERAL" && (
          <div>General announcements content here.</div>
        )}

        {activeTab === "STAFF" && (
          <div>Staff announcements content here.</div>
        )}

        {activeTab === "MEMORANDUM" && (
          <div>Memorandum content here.</div>
        )}
      </div>
    </div>
  );
};