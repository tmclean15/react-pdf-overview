import { PDFViewer } from '@react-pdf/renderer';
import { DocumentTemplate } from '@react-pdf-overview/templates';

export const App = () => {
  return (
    <PDFViewer
      style={{
        height: '80vh',
        width: '50vw',
      }}
    >
      <DocumentTemplate />
    </PDFViewer>
  );
};

export default App;
