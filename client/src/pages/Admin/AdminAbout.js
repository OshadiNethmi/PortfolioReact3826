import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Showloading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd'

function AdminAbout() {
  const dispatch = useDispatch();
  const { myapiData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempLanguages = values.languages.split(",");
      values.languages = tempLanguages;
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(Showloading());
      const response = await axios.post("/api/myapi/update-about", {
        ...values,
        _id: myapiData.about._id,
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
        initialValues={{
          ...myapiData.about,
          languages: myapiData.about.languages.join(" , "),
          skills: myapiData.about.skills.join(" , "),
        }}
      >
        <Form.Item name='lotiUrl' label='Lottie URL'>
          <input placeholder='Lottie URL' />
        </Form.Item>
        <Form.Item name='description1' label='Description1'>
          <textarea placeholder='Description1' />
        </Form.Item>
        <Form.Item name='skills' label='Skills'>
          <textarea placeholder='Skills' />
        </Form.Item>
        <Form.Item name='languages' label='Languages'>
          <textarea placeholder='Languages' />
        </Form.Item>
        <div className='flex justify-end w-full' label='welcome Text'>
          <button className='px-10 py-2 bg-tertiary rounded-md text-white' type='submit'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout