import { FC } from 'react';
import './MyComponent.css';
import { useGetHelloQuery, useSendMailLazyQuery } from '../../generated/queries'

interface MyComponentProps {}

const MyComponent: FC<MyComponentProps> = () => {
  const { data: hello, loading: isLoading } = useGetHelloQuery();
  const [sendMail, { called, loading: isMailing }] = useSendMailLazyQuery();

  if (called && isMailing) return <p>Loading ...</p>

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <div className="MyComponent">
        data: {hello?.getHello}
      </div>
      <button onClick={() => sendMail()}>Send mail</button>
    </>
  )
}

export default MyComponent