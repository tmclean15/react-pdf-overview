import React from 'react';
import {
  Document,
  Page,
  View,
  Image,
  Text,
  Link,
  Canvas,
} from '@react-pdf/renderer';
import { Title } from './views';

export const DocumentTemplate = (): JSX.Element => {
  return (
    <Document>
      <Page>
        <Title>Very Important Report</Title>
      </Page>
    </Document>
  );
};
