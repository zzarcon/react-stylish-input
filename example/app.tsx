import * as React from 'react';
import {Component, SyntheticEvent} from 'react';
import AttachmentIcon from '@atlaskit/icon/glyph/attachment';
import Button from '@atlaskit/button';
import {GHCorner} from 'react-gh-corner';
import {AppWrapper} from './styled';
import { StylishInput } from '../src';

export interface AppState {
  
}

const repoUrl = 'https://github.com/zzarcon/react-stylish-input';

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0];
    console.log('onChange', file);
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
        <StylishInput onChange={this.onChange}>
          <Button appearance="primary" iconBefore={<AttachmentIcon label="clip" />} >
            Pick file
          </Button>
        </StylishInput>
      </AppWrapper>
    )
  }
}