import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';


import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';



class Main extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
      };
    }
}