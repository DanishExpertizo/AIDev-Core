import { Send } from "lucide-react";

const BottomInput = () => (
    <div className="relative">
        <div className="w-full h-12 md:h-14 rounded-lg flex items-center px-4"
            style={{ background: "linear-gradient(123.49deg, rgba(58, 168, 231, 0.94) 30.09%, rgba(4, 61, 93, 0.94) 85.07%)" }}
            >
            <input
                type="text"
                placeholder="Give a tosk to work on.."
                className="flex-1 bg-transparent text-white placeholder:text-white/80 outline-none border-none text-sm md:text-sm lg:text-base"
            />
            <Send className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform" />
        </div>
    </div>
);

export default BottomInput;