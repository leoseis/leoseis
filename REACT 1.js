 import React, { useState } from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';

const name = 'Nora Emelieze';
const el = <h1> Hello {name} my dear daughter</h1>

ReactDOM.render(
el,
document.getElementById('root')
);