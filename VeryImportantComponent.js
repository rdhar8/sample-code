import { Button } from 'antd';
import { useCallback } from 'react';

function VeryImportantComponent (props) {
  const text = 'Select a number from 1 to 10';

  if (!props.visible) {
    return;
  }

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
