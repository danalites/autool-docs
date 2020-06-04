/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

function Foot() {

  const component = 'foot';

  const InfinumLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="14"><path fill="#E84E4E" fillRule="evenodd" d="M6.755 10.889c2.145 0 3.87-1.977 5.25-3.68C10.435 5 9.093 3.026 6.564 3.026 4.494 3.025 3 4.652 3 7.092c0 2.053 1.571 3.797 3.678 3.797h.076zm20.857-4.065c0 4.46-3.22 7.09-6.59 7.09-2.16 0-4.545-.84-7.197-4.46-2.045 2.554-4.129 4.46-7.349 4.46-3.37 0-6.476-2.745-6.476-6.9S2.992 0 6.855 0c3.03 0 4.958 1.679 6.965 4.346C15.41 2.556 17.612-.036 21.249 0c3.522.038 6.363 2.669 6.363 6.785v.039zm-6.755-3.8c-2.145 0-3.87 1.977-5.25 3.68 1.57 2.21 2.912 4.185 5.441 4.185 2.07 0 3.563-1.627 3.563-4.068 0-2.052-1.571-3.796-3.678-3.796h-.076z"/></svg>
  );

  return (
    <div className={component}>
      <div className={`${component}__container`}>
        <div className={`${component}__columns`}>
          <div className={`${component}__column ${component}__column--left`}>
            {'Made with 🧡 by '}
            <a href="https://eightshift.com/" className={`${component}__link`}>
              {'Eightshift'}
            </a>
            {' team'}
          </div>
          <div className={`${component}__column ${component}__column--right`}>
            <span className={`${component}__copy`}>
              {'© Eightshift. All rights reserved'}
            </span>
            <span className={`${component}__logo-wrap`}>
              {'Part of '}
              <a href="https://eightshift.com/" className={`${component}__logo`}>
                <InfinumLogo />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
