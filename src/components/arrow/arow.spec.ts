import { TestWindow } from '@stencil/core/testing';
import { Arrow } from './arrow';

describe('arrow', () => {
  it('should build', () => {
    expect(new Arrow()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLArrowElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Arrow],
        html: '<arrow visible=true orientation="left" reasons-trigger="click hover" reasons-position="auto">'
          + '</arrow>'
      });
    });

  });
});
