import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface Student {
  name: string;
  grade: string;
  selected: boolean;
}

const ManageStudents = () => {
  const [selectedClass, setSelectedClass] = React.useState('');
  const [students, setStudents] = React.useState<Student[]>([
    { name: 'Sarah Anderson', grade: 'Grade 10', selected: false },
    { name: 'Michael Johnson', grade: 'Grade 10', selected: false },
    { name: 'Emily Williams', grade: 'Grade 10', selected: false },
    { name: 'David Brown', grade: 'Grade 10', selected: false },
    { name: 'Jessica Davis', grade: 'Grade 10', selected: false },
  ]);

  const toggleStudent = (index: number) => {
    const newStudents = [...students];
    newStudents[index].selected = !newStudents[index].selected;
    setStudents(newStudents);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Manage Students</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 1: Select Class</h3>
            <select 
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">Select a class...</option>
              <option value="math">Advanced Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
            </select>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 2: Select Students</h3>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input className="pl-10" placeholder="Search students..." />
            </div>

            <div className="space-y-2">
              {students.map((student, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={student.selected}
                      onChange={() => toggleStudent(index)}
                      className="rounded border-gray-300"
                    />
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full">
              Assign to Class
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};