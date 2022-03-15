/* /context/AppContext.js */

import React from "react";
// create auth context with default value

// set backup default for isMobileMenuClicked if none is provided in Provider 
const AppContext = React.createContext({ isMobileMenuClicked: false });
export default AppContext;