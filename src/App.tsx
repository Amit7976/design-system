import './App.css';
import CheckboxVariant from './CheckboxVariant';
import { Toast } from './components/Toast/Toast';
import { ToastVariantDemo } from './ToastVariant';
// import TextInputVariants from './TextInputVariants';
// import { TypographyVariants } from './TypographyVariants';

function App() {

  return (
    <>
      <div className="p-6 bg-white dark:bg-neutral-900 min-h-screen">
        {/* <TypographyVariants />
        <TextInputVariants /> */}
        {/* <CheckboxVariant /> */}

        <ToastVariantDemo />

      </div>
    </>
  )
}

export default App
