
const CompanyCard = () => {
    return (
        <div className="card lg:card-side">
            {/* Company Image */}
            <div className="w-1/2">
                <figure><img src="https://media.istockphoto.com/id/1331470022/photo/indian-white-collar-male-worker-in-wheelchair-having-cheerful-discussion-leading-conversation.jpg?s=612x612&w=0&k=20&c=dL5cYkW-we2uudznnEg05lWA0FVZR1BlylkQfOr6GtY=" alt="Album"/></figure>
            </div>

            {/* Company Description */}
            <div className="card-body w-1/2 mt-[-24px]">
                <div className="flex justify-between items-start">
                    <img src="/elavizelogo.png" className="w-36 object-cover"></img>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="grey" className="w-8 h-8  cursor-pointer absolute top-2 right-0">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                
                <p className="mt-2 text-gray-500 font-inter text-base font-normal leading-normal">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                
                {/* Put the tags here */}
                <div className="flex space-x-6">
                    <div className="badge badge-primary badge-outline">Software</div>
                    <div className="badge badge-primary badge-outline">Startup</div>
                    <div className="badge badge-primary badge-outline">Intern</div>
                </div>
                
            </div>

        </div>
    )
}

export default CompanyCard