import React from 'react'

const Card = ({username,btnText= "Visit Our Site"}) => {
    return (
        <div className="bg-white min-h-[475px] font-[sans-serif]">
            <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8">
                <div className="max-w-md mx-auto p-4">
                    <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">{username}</h2>
                    <p className="text-gray-800 text-base">Upgrade to our premium plan and supercharge your experience. Don't miss out!</p>

                    <div className="mt-12 space-y-6">
                        <input name="name" type="text" className="text-gray-800 bg-gray-100 w-full text-sm px-4 py-3 outline-blue-600 focus:bg-transparent transition-all duration-300" placeholder="Enter name" />
                        <button type="button"
                            className="w-full px-4 py-2 text-base tracking-wider font-semibold outline-none border border-blue-600 bg-blue-600 text-white hover:bg-transparent hover:text-blue-600 transition-all duration-300">{btnText}</button>
                    </div>
                </div>
                <div className="md:text-right max-md:mt-12 h-full">
                    <img src="https://readymadeui.com/team-image.webp" alt="Premium Benefits" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Card
