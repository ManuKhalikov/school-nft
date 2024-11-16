import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ClassCardProps {
  title: string;
  instructor: string;
  students: number;
  rating: number;
  image: string;
}

const ClassCard = ({ title, instructor, students, rating, image }: ClassCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-video relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <CardContent className="p-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">by Dr. {instructor}</p>
      <div className="flex items-center justify-between mt-4">
        <Badge variant="secondary">{students} students</Badge>
        <Badge variant="secondary">★ {rating}</Badge>
      </div>
    </CardContent>
  </Card>
);

const ClassCollection = () => {
  const classes = [
    {
      title: "Blockchain Fundamentals",
      instructor: "Sarah Chen",
      students: 1234,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop&q=60"
    },
    // Add more classes as needed
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Your Classes</h2>
        <p className="text-gray-500">Manage and monitor your class collection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem, index) => (
          <ClassCard key={index} {...classItem} />
        ))}
      </div>
    </div>
  );
};