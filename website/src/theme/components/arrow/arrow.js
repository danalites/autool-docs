import React from 'react';

export default function Arrow(props) {

  const component = 'shift-arrow';

  const {
    componentClass,
  } = props;

  return (
    <svg
    className={`
      ${component}
      ${componentClass}__${component}
    `}
      xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fill="#0C3636" d="M12.536 18.228l6.364-6.364L12.536 5.5l-1.414 1.414 3.912 3.914H5.172v2h9.936l-3.986 3.986 1.414 1.414z"/></svg>
  );
}
