import { Button } from 'antd';
import { useState, useMemo } from 'react'

function VeryImportantComponent (props) {
  const text = 'Select a number from 1 to 10'

  return (
    <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
      <Button>
        {text}
      </Button>
    </div>
  );
}

export default VeryImportantComponent;