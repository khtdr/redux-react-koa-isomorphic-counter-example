
import nunjucks from 'nunjucks';
nunjucks.configure('views', { autoescape: true });

export default function () {
  return function* () {
    this.body = nunjucks.render('index.html', {
      appString: '', env: process.env
    });
  };
}

