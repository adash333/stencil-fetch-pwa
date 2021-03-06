/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppAddHolding {}
  interface AppHome {}
  interface AppRoot {}
}

declare global {


  interface HTMLAppAddHoldingElement extends Components.AppAddHolding, HTMLStencilElement {}
  var HTMLAppAddHoldingElement: {
    prototype: HTMLAppAddHoldingElement;
    new (): HTMLAppAddHoldingElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-add-holding': HTMLAppAddHoldingElement;
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
  }
}

declare namespace LocalJSX {
  interface AppAddHolding extends JSXBase.HTMLAttributes<HTMLAppAddHoldingElement> {}
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}

  interface IntrinsicElements {
    'app-add-holding': AppAddHolding;
    'app-home': AppHome;
    'app-root': AppRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


