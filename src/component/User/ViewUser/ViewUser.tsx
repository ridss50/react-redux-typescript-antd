import React, {useEffect, useState} from "react";
import { Button, Col, Row, Result } from 'antd';
import "./ViewUser.css"
import {useDispatch, useSelector} from "react-redux";
import {clearUserData} from "../../../store/actions/UsersActions";


const ViewUser = (props:any) => {
  const dispatch = useDispatch();
  const [ singleUser,setSingleUser ]:any = useState(undefined);
  const [ success,setSuccess ] = useState(false);
  const singleUserData = useSelector( (state: any) => state.userReducer.singleUser);


  useEffect(() => {
    if(singleUserData) {
      setSingleUser(singleUserData.data);
      setSuccess(true);
    }
  },[singleUserData])

  const onClose = () => {
    props.goBack();
    dispatch(clearUserData())
  }
  const DescriptionItem = ({ title, content }:any) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );
  return(
    <>
      { success ? <div>
      <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
        User Profile
      </p>

      <Row className=" spin-center">
        <p  style={{ margin: "auto"  }}>
          <img src={singleUser.avatar}/>
        </p>
      </Row>
        <Row>
        <Col span={12}>
          <DescriptionItem title="ID" content={singleUser.id} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="First Name" content={singleUser.first_name} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Last Name" content={singleUser.last_name} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Email" content={singleUser.email} />
        </Col>
      </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Button type="primary" shape="round"   size="large" block onClick={onClose}>
              Close
            </Button>
          </Col>
        </Row>
     </div> : <Result
        status="500"
        title="Sorry, something went wrong."
        extra={<Button onClick={props.goBack} type="primary">Back Home</Button>}
      />}
    </>
  )
}


export default ViewUser;
