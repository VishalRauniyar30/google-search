import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useStateContext } from '../contexts/StateContextProvider';
import Loading from './Loading';

export default function Results() {
    const { results : data , searchTerm, getResults, loading } = useStateContext();
    const location = useLocation();
    useEffect(() => {
        if(searchTerm !== ''){
            let query = '';
            if(location.pathname === '/videos'){
                query = `/search?q=${encodeURIComponent(searchTerm)} videos`;
            }
            else{
                query = `/?query=${encodeURIComponent(searchTerm)}&limit=40&related_keywords=true`;
            }
            getResults(query);
        }
    }, [searchTerm, location.pathname]);
    if(loading){
        return <Loading />
    }
    switch(location.pathname) {
        case '/search':
            return (
                <div className='sm:px-56 flex flex-wrap justify-between space-y-6'>
                    {data?.results?.map(({ position, description, url, title }) => (
                        <div key={position} className='md:w-2/5 w-full'>
                            {url && (
                                <a href={url} target='_blank' rel='noreferrer'>
                                    <p className='text-sm'>
                                        {url.length > 30 ? url.substring(0,30) : url}
                                    </p>
                                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                        {title}
                                    </p>
                                    <p className='text-lg'>
                                        {description}
                                    </p>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            );
        // case '/images':
        //     return (
        //         <div className='flex flex-wrap justify-center items-center'>
        //             {data?.image_results?.map(({ image, link : { href, title }}, index) => (
        //                 <a className='sm:p-3 p-5' href={href} key={index} target='"_blank' rel='noreferrer' >
        //                     <img src={image?.src} alt={title} loading='lazy' />
        //                     <p className='w-36 break-words text-sm mt-2'>
        //                         {title}
        //                     </p>
        //                 </a>
        //             ))}
        //         </div>
        //     );
        case '/news':
            return (
                <div className='sm:px-56 flex flex-wrap justify-between items-center space-y-6'>
                    {data?.results?.map(({ id, links, source, title }) => (
                        <div key={id} className='md:w-2/5 w-full'>
                            <a href={links?.[0].href} target='_blank' rel='noreferrer' className='hover:underline'>
                                <p className='text-lg dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>
                            <div className='flex gap-4'>
                                <a href={source?.href} target='_blank' rel='noreferrer' className='hover:underline hover: text-blue-300'>
                                    {source?.href}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            );
        // case '/videos':
        //     return (
        //         <div className='flex flex-wrap'>
        //             {data?.results?.map((video, index) => (
        //                 <div key={index} className='p-2'>
        //                     {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />}
        //                 </div>
        //             ))}
        //         </div>
        //     );
        default:
            return 'ERROR!!!';
    }
}
