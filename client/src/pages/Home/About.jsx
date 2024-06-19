import React, { useEffect, useRef, useState, useTransition } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import SectionTitle from '../../components/SectionTitle';
import TabButton from "../../components/TabButton";

function About() {
    const { loading, myapiData } = useSelector(state => state.root);
    const { about } = myapiData;
    const { skills, languages, description1, lotiUrl } = about;

    const lottieRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    lottieRef.current.play();
                } else {
                    lottieRef.current.stop();
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (lottieRef.current) {
            observer.observe(lottieRef.current);
        }

        return () => {
            if (lottieRef.current) {
                observer.unobserve(lottieRef.current);
            }
        };
    }, []);

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section id="about">
            <SectionTitle title="About" />
            <div className='loti grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="h-[70vh] w-full md:w-1/2"
                >
                    <lottie-player
                        ref={lottieRef}
                        src={lotiUrl}
                        background= "transparent"
                        speed="1"
                        autoplay={false}
                        direction="1"
                        mode="normal"
                    />
                </motion.div>
                <div className="about md:w-1/2 mt-4 md:mt-0 text-left flex flex-col h-full">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-5"
                    >
                        <p className="description1">{description1 || ''}</p>
                    </motion.div>

                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("languages")}
                            active={tab === "languages"}
                        >
                            Languages
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {tab === "skills" &&
                                skills.map((skill, index) => (
                                    <div key={index} className="item p-4 rounded" style={{ background: 'linear-gradient(264deg, #df890879 -5.09%, #b515ff2e 106.28%)' }}>
                                        <h2 className="item-title">{skill}</h2>
                                    </div>
                                ))}
                            {tab === "languages" &&
                                languages.map((language, index) => (
                                    <div key={index} className="item p-4 rounded" style={{ background: 'linear-gradient(264deg, #df890879 -5.09%, #b515ff2e 106.28%)' }}>
                                        <h2 className="item-title">{language}</h2>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
