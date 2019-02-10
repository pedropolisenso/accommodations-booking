import { connect } from 'react-redux';

import App from '../../components/App';

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
