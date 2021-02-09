import React from "react";
import {useHistory} from "react-router";
import { GithubOutlined      } from '@ant-design/icons';
import { Result, Button } from 'antd';
const Homes = () => {
    const history = useHistory();
    return(<div >
        <Result
            icon={<GithubOutlined style={{fontSize:"500px", boxShadow:"0 30px 80px 10px rgba(0,0,0,.2)",borderRadius:"300px"}}/>}
            title="Hey There ! Welcome to my Demo app developed using Redux,Routing,Ant Design and TYPESCRIPT"
            extra={[
                <Button type="primary" key="console" onClick={() => { history.push("/login") }}>
                    Login
                </Button>,
            ]}
        />
    </div>)
}

export default Homes;