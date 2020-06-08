import 'antd/dist/antd.css';
// import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../components/WithApolloClient';

// export default class MyApp extends App {
//   render(){
//     const {Component, pageProps} = this.props;
//     const apolloClient = useApollo(pageProps.initialApolloState)
//     return (
//       <ApolloProvider client={apolloClient}>
//         <Component {...pageProps} />
//       </ApolloProvider>
//     );
//   };
// };

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}