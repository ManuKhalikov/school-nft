import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface NFTCardProps {
  imageUrl: string;
  title: string;
  date: string;
  instructors: Array<{ name: string; avatar: string }>;
}

const NFTCard = ({ imageUrl, title, date, instructors }: NFTCardProps) => (
  <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-200">
    <div className="relative aspect-square">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-white/80 text-sm">{date}</p>
      </div>
    </div>
    <div className="p-4 border-t border-gray-100">
      <div className="flex items-center space-x-2">
        <div className="flex -space-x-2">
          {instructors.map((instructor, i) => (
            <img
              key={i}
              src={instructor.avatar}
              alt={instructor.name}
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <Badge variant="secondary">Advanced Mathematics</Badge>
      </div>
    </div>
  </Card>
);

const SchoolNFTCollection = () => {
  const nfts = [
    {
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      title: "Advanced Mathematics",
      date: "Earned May 15, 2023",
      instructors: [
        { name: "John Doe", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
        { name: "Jane Smith", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" }
      ]
    },
    // Add more NFTs here
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Your NFT Collection</h2>
        <p className="text-gray-500">View and manage your earned certificates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default SchoolNFTCollection;