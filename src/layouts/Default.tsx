import React from 'react';

import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from './Meta';

const Default = ({ children }: any) => (
  <div className="flex flex-col h-full antialiased text-gray-600 bg-white">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <main className="flex-layout">{children}</main>
    <Footer />
  </div>
);

export default Default;
