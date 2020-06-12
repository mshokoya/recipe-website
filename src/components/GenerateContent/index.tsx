import {Fragment} from 'react';

export const GenerateContent = ({textString}: {textString: string}) => (
<p>
  {textString.split('\n').map((item, idx ) => (
    <Fragment key={idx}>
      {item}
      <br/>
    </Fragment>
  ))}
</p>
)