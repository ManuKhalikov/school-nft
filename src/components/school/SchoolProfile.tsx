import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SchoolProfile = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>School Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60"
                alt="School"
                className="w-32 h-32 rounded-lg object-cover"
              />
              <Button variant="secondary" size="sm" className="absolute bottom-2 right-2">
                Change
              </Button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">School Profile Settings</h2>
              <p className="text-gray-500">Update your school's information</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Display Name</label>
              <Input placeholder="Enter school name" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea 
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Enter school description"
              />
            </div>

            <Button>Update Profile</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};