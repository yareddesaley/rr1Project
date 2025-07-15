import FolderIcon from '@mui/icons-material/Folder';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContactsIcon from '@mui/icons-material/Contacts';
import Button from "@/components/Button";

export default function Main() {
  return (
    <main className="w-full">
      <section className="bg-blue-800 p-4 md:p-8 text-white flex flex-col lg:flex-row justify-center items-center min-h-auto gap-5">
        <div className="text-center w-full lg:w-[30%] mb-8 lg:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Document Management Enterprise Software</h1>
          <p className="text-base md:text-lg mb-6">
            Streamline your document workflow with Docrive, the ultimate solution for managing documents efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button>Get Started</Button>
            <Button>View Demo</Button>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-blue-100 w-full h-10">
              <div className="flex gap-2 p-3 items-center h-full">
                <div className="bg-blue-800 rounded-full p-1 h-3 w-3"></div>
                <div className="bg-blue-800 rounded-full p-1 h-3 w-3"></div>
                <div className="bg-blue-800 rounded-full p-1 h-3 w-3"></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 text-black bg-blue-100">
              <div className="w-full md:w-[30%] p-4 md:p-6">
                <h1 className="font-bold mb-2 text-lg">Folders</h1>
                <ul className="space-y-3">
                  <li>
                    <div className="flex items-center gap-2">
                      <FolderIcon className="text-blue-500"/>
                      <span className="bg-blue-500 rounded-xl h-2 w-[50%]"></span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <FolderIcon className="text-blue-500"/>
                      <span className="bg-blue-500 rounded-xl h-2 w-[30%]"></span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <FolderIcon className="text-blue-500"/>
                      <span className="bg-blue-500 rounded-xl h-2 w-full"></span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <FolderIcon className="text-blue-500"/>
                      <span className="bg-blue-500 rounded-xl h-2 w-[70%]"></span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[70%] bg-white p-4">
                <div className="flex items-center border border-gray-300 rounded-lg p-3 w-full md:w-[60%] mx-auto mt-4 mb-4">
                  <SearchIcon className="text-blue-500" />
                  <input type="text" placeholder="Search..." className="w-[80%] flex border-none focus-none outline-none" />
                </div>
                <div className="flex p-4 items-center justify-between">
                  <h1 className="text-blue-500 text-xl">Documents</h1>
                  <MoreHorizIcon />
                </div>
                {[{name: "John Baston", time: "2 hr"},
                  {name: "Doe", time: "3 hr"},
                  {name: "Baston", time: "1 hr"},
                  {name: "Doe", time: "5 hr"},
                  {name: "All", time: "5 hr"}].map((doc, index) => (
                    <div key={index} className="flex justify-between p-4 border-b border-gray-300">
                      <div className="flex items-center gap-2">
                        <ContactsIcon className="text-blue-300"/>
                        <h1>{doc.name}</h1>
                      </div>
                      <p>{doc.time}</p>
                    </div>
                  ))  
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}