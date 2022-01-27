import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes';
import Image from 'next/image';
function Sidebar() {


    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div>
            <Image 
            className="mx-auto rounded-full" 
            src="/images/profile.jpg" 
            alt="user avatar"
            width="128"
            height="128"
            layout="intrinsic"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-pacifico">
                <span className='text-green'>Karpa </span>
                Neto
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" href='/' download='name'>
                <GiTie className="w-6 h-6" />Download Resume
            </a>
            {/* Social Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="/">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="/">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a> <a href="/">
                    <AiFillYoutube className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            {/* Address */}
            <div className="py-4 my-4 bg-gray-200 dark:bg-dark-200" style={{ marginInline: '-1rem' }}>
                <div className="flex justify-center space-x-2 item-center">
                    <GoLocation />
                    <span>Florianópolis,Brazil</span>
                </div>
                <p className='my-2'>pedrokn@gmail.com</p>
                <p className='my-2'>+55 (48) 988605478</p>
            </div>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
                onClick={() => window.open('mailto:pedrokn@gmail.com')}>
                Email Me</button>
            <button
                onClick={changeTheme}
                className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>
                    Light UI</button>
        </div>
    );
}

export default Sidebar;