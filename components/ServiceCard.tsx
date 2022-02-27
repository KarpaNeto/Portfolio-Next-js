import { FunctionComponent } from 'react'
import { Service } from '../type'

const ServiceCard: FunctionComponent<{ service: Service }> = ({
    service: { Icon, about, title },
}) => {

const createMarkup = () => {                 //function to insert bold(tags) <b> in html
    return{
        __html:about
    }
}

    return (
        <div className='flex items-center p-2 space-x-4'>
            <Icon className='w-12 h-12 text-purple-600'/>
            <div>
                <h4 className='font-bold'>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    );
}

export default ServiceCard