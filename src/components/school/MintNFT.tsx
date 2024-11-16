import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const MintNFT = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>NFT Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Class</label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                <option value="">Choose a class...</option>
                <option value="math">Advanced Mathematics</option>
                <option value="physics">Physics</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Class Name</label>
              <Input placeholder="Enter class name" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="Enter subject" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea 
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Enter description"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>NFT Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">NFT Preview will appear here</p>
            </div>
            
            <Button className="w-full">
              Generate NFT
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              Note: Minting NFTs requires gas fees and may take a few minutes to process
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};