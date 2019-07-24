import { Invoker } from './invoker';
import { Article } from './receivers';
import { SetNameCommand, SetDesCommand } from './commands';

const invoker = new Invoker;
const article = new Article;

invoker.doSmth(new SetNameCommand(article, 'name'));
console.log(article.name, '\n');

invoker.doSmth(new SetDesCommand(article, 'bla bla bla'));
console.log(article.description, '\n');
