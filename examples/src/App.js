import React, { Component } from 'react';
import { LayoutProvider } from '../../src';
import FullLayout from './FullLayout';
import PanelLayout from './PanelLayout';
import MyPage from './MyPage';
import './app.scss';

const layouts = {
  panel: PanelLayout,
  full: FullLayout,
};

export default function App() {
  return (
    <LayoutProvider layouts={layouts}>
      <MyPage />
    </LayoutProvider>
  );
}
