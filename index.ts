class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
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

const genesisBlock:Block= new Block(0,"123456","","hello",123456)

let blockchain: [Block] = [genesisBlock];

console.log(blockchain)