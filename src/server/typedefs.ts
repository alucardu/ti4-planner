import {gql} from '@apollo/client';

const Hello = gql`
  query getHello {
    hello
  }
`;

const queries = { Hello };

export default queries;