import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Showloading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd'

function AdminIntro() {
  const dispatch = useDispatch();
  const { myapiData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(Showloading());
      const response = await axios.post("/api/myapi/update-intro", {
        ...values,
        _id: myapiData.intro._id,
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
        initialValues={myapiData.intro}
      >
        <Form.Item name='welcomeText' label='welcome Text'>
          <input placeholder='welcome Text' />
        </Form.Item>
        <Form.Item name='firstName' label='first Name'>
          <input placeholder='first Name' />
        </Form.Item>
        <Form.Item name='lastName' label='last Name'>
          <input placeholder='last Name' />
        </Form.Item>
        <Form.Item name='caption' label='Caption'>
          <input placeholder='Caption' />
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <textarea placeholder='Description' />
        </Form.Item>
        <div className='flex justify-end w-full' label='welcome Text'>
          <button className='px-10 py-2 bg-tertiary rounded-md text-white' type='submit'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro