export const Education = () => {
    return (
        <div className="mt-5">
            <div className="flex justify-left text-2xl lg:text-5xl font-semibold lg:mb-5">
                Education
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <img
                            className="h-8 lg:h-16 w-8 lg:w-16 flex-none m-auto"
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg"
                            alt="Deere & Co. Logo"
                        />
                        <div className="min-w-0 flex-auto m-auto">
                            <p className="text-lg lg:text-2xl font-semibold">
                                Iowa State University
                            </p>
                        </div>
                    </div>
                    <div className="align-center">
                        <p className="text-sm lg:text-2xl text-right font-semibold">
                            B.S. Software Engineering
                        </p>
                        <p className="flex mt-1 text-xs lg:text-lg justify-end">
                            Aug 2021 - Dec 2025
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};
