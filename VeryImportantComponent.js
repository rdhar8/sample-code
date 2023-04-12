import { Button } from 'antd';
import { useCallback } from 'react';

function VeryImportantComponent () {
  const text = 'Select a number from 1 to 10';

  const clickButton = useCallback(() => {
    // performs a very important function
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onClick={() => clickButton()}
      >
        {text}
      </Button>
    </div>
  );
}

export default VeryImportantComponent;