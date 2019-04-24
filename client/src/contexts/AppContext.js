import React from 'react';

const context = React.createContext();

export default context;
export const Provider = context.Provider;
export const Consumer = context.Consumer;
