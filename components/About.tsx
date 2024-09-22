import { BookOpenTextIcon, BrainIcon, ListChecksIcon } from "lucide-react"

export default function AboutPage(){
    
    const reasons = [
        {
            title: "Strategic",
            text: "I give students the best tips and tricks to improve their scores. I also tell students the best ways to save time on tests.",
            icon: BrainIcon

        },
        {
            title: "Accurate",
            text:"Helping students correct their silly mistakes, and earn points on questions they are capable of doing.",
            icon: ListChecksIcon
        },
        {
            title:"Thorough",
            text:"I give clear and detailed explanations for problems, whether they are easy or hard. I will explain it until the student understands.",
            icon: BookOpenTextIcon

        }
    

    ]
    return(
        <section className="py-16 px-8 bg-white text-center h-screen flex flex-col pt-40">
        <h2 className="text-6xl font-black tracking-tighter drop-shadow-lg"><span className="text-blue-500">WHY</span> ME?</h2>
        <p className="mt-4 text-lg p-10 w-[50%] mx-auto">
        I have taken lots AP classes and got high scores on standardized tests. I stay updated on the latest news for the SAT/ACT and APs. I also know the best strategies to get your dream score! 
        </p>
        <div className="flex justify-around mt-10">
            {reasons.map((reason)=>
            <div className="flex flex-col items-center justify-start">
                <div className="mb-5 bg-blue-500/10 rounded-full flex items-center justify-center">
                <reason.icon className="p-5 w-20 h-20 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
                <p className=" mx-10 text-slate-400">{reason.text}</p>

            </div>)}
        </div>
      </section>
    )
}