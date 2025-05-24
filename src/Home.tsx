import { Link } from 'react-router-dom';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Home() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const links = ["/typography", "/textInput", "/checkbox", "/toast", "/notification"];
    const linkNames = ["Typography", "Text Input", "Checkbox", "Toast", "Notification"];

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="flex flex-wrap w-full gap-10 p-5">
            {links.map((link, i) => (
                <Link
                    key={i}
                    to={link}
                    className="w-full lg:basis-1/3 lg:pl-5 text-center lg:flex-grow h-40 flex items-center justify-center dark:bg-neutral-100 dark:text-black bg-neutral-900 text-white rounded-2xl font-semibold text-xl"
                >
                    {linkNames[i]}
                </Link>
            ))}
        </div>
    );
}

export default Home;
