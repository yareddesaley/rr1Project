import TaskIcon from '@mui/icons-material/Task';
export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 md:p-7">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <section className='flex items-center mb-4 md:mb-0'>
            <TaskIcon fontSize='large' className='text-white'/>
            <div className="text-white text-xl font-bold ml-2">Docrive</div>
        </section>
        <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300 text-sm md:text-base">Home</a>
          </li>
          <li>
            <a href="/features" className="text-white hover:text-gray-300 text-sm md:text-base">Features</a>
          </li>
          <li>
            <a href="/pricing" className="text-white hover:text-gray-300 text-sm md:text-base">Pricing</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300 text-sm md:text-base">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}