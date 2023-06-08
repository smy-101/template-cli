#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import path from "path";
import fs from "fs";
import {version,name} from "../src/const/constants.js";
import {askQuestions} from "../src/const/arguments.js";
import {isOverwrite} from "../src/utils/isOverwrite.js";
import {gitClone} from "../src/utils/gitClone.js";


export const program = new Command()

program
  .name(name)
  .description('Use cli to create template')
  .version(version)
  .on('--help', () => {
    console.log(`\r\nRun ${chalk.cyan(`qt <command> --help`)} for detailed usage of given command\r\n`)
  })

program.command('create')
  .description('Create a new project')
  .action(() => {
    askQuestions().then(res=>{
      const targetDir = path.join(process.cwd(), res.name);
      let start = true;
      if (fs.existsSync(targetDir)) {
        isOverwrite().then(isOverwrite=>{
          start = isOverwrite
        })
      }else {
        gitClone(targetDir);
      }
    })
  })

program.parse()

