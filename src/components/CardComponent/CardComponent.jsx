import React from 'react';
import PropTypes from 'prop-types';
import { Card, Badge, Button, Rate } from 'antd';

export default function CardComponent(props) {
  return (
    <div className="col-sm-4 card-component">
      <Card title={props.title} id={props.id} style={{ width: 300 }}>
        {props.tags.length > 0 &&
          props.tags.map(tag => (
            <Badge
              className="site-badge-count-109"
              count={`Day ${tag}`}
              style={{
                border: '1px solid #6C62FF',
                backgroundColor: 'white',
                color: 'black'
              }}
            />
          ))}
        <div className="card-footer">
          <Rate disabled allowHalf defaultValue={3} />
          <Button type="primary" size="large" disabled>
            View
          </Button>
        </div>
      </Card>
    </div>
  );
}

CardComponent.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf,
  id: PropTypes.number
};

CardComponent.defaultProps = {
  title: '',
  tags: [],
  id: 0
};
