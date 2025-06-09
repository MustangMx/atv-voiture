import { FC } from 'react';
import { Smile } from 'lucide-react';

const App: FC = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
      <Smile className="w-6 h-6" /> Hello React!
    </h1>
  </div>
);

export default App;
