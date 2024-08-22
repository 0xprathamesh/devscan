// pages/index.tsx



interface Block {
  number: number;
  hash: string;
  timestamp: number;
  transactions: string[];
}

interface HomePageProps {
  blocks: Block[];
}

const HomePage: React.FC<HomePageProps> = ({ blocks }) => {
  return (
    <div>
      <h1>Latest Blocks</h1>
      <ul>
        {blocks.map((block) => (
          <li key={block.number}>
            <h2>Block #{block.number}</h2>
            <p>Hash: {block.hash}</p>
            <p>Timestamp: {new Date(block.timestamp * 1000).toLocaleString()}</p>
            <p>Transactions: {block.transactions.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default HomePage;
