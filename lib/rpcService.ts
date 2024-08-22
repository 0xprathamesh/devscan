import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);

export const fetchLatestBlocks = async (blockCount: number = 10) => {
  const latestBlockNumber = await provider.getBlockNumber();
  const blocks = [];

  for (let i = 0; i < blockCount; i++) {
    const block = await provider.getBlock(latestBlockNumber - i);
    blocks.push(block);
  }

  return blocks;
};