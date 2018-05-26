import * as CryptoJS from 'crypto-js';
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  };

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.data = data;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '123456', '', 'hello', 123456);

let blockchain: [Block] = [genesisBlock];

const getBlockchain=():Block[]=>blockchain;

const getLatestBlock=():Block=>blockchain[blockchain.length-1];

const getNewTimeStamp=():number=>Math.round(new Date().getTime()/1000);

const createNewBlock=(data:string):Block=>{
    const previousBlock:Block=getLatestBlock();
    const newIndex:number=previousBlock.index+1;
    const nextTimestamp:number=getNewTimeStamp();
    const newHash:string = Block.calculateBlockHash(newIndex,previousBlock.hash,nextTimestamp,data)
    const newBlock:Block=new Block(newIndex,newHash,previousBlock.hash,data,nextTimestamp)
    return newBlock
}


console.log(blockchain);
console.log(createNewBlock("hello1"))
console.log(createNewBlock("hello2"))
console.log(createNewBlock("hello3"))