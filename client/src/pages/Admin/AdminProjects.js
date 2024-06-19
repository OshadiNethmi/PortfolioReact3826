import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, message } from "antd"
import { HideLoading, ReloadData, Showloading } from '../../redux/rootSlice';
import axios from 'axios';



function AdminProjects() {
    const dispatch = useDispatch();
    const { myapiData } = useSelector((state) => state.root);
    const { projects } = myapiData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [form] = Form.useForm();

    const onFinish = async (values) => {

        try {
            const tempTechnologies = values?.technologies?.split(",") || [];
            values.technologies = tempTechnologies;
            dispatch(Showloading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/myapi/update-project", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("/api/myapi/add-project", values);
            }

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                dispatch(ReloadData(true));
                form.resetFields();
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    const onDelete = async (item) => {
        try {
            dispatch(Showloading());
            const response = await axios.post("/api/myapi/delete-project", {
                _id: item._id,
            });

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    const openModal = (item = null) => {
        form.resetFields(); 
        setSelectedItemForEdit(item);
        setShowAddEditModal(true);
        if (item) {
            form.setFieldsValue({
                ...item,
                technologies: item.technologies.join(", "),
            });
        }
    };

    const handleCancel = () => {
        form.resetFields();
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
    };

    return (
        <div>
            <div className='flex justify-end'>
                <button
                    className='px-5 py-2 bg-tertiary rounded-md text-white'
                    onClick={() => openModal()}
                >
                    Add Project
                </button>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
                {projects.map((project) => (
                    <div key={project._id} className='shadow border p-5 border-gray-400 flex flex-col gap-5'>
                        <h1 className='text-primary text-xl font-bold'>
                            {project.title}
                        </h1>
                        <hr />
                        <img src={project.image} alt="" className='h-60 w-80' />
                        <p>Technologies: {project.technologies.join(", ")}</p>
                        <h1>{project.description}</h1>
                        <div className='flex justify-end gap-2 mt-5'>
                            <button
                                className='bg-black text-white px-5 py-2 rounded-md'
                                onClick={() => {
                                    onDelete(project);
                                }}
                                style={{
                                    background: 'linear-gradient(to right, #212121, #7000a8)'
                                }}
                            >Delete</button>
                            <button
                                className='bg-primary text-white px-5 py-2 rounded-md'
                                onClick={() => openModal(project)}
                            >Edit</button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                visible={showAddEditModal}
                title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                footer={null}
                onCancel={handleCancel}
                afterClose={form.resetFields}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        ...selectedItemForEdit,
                        technologies: selectedItemForEdit?.technologies?.join(" , "),
                    } || {}}
                >
                    <Form.Item name='title' label="Title" rules={[{ required: true, message: 'Please enter the title!' }]}>
                        <input placeholder='Title' />
                    </Form.Item>
                    <Form.Item name='image' label="Image" rules={[{ required: true, message: 'Please enter the image!' }]}>
                        <input placeholder='Image' />
                    </Form.Item>
                    <Form.Item name='description' label="Description" rules={[{ required: true, message: 'Please enter the description!' }]}>
                        <textarea placeholder='Description' />
                    </Form.Item>
                    <Form.Item name='technologies' label="Technologies" rules={[{ required: true, message: 'Please enter the technologies!' }]}>
                        <input placeholder='Technologies' />
                    </Form.Item>
                    <div className='flex justify-end'>
                        <button
                            type="button"
                            className='px-5 py-2 border-primary text-primary'
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button type='submit' className='px-5 py-2 bg-primary text-white'>
                            {selectedItemForEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>
            </Modal>

        </div>
    );
}

export default AdminProjects