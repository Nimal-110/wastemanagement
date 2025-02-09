"use client";

import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Calendar, MessageSquare, Award, User, Menu as MenuIcon, HomeIcon, CircleHelp } from "lucide-react";
import Card from "@/components/Card";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} className="h-full bg-white text-gray-900 p-4 shadow-xl rounded-r-xl">
        <Menu className="-mx-5">
          <MenuItem icon={<MenuIcon />} className="hover:bg-gray-200 p-2 rounded-lg transition" onClick={() => setCollapsed(!collapsed)} >Menu</MenuItem>
          <MenuItem icon={<HomeIcon />} className="hover:bg-gray-200 p-2 rounded-lg transition" href="/" >Home</MenuItem>
          <MenuItem icon={<Calendar />} className="hover:bg-gray-200 p-2 rounded-lg transition" href="/schedule">Schedule</MenuItem>
          <MenuItem icon={<MessageSquare />} className="hover:bg-gray-200 p-2 rounded-lg transition" href="/message">Messages</MenuItem>
          <MenuItem icon={<Award />} className="hover:bg-gray-200 p-2 rounded-lg transition" href="/rewards">Rewards</MenuItem>
          <MenuItem icon={<User />} className="hover:bg-gray-200 p-2 rounded-lg transition" href="/profile">Profile</MenuItem>
          <MenuItem icon={<CircleHelp />} className="hover:bg-gray-200 p-2 rounded-lg transition" href="/question">Ask Question</MenuItem>
        </Menu>
      
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">Welcome to Your Dashboard</h1>
        
        <div className="flex  flex-wrap gap-6 ">
          {/* AI Recommendation */}
          <Card title="AI Recommended Tutors" content="Find the best tutor based on your learning style." btnname="Find Tutor"/>
          <Card title="Next Session" content="Physics with Alex - Today at 5:00 PM" btnname="Join Session"/>
          <Card title="Your Rewards" content="You have 1200 points. Redeem them for discounts!" btnname="View Rewards"/>
        </div>
      </div>
    </div>
  );
}
