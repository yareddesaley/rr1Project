import TaskIcon from '@mui/icons-material/Task';
export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold"><TaskIcon /></div>
        <div className="text-white text-lg font-bold">Docrive</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/features" className="text-white hover:text-gray-300">Features</a>
          </li>
          <li>
            <a href="/pricing" className="text-white hover:text-gray-300">Pricing</a>
          </li>
           <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}