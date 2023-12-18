import CompanyCard from "./CompanyCard"

const Modal = () => {
    return (
        <div className="w-5/12 mx-auto p-4 flex flex-col bg-white rounded-lg border-2 border-purple-500 border-opacity-90">

            {/* Company Card Component */}
            <CompanyCard/>

            {/* Modal Body */}
            <div className="flex space-x-2">
                {/* Questions and Answers*/}
                <div className="w-1/2">
                    <h1 className="text-black text-base font-semibold leading-normal">What did Elavize mean to you?</h1>
                    <p className="text-gray-500 text-sm font-normal leading-normal mb-2">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                    <h1 className="text-black text-base font-semibold leading-normal">Roles & Responsibilities?</h1>
                    <p className="text-gray-500 text-sm font-normal leading-normal mb-2">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                    <h1 className="text-black text-base font-semibold leading-normal">What did I learn?</h1>
                    <p className="text-gray-500 text-sm font-normal leading-normal mb-2">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                    <h1 className="text-black text-base font-semibold leading-normal">Tidbits</h1>
                    <p className="text-gray-500 text-sm font-normal leading-normal mb-2">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                </div>

                {/* Pages Built and the Cool Analytics thing */}
                <div className='w-1/2'>
                    <h1 className="text-black text-base font-semibold leading-normal text-center mb-2">Some Pages I Built</h1>
                    <div className="carousel w-full h-48 object-cover">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-sm btn-circle ">❮</a> 
                            <a href="#slide2" className="btn btn-sm btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-sm btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-sm btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-sm btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-sm btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-sm btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-sm btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Modal