import {render} from '@testing-library/react';
import SopItem from '.';

test('Render Component SopItem',()=>{
    render (<SopItem user={{name: 'test'}}/>)
})