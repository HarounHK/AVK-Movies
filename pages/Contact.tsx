import {Navbar} from '../components/Navbar';

export const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">This is the Contact page.</p>
      </div>
    </div>
  );
};

