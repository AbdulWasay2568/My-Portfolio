export default function SkillsList(){
    const skills = {
        "Web Development": {
            Frontend: ['HTML', 'HTML5', 'CSS', 'JavaScript', 'React.js', 'Next.js' , 'Tailwind CSS', 'TypeScript'],
            Backend: ['Node.js', 'Express.js', 'Prisma ORM'],
            Database: ['PostgreSQL', 'MySQL', 'MS SQL', 'Firebase', 'Supabase'],
            Devops: ['Git']
        },
        "App Development": {
            Frontend: ['React Native', 'TypeScript', 'NativeWind'],
            Backend: ['Node.js', 'Express.js', 'Prisma ORM'],
            Database: ['PostgreSQL', 'MySQL', 'MS SQL', 'Firebase', 'Supabase'],
            Devops: ['Git']
        },
    };
    
    return (
        <div className="min-h-screen bg-[#121212] rounded-lg text-white p-4">
            {/* Main Section */}
                {Object.entries(skills).map(([category, sections]) => (
                    <div key={category} className= "mt-8">
                        {/* Category Section */}
                        <div className="bg-black p-4 rounded-lg">
                            <b className="text-center block text-white">{category}</b>
                            <div className="flex flex-wrap  justify-center mt-4 gap-4">
                                {Object.entries(sections).map(([section, technologies]) => (
                                    <div key={section} className="bg-[#121212] p-4 rounded-lg w-[350px] h-[170px]  lg:w-[190px] lg:h-[250px]">
                                        <b>{section}</b>
                                        <div className="flex flex-wrap mt-2 justify-center gap-2">
                                            {technologies.map((tech) => (
                                                <div key={tech} className="bg-gray-800 p-2 mt-2 rounded-lg w-auto text-xs">{tech}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
};

