import { input } from '@inquirer/prompts';
import select, {Separator} from '@inquirer/select';

export const askQuestions = async () => {
  const name = await input({ message: 'Enter project name' });
  const template = await select({
    message: 'Select a template',
    choices: [
      {
        name: 'react',
        value: 'react',
        description: 'Choose React as the template basis',
      },
      new Separator(),
      {
        name: 'vue',
        value: 'vue',
        description: 'Choose Vue as the template basis',
        disabled: true,
      },
      {
        name: 'preact',
        value: 'preact',
        disabled: true,
      },
    ],
  })
  return {template,name}
}