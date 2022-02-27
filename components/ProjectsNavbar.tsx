import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
     value: Category | 'all'; 
     handlerFilterCategory:Function;
     active:string;
    }> = ({ value, handlerFilterCategory, active }) => {



let className= "capitalize cursor-pointer hover:text-green"
if (active === value) 
className +=" text-green"
        
    return (
        <li className={className} onClick={()=> handlerFilterCategory(value)}>
            {value}
        </li>
    );
}


const ProjectsNavbar: FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
    return (
        <div className="flex px-3 py-3 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props} />
            <NavItem value="HTML/CSS" {...props} />
            <NavItem value="react.js" {...props} />
            <NavItem value="next.js" {...props} />
            <NavItem value="react native" {...props} />
            <NavItem value="javaScript" {...props} />
        </div>
    );
}

export default ProjectsNavbar;