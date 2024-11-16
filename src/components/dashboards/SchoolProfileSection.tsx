import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ProfileSection = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-8">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-2xl font-semibold text-indigo-600">KA</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
            <p className="text-gray-500">Update your personal information</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Enter your full name"
                  defaultValue="Khusan Akhmedov"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10" 
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10" 
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Enter your location"
                />
              </div>
            </div>
          </div>

          <Button className="w-full">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;