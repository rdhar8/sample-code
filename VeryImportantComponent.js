import { Alert } from '@nutanix-ui/prism-reactjs';
import { useGetTranslation } from '../../hooks/useGetTranslation';

function VeryImportantComponent () {
  const { i18n__T } = useGetTranslation();
  return (
    <Alert
      type={'info'}
      data-test-id={'type-info'}
      message={i18n__T('Alert_Message')}
    />
  );
}

export default VeryImportantComponent;
