import myScoreItems from './modules/function.js';
import './style.css';

for (let i = 1; i < myScoreItems.length; i += 2) {
  myScoreItems[i].style.backgroundColor = '#dddddd';
}