import {render} from '@testing-library/react';
import SopManagement from '.';

test('Render Component SOPManagement',()=>{
    render (<SopManagement session={{user: {name: 'test'}}}/>)
})