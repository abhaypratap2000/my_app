import React from 'react';

export interface RouteType {
  name: string;
  path: string;
  Component: React.FC;
}