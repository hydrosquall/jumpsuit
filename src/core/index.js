import React from 'react'
import Router, { Route, IndexRoute, Link } from 'react-router'

import Component from './component'
import Render from './render'
import State from './state'
import Goto from './routing'

global.React = React
module.exports = {
  // Core
  Component,
  Render,
  State,

  // Router
  Router,
  Route,
  IndexRoute,
  Goto,
  Link
}
