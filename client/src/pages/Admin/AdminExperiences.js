import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, Showloading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminExperiences() {
    const dispatch = useDispatch();
    const { myapiData } = useSelector((state) => state.root);
    const { experiences } = myapiData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            dispatch(Showloading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/myapi/update-experience", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("/api/myapi/add-experience", values);
            }

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
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
            const response = await axios.post("/api/myapi/delete-experience", {
                _id: item._id,
            });

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
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
            form.setFieldsValue(item);
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
                <button className='px-5 py-2 bg-tertiary rounded-md text-white' onClick={() => openModal()}>
                    Add Experience
                </button>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
                {experiences.map((experience) => (
                    <div key={experience._id} className='shadow border p-5 border-gray-400 flex-col'>
                        <h1 className='text-primary text-xl font-bold'>{experience.period}</h1>
                        <hr />
                        <h1>Title: {experience.title}</h1>
                        <h1>Company: {experience.company}</h1>
                        <h1>{experience.description}</h1>
                        <div className='flex justify-end gap-2 mt-5'>
                            <button className='bg-black text-white px-5 py-2 rounded-md' onClick={() => onDelete(experience)}
                                style={{
                                    background: 'linear-gradient(to right, #212121, #7000a8)'
                                }}
                            >
                                Delete
                            </button>
                            <button className='bg-primary text-white px-5 py-2 rounded-md' onClick={() => openModal(experience)}>
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                visible={showAddEditModal}
                title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                footer={null}
                onCancel={handleCancel}
                afterClose={form.resetFields}
            >
                <Form form={form} layout="vertical" onFinish={onFinish} initialValues={selectedItemForEdit || {}}>
                    <Form.Item name='period' label="Period" rules={[{ required: true, message: 'Please enter the period!' }]}>
                        <input placeholder='Period' />
                    </Form.Item>
                    <Form.Item name='title' label="Title" rules={[{ required: true, message: 'Please enter the title!' }]}>
                        <input placeholder='Title' />
                    </Form.Item>
                    <Form.Item name='company' label="Company" rules={[{ required: true, message: 'Please enter the company!' }]}>
                        <input placeholder='Company' />
                    </Form.Item>
                    <Form.Item name='description' label="Description" rules={[{ required: true, message: 'Please enter the description!' }]}>
                        <input placeholder='Description' />
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

export default AdminExperiences;
