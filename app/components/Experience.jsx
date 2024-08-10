import React from 'react'
import { experience} from "../data/index"

const Experience = () => {
    return (
        <section id="experience" className='mt-20 py-20'>
            <h2 className='text-[#ADB7BE] font-extrabold text-3xl text-center'>Experience</h2>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {experience.map((job) => (
                    <div key={job.id} className = "relative outline shadow-md bg-clip-border rounded-xl lg:min-h-[20rem] min-h-[17.5rem] flex items-center justify-center sm:w-96 w-[80vw]">
                        <div className='p-6'>
                            <h5 className ="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                                {job.title}
                            </h5>
                            <h6 className="block text-[#ADB7BE] font-semibold mb-2">
                                {job.timeline}
                            </h6>
                            <p className='text-[#ADB7BE] font-light'>
                                {job.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience