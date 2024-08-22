
import { fetchLatestBlocks } from '@/lib/rpcService';
import { GetServerSideProps } from 'next';


export const getServerSideProps: GetServerSideProps = async () => {
    const blocks = await fetchLatestBlocks();
    return {
      props: {
        blocks,
      },
    };
  };