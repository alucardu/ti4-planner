import { FC } from 'react';
import './MyComponent.css';
import { useGetHelloQuery } from '../../generated/graphql'

interface MyComponentProps {}

const MyComponent: FC<MyComponentProps> = () => {
  const { data: hello, loading: isLoading } = useGetHelloQuery();

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="MyComponent">
      data: {hello?.hello}
    </div>
  )
}

export default MyComponent