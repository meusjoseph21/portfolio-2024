"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
        )
    },
    {
        title: 'education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>University of California, Los Angeles</li>
                <li>Bachelor of Science in Computer Science</li>
                <li>2015 - 2019</li>
            </ul>
        )
    },
    {
        title: 'certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>Frontend Development Certification</li>
                <li>Backend Development Certification</li>
                <li>Full Stack Development Certification</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('skills');

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about_photo.jpg" alt="about_photo" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>Certifications</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((data) => data.id === tab).content}</div>
            </div>

        </div>
    </section>
  )
}

export default AboutSection
