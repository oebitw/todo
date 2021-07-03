//////////////////////////
//////// Imports ////////
////////////////////////


//==============//
// Dependencies//
//============//


import React, { useContext } from 'react';
import { If } from 'react-if';

//==============//
// Components  //
//============//

import { AuthContext } from '../context/Auth';

///////////////////////
//////// Auth ////////
/////////////////////

function Auth(props) {
  const contextType = useContext(AuthContext);
  let okToRender =
    contextType.loggedIn && props.capability
      ? contextType.user.capabilities.includes(props.capability)
      : false;

  return (
    <>
      <If condition={okToRender}>{props.children}</If>
      <If condition={props.capability === 'guest' && !contextType.loggedIn}>
        {props.children}
      </If>
    </>
  )
}

export default Auth;