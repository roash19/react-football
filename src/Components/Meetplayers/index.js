import React, {Component} from 'react';
import Stripes from '../../Resources/images/stripes.png';
import Reveal from 'react-reveal/Reveal';

import { Tag } from '../ui/misc';

class Meetplayers extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          })
        }}
      >
        <div className="home_meetplayers"
             style={{
               background: `#ffffff url(${Stripes})`
             }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                card
              </div>

              <div className="home_text_wrapper">
                <div>
                  <Tag
                    styleTag={{
                      backgroundColor: '#0e1731',
                      fontSize: '100px',
                      color: '#ffffff',
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Meet
                  </Tag>
                </div>

                <div>
                  <Tag
                    styleTag={{
                      backgroundColor: '#0e1731',
                      fontSize: '100px',
                      color: '#ffffff',
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    The
                  </Tag>
                </div>

                <div>
                  <Tag
                    styleTag={{
                      backgroundColor: '#0e1731',
                      fontSize: '100px',
                      color: '#ffffff',
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Players
                  </Tag>
                </div>

                <div>
                  <Tag
                    link={true}
                    linkTo="/the_team"
                    styleTag={{
                      backgroundColor: '#ffffff',
                      fontSize: '27px',
                      color: '#0e1731',
                      display: 'inline-block',
                      marginBottom: '27px',
                      border: '1px solid #0e1731'
                    }}
                  >
                    Meet them here
                  </Tag>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Reveal>
    )
  }
}

export default Meetplayers;