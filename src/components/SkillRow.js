
export const SkillRow = ({skills}) => {
    return (
        <ul role="list" className="divide-y divide-gray-100 mx-auto w-72">
            {skills.map((skill) => {
                return (
                    <li key={`${skill.name + skill.src}`} className="flex flex-col gap-x-6 py-5">
                        <div className="flex flex-row m-auto gap-x-2">
                            <img
                                className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto"
                                src={skill.src}
                                alt={skill.alt}
                            />
                            <div className="min-w-0 flex-auto m-auto">
                                <p className="text-xs lg:text-2xl font-semibold">{skill.name}</p>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
