import * as React from "react"
import {Table, Popconfirm, Skeleton, Button, message, Drawer, Result} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {IRootReducer} from "../../../store/reducers";
import {useEffect, useState} from "react";
import {getListUserData, deleteUserData, clearUserData, viewUserData} from "../../../store/actions/UsersActions"
import ViewUser from "../ViewUser/ViewUser";
import AddUser from "../AddUser/AddUser";
import "./userList.css"
import {PlusCircleOutlined} from '@ant-design/icons';

const ListUser = () => {
  const dispatch = useDispatch()
  const [userList, setUserList] = useState([]);
  const [spin, setSpin] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const [contentType, setContentType]: any = useState(undefined);
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'LastName',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Action',
      render: (data: any) => (
        <>
          <Button type="dashed" size="middle" onClick={() => viewUser(data.id)}>
            VIEW
          </Button>

          <Button type="dashed" size="middle" onClick={() => updateForm(data.id)}>
            UPDATE
          </Button>
          <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => deleteUser(data.id)}>
            <Button type="dashed" size="middle">
              DELETE
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const userReducer = useSelector((state: any) => state.userReducer.userList);
  const deletedUser = useSelector((state: any) => state.userReducer.deletedUser);
  const errorMessage = useSelector((state: any) => state.userReducer.errorMessage);

  useEffect(() => {
    setSpin(true);
    dispatch(getListUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userReducer) {
      setUserList(userReducer.data);
      setSpin(false);
    }
  }, [userReducer])

  const deleteUser = (id: number) => {
    dispatch(deleteUserData(id))
  }

  useEffect(() => {
    if (deletedUser === "success") {
      message.success('User Deleted Successfully');
      dispatch(getListUserData());
    }
    if (errorMessage) {
      message.error('Something went wrong');
    }
  }, [deletedUser, errorMessage])

  const viewUser = (id: number) => {
    dispatch(viewUserData(id))
    setDrawerContent("view");
    setDrawer(true);
  }
  const addForm = () => {
    setDrawerContent("add");
    setDrawer(true);
  }
  const updateForm = (id: number) => {
    dispatch(viewUserData(id))
    setDrawerContent("update");
    setDrawer(true);
  }
  const onCloseDrawer = () => {
    dispatch(clearUserData())
    setDrawer(false)
  }

  const setDrawerContent = (contentType: string) => {
    switch (contentType) {
      case "view": {
        setContentType(<ViewUser goBack={() => setDrawer(false)}/>);
        break
      }
      case "add": {
        setContentType(<AddUser goBack={() => setDrawer(false)}/>);
        break
      }
      case "update": {
        setContentType(<AddUser goBack={() => setDrawer(false)}/>);
        break
      }
      default : {
        setContentType(<Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary" onClick={() => setDrawer(false)}>Back Home</Button>}
        />);
      }
    }
  }

  return (<>
      {spin ?
        <Skeleton active paragraph={{rows: 15}}/> :
        <>
          <div style={{float: "right"}}>
            <Button type="dashed" onClick={addForm} shape="round" icon={<PlusCircleOutlined/>} size="large">ADD USER</Button>
          </div>
          <br/>
          <br/>
          <Table columns={columns} dataSource={userList}/>
        </>
      }
      <Drawer
        width={640}
        placement="right"
        visible={drawer}
        closable={false}
      >
        {contentType}
      </Drawer>

    </>
  );
}

export default ListUser;
