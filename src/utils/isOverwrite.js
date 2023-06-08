import confirm from '@inquirer/confirm';

export const isOverwrite = async () => {
  return await confirm({message: 'The target folder already exists. Do you want to overwrite it ?'})
}