import { memo } from 'react'
import DisplayPreviewComponent from '../../../component/DisplayPreviewComponent/DisplayPreviewComponent';

const HandlePage = () => {

    return (
    <>
        <section className='container mx-auto px-4 ant-segmented py-10'>
            <div className='pb-4' >
                <div class="inline-flex rounded-md shadow-sm">
                    <a href='#' aria-current="page" class=" bg-green-600 px-4 py-2 text-sm font-medium text-blue-700 border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700   dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        Create
                    </a>
                    <a href='#' class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        Library
                    </a>
                </div>
            </div>
            <div className='grid grid-rows-2 grid-cols-3' >
                <div className='col-span-1 grid grid-cols-2 h-fit w-full p-3 gap-4 bg-gray-800 rounded-lg'  >
                    <div className='col-span-1' >
                        <form className='asset-content  rounded-lg flex flex-col justify-center items-center' action='#' method='POST' encType='multipart/form-data' >
                            <div className=' w-[100px] h-[100px] border border-solid rounded border-slate-100 ' >
                                <input className='opacity-0 w-full h-full ' type="file" multiple/>

                            </div>
                        </form>

                    </div>
                    <div className='col-span-1 ' >
                        <form className='asset-content  rounded-lg flex flex-col justify-center items-center' action='#' method='POST' encType='multipart/form-data' >
                                <div className=' w-[100px] h-[100px] border border-solid rounded border-slate-100 ' >
                                    <input className='opacity-0 w-full h-full ' type="file" multiple/>

                                </div>
                        </form>

                    </div>
                    <div className=' col-span-2 create-result h-full overflow-y-scroll ' >
                        <div className='library-item' >
                            nam
                        </div>
                        <div className='library-item' >
                            nam
                        </div>
                        <div className='library-item' >
                            nam
                        </div>
                        <div className='library-item' >
                            nam
                        </div>
                    </div>
                </div>
                  
                <div className='col-span-2 max-h-96 px-2' >
                    
                    <DisplayPreviewComponent/>
                </div> 
               
            </div> 
        </section>

    </>   

    );

};

export default memo(HandlePage);
