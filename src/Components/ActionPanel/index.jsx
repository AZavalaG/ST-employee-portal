import React from 'react';
import PropTypes from 'prop-types';
import PersonalInfo from '../PersonalInformation';
import SearchBox from '../SearchBox';
import Footer from '../Footer';

class ColorBlock extends React.Component {
    render() {
      const { color } = this.props;
  
      return (
        <div
          style={{
            backgroundColor: color,
            width: '15rem',
            height: '97vh',
          }}
        >
            <div><PersonalInfo/></div>
            <div><SearchBox/></div>
            <div><Footer/></div>
        </div>
        
      );
    }
  }
  
  ColorBlock.propTypes = {
    color: PropTypes.string.isRequired,
  };
  
  class ActionPanel extends React.Component {
    render() {
      return (
        <div>
          <ColorBlock color="#393939" />
        </div>
      );
    }
  }

export default ActionPanel;