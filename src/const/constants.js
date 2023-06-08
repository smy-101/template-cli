import * as fs from "fs";
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const config = loadJSON('../../package.json');

const name = config.name;
const version = config.version;

export {name,version}

//仅支持node 17以上版本先不使用
// import config from '../../package.json' assert { type: "json" };
// const name = config.name;
// const version = config.version;
