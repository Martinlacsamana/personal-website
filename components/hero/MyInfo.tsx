

const myInfo = () => {
    return (
        <div className="w-3/4">
            {/* Header to showcase this is our personal website */}
            <div className="">
                <h1 className="text-custom-yellow font-inter text-4xl italic font-semibold">Hey There,</h1>
                <h1 className="text-custom-yellow font-inter text-4xl italic font-semibold">I'm Martin</h1>
            </div>

            <div className="pt-8">
                <h2 className="text-custom-yellow font-inter text-2xl italic font-light">Software Engineering Intern</h2>
            </div>
            

            {/* Toggle buttons to select between About and Eduction */}
            <div className="pt-6">
                <div className="flex space-x-4 pb-4">
                    
                    <h3 className="text-lg font-semibold underline">About</h3>
                    <h3 className="text-lg">Education</h3>
                    
                </div>
                
                <p className="pb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>

                <p>
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
            </div>

        </div>
    )
}

export default myInfo