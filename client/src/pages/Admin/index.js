import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';
const { TabPane } = Tabs;

function Admin() {
    const { myapiData } = useSelector((state) => state.root);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.location.href = "/admin-login";
        }

    }, [])

    return (
        <div>

            <div className="flex gap-10 items-center px-5 py-2 justify-between">
                <div className="flex gap-10 sm:gap-5 items-center">
                    <h1 className='text-2xl text-primary sm:text-xl'>Portfolio Admin</h1>
                    <div className='w-80 h-[1px] bg-gray-500 sm:w-20'></div>
                </div>

                <button className='bg-primary text-white px-5 py-2 rounded-md cursor-pointer'
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/admin-login";
                    }}
                >Logout</button>
            </div>
            {myapiData && <div className='px-5 pb-10'>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab="Intro" key="1">
                        <AdminIntro />
                    </TabPane>
                    <TabPane tab="About" key="2">
                        <AdminAbout />
                    </TabPane>
                    <TabPane tab="Experiences" key="3">
                        <AdminExperiences />
                    </TabPane>
                    <TabPane tab="Projects" key="4">
                        <AdminProjects />
                    </TabPane>
                    <TabPane tab="Courses" key="5">
                        <AdminCourses />
                    </TabPane>
                    <TabPane tab="Contact" key="6">
                        <AdminContact />
                    </TabPane>
                </Tabs>
            </div>}

        </div>
    );
}

export default Admin