import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';
export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)

    return (
        <Result
    status="404"
    title="Oops!"
    subTitle={error.message}
    extra={<Button type="primary"><Link to={'/users'}>Back Home</Link></Button>}
  />
    );
}