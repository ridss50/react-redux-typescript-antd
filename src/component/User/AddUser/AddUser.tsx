import React, {useEffect, useMemo, useState} from "react";
import {Form, Button, Col, Row, Input, Result, message} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {addUserData,updateUserData,getListUserData,clearUserData} from "../../../store/actions/UsersActions"

const AddUser = (props:any) => {
  const dispatch = useDispatch();
  const [ name,setName ] = useState("");
  const [ job,setJob ] = useState("");
  const [ userId,setUserId ] = useState(0);
  const addedUser = useSelector( (state: any) => state.userReducer.addedUser);
  const updatedUserData = useSelector( (state: any) => state.userReducer.updatedUserData);
  const singleUserData = useSelector( (state: any) => state.userReducer.singleUser);

  useEffect(() => {
    if(singleUserData) {
      setName(singleUserData.data.first_name)
      setJob(singleUserData.data.email)
      setUserId(singleUserData.data.id)
    }
  },[singleUserData])

  const addUserDetail = (type:boolean) => {
    type ? dispatch(addUserData(name,job)) : dispatch(updateUserData(userId,name,job));
    props.goBack();
    dispatch(clearUserData())
    dispatch(getListUserData())

  }

  useEffect(() => {
    if(addedUser) {
        message.success('User Added Successfully');
        setJob("");
        setName("");
    }
  },[addedUser])

  useEffect(() => {
    if(updatedUserData) {
        message.success('User Updated Successfully');
        setJob("");
        setName("");
    }
  },[updatedUserData])

  const onCancel = () => {
    props.goBack();
    dispatch(clearUserData())
    setJob("");
    setName("");

  }


  return(<>
    <Result
      status="success"
      title="Add your user data and Enjoy!"
      subTitle="Entering your personal data will not be available for other people, we understand your privacy :)"
    />
    <Form layout="vertical" >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Name"
            rules={[{ required: true, message: 'Please enter user name' }]}
          >
            <Input placeholder="Please enter user name" value={name} onChange={(e) => setName(e.target.value)}  />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input placeholder="Please enter your Email" value={job} onChange={(e) => setJob(e.target.value)}  />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          { singleUserData ?
        <Button  type="primary" shape="round" size="large" block onClick={() => addUserDetail(false)}>
           Modify
        </Button> : <Button  type="primary" shape="round" size="large" block onClick={() => addUserDetail(true)}>
              Save
            </Button>}
        </Col>
        <Col span={12}>
          <Button type="primary" shape="round"   size="large" block onClick={onCancel}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  </>)
}

export default AddUser
