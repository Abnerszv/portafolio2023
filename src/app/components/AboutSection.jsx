"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li><span className='font-bold'>UX/UI:</span> Figma, Adobe (XD, AI, PS, PR)</li>
          <li><span className='font-bold'>Front-End:</span> HTML, CSS, JavaScript, Next.js</li>
          <li><span className='font-bold'>Back-End:</span> Java (SpringBoot), Node.js, PHP, SQL, PostgreSQL</li>
          <li><span className='font-bold'>Other:</span> GitHub, Office (Excel, Word, PowerPoint)</li>
          <br></br>
          <li>I enjoy doing sports, playing music, being in nature and eating tacos</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Google UX Design Certificate</li>
          <li>ONE - Oracle Next Edication</li>
        </ul>
      ),
    },
    {
      title: "Contact",
      id: "contact",
      content: (
        <ul className="list-disc pl-2">
          <li><Link className='hover:text-[#346e94]' href={"https://www.linkedin.com/in/abnerszv/"}>Linkedin</Link></li>
          <li><Link className='hover:text-[#dd2a7b] ' href={"https://www.instagram.com/abnerszv/"}>Instagram</Link></li>
          <li>abnerzv10@gmail.com</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, starTransition] = useTransition();

    const handleTabChange = (id) => {
        starTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className='text-[#222935]'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/foto.webp" className='rounded-3xl' width={300} height={300} alt='retrato' />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-2xl font-bold text-[#222935] mb-4">
                    Abner Salvador Zacarias Valdivia
                </h2>
                <p className="text-base lg:text-lg">
                Web and application developer, specializing in UX/UI design. Passionate about creating captivating and functional digital experiences. Expert in web programming languages, frameworks, and design tools. Committed to innovation and continuous improvement to deliver high-quality technological solutions.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}>
                        {" "}
                        Skills{""}
                    </TabButton>

                    <TabButton selectTab={() => handleTabChange("certifications")}
                    active={tab === "certifications"}>
                        {" "}
                        Certifications{""}
                    </TabButton>

                    <TabButton selectTab={() => handleTabChange("contact")}
                    active={tab === "contact"}>
                        {" "}
                        Contact{""}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
                <br></br>
            </div>

        </div>
    </section>
  )
}

export default AboutSection