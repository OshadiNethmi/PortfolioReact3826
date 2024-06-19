import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Showloading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd'

function AdminContact() {
  const dispatch = useDispatch();
  const { myapiData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(Showloading());
      const response = await axios.post("/api/myapi/update-contact", {
        ...values,
        _id: myapiData.contact._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading);
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form onFinish={onFinish}
        layout='vertical'
        initialValues={myapiData.contact}
      >
        <Form.Item name='name' label='Name'>
          <input placeholder='Name' />
        </Form.Item>
        <Form.Item name='age' label='Age'>
          <input placeholder='Age' />
        </Form.Item>
        <Form.Item name='gender' label='Gender'>
          <input placeholder='Gender' />
        </Form.Item>
        <Form.Item name='email' label='Email'>
          <input placeholder='Email' />
        </Form.Item>
        <Form.Item name='mobile' label='Mobile'>
          <input placeholder='Mobile' />
        </Form.Item>
        <Form.Item name='country' label='Country'>
          <input placeholder='Country' />
        </Form.Item>
        <div className='flex justify-end w-full' label='welcome Text'>
          <button className='px-10 py-2 bg-tertiary rounded-md text-white' type='submit'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminContact