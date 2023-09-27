import React from 'react';

const MessageParser = ({ children, actions }) => {
  console.log(children);
  const { checker } = children.props.state;
  const parse = () => {
    if (checker === "age") {
      actions.ageMessage();
    }
    if (checker === "thank") {
      actions.thankYouMessage();
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;