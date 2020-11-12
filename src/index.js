import 'babel-polyfill'; // requirements async await deploy heroku
import app from './app'
import './database'

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('Server listeng port '+ app.get('port'));
});