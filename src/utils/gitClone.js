import { simpleGit } from 'simple-git';
import ora from "ora";
import chalk from "chalk";

const git = simpleGit();
const repoUrl = 'git@github.com:smy-101/vite-template.git';
const branch = 'template-1';

//下载远程仓库模板
export const gitClone = (targetPath) => {
  const downSpinner = ora('正在下载模板...').start();
  return new Promise((resolve, reject) => {
    git.clone(repoUrl, targetPath,{'--branch': 'template-1'})
      .then(() => {
        downSpinner.succeed(chalk.green('模板下载成功！'));
        resolve();
      })
      .catch((err) => {
        downSpinner.fail();
        // console.log('err', chalk.red(err));
        reject(chalk.red(err));
      });
  })
}


