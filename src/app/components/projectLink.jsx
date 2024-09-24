export default function ProjectLink() {
    return (
        <div className="h-fit max-w-[500px] border-2 border-black rounded-lg bg-red-600 relative  overflow-y-auto flex flex-col">
            <div className="flex justify-between items-center bg-yellow-300 p-2 border-b-2 border-pink-300">
                <div className="text-purple-500 font-pixeboy text-[3.8vh] md:text-[4.8vh]">{`<TASK SUBMISSIONS>`}</div>
                <div className="flex">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 border-2 border-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 border-2 border-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 border-2 border-purple-500 rounded-full"></div>
                    </div>
                    <button className="text-black ml-2 hover:bg-red-300 transition-colors duration-200 w-4 h-4 flex items-center justify-center rounded-full bg-red-600 border border-black font-bold text-xs">
                        &#x2715;
                    </button>
                </div>
            </div>
            <div className="flex flex-row p-4">
                <textarea
                    placeholder="Enter GitHub Link (REQUIRED)"
                    className="font-pixeboy text-[2.4vh] md:text-[2.8vh] h-[40px]  w-full text-black rounded-lg border-2 border-pink-300 resize-none"
                />
            </div>
            <div className="flex flex-row p-4">
                <textarea
                    placeholder="Enter GitHub Link (REQUIRED)"
                    className="font-pixeboy text-[2.4vh] md:text-[2.8vh] h-[40px]  w-full text-black rounded-lg border-2 border-pink-300 resize-none"
                />
            </div>
            <div className="flex flex-row p-4">
                <textarea
                    placeholder="Enter GitHub Link (REQUIRED)"
                    className="font-pixeboy text-[2.4vh] md:text-[2.8vh] h-[40px]  w-full text-black rounded-lg border-2 border-pink-300 resize-none"
                />
            </div>
        </div>
    );
}
