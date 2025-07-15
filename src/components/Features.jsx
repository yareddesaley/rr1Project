import ContactsIcon from '@mui/icons-material/Contacts';
import Button from './Button';

export default function Features(){
    const features = [
        {
            icon: <ContactsIcon />,
            title: "Feature 1",
            description: "Description of feature 1."
        },
        {
            icon: <ContactsIcon />,
            title: "Feature 2",
            description: "Description of feature 2."
        },
        {
            icon: <ContactsIcon />,
            title: "Feature 3",
            description: "Description of feature 3."
        },
        {
            icon: <ContactsIcon />,
            title: "Feature 4",
            description: "Description of feature 4."
        }
    ]
    
    return (    
        <section className="bg-gray-100 p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 w-full md:w-[80%] mx-auto">
                Features
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full md:w-[80%] mx-auto">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-4 sm:p-6 rounded-lg border border-blue-500 hover:shadow-md transition-shadow"
                    >
                        <div className="flex gap-3 mb-3 sm:mb-4">
                            <span className='text-blue-500 text-2xl'>{feature.icon}</span>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    {feature.title}
                                </h3>
                                <p className="text-blue-700 text-sm sm:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='bg-blue-800 text-white p-6 sm:p-8 mt-6 sm:mt-8 rounded-lg text-center w-full md:w-[80%] mx-auto'>
                <h1 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-5'>
                    Ready to streamline your document management?
                </h1>
                <Button className="w-full sm:w-auto">Sign up now</Button>
            </div>
        </section>
    )
}