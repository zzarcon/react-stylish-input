import * as React from 'react';
import {Component, ReactElement, SyntheticEvent} from 'react';

export interface StylishInputProps {
  children: ReactElement<any>;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
}

export interface StylishInputState {
  
}

const inputStyle = {display: 'none'};

export class StylishInput extends Component<StylishInputProps, StylishInputState> {
  inputRef?: HTMLInputElement;

  saveInputRef = (e: HTMLInputElement) => {
    this.inputRef = e;
  }

  onClick = () => {
    if (!this.inputRef) return;

    this.inputRef.click();
  }

  render() {
    const {children, onChange} = this.props;
    const clonedChildren = React.cloneElement(children, {
      onClick: this.onClick
    });

    return (
      <div>
        <input type="file" style={inputStyle} ref={this.saveInputRef} onChange={onChange} />
        {clonedChildren}
      </div>
    );
  }
}