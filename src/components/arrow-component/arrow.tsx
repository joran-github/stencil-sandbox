import { Component, h, State, Prop, Element, getAssetPath } from '@stencil/core';
import $ from "jquery";
window['jQuery'] = $;
import 'bootstrap';


@Component({
  tag: 'arrow-component',
  styleUrl: 'arrow.scss',
  assetsDirs: ['assets']
})
export class Arrow {

  @Prop() arrowId: string;

  @Prop() visible: boolean = true;

  @Prop() arrowImage: string = 'arrow-red.png';

  @Prop() RedArrowImage: string = 'arrow-green.png';

  @Prop() UndefinedArrowImage: string = 'arrow-grey.png';

  @Prop() orientation?: 'top' | 'bottom' | 'right' | 'left';

  @Prop() reasonsTrigger?: 'click' | 'hover' | 'focus' | 'manual';

  @Prop() reasonsPosition?: 'top' | 'bottom' | 'right' | 'left' | 'auto' = 'auto';

  @State() arrowState?: 'undefined' | 'blocking' | 'permit' = 'undefined';

  @Element() arrow: HTMLElement;


  componentDidLoad() {
    this.updateStyle();
  }

  componentWillUpdate() {
    this.updateStyle();
  }


  private updateStyle() {
    // Get blocking point  content
    let arrowContent = this.arrow.getElementsByClassName("arrow-point");

    arrowContent[0].setAttribute("style", "background-image: url('"+ getAssetPath('./assets/imgs/this.arrowImage')+"')" );
    arrowContent[0].setAttribute("style", "background-image: url('./assets/imgs/this.arrowImage')" );
  }

  /**
   * Get the component class
   */
  private getOrientationClass() {

    let orientationClass: string;

    // Determine class
    switch (this.orientation) {
      case 'top':
          orientationClass = 'rotate-up';
          break;
      case 'bottom':
          orientationClass = 'rotate-down';
          break;
      case 'right':
          orientationClass = 'rotate-right';
          break;
      case 'left':
          orientationClass = 'rotate-left';
          break;
      default:
          orientationClass = '';
          break;
    }

    return orientationClass;
  }

    /**
   * Get blocking point visibility
   */
  private getVisibilityClass() {
    return this.visible?"visible":"hidden";
  }

  /**
   * Get blocking point state
   */
  private getStateClass( ) {
    let arrowStateClassName;

    switch (this.arrowState) {
      case 'permit':
        arrowStateClassName = 'state-not-blocking';
        break;
      case 'blocking':
        arrowStateClassName = 'state-blocking';
        break;
      default:
        arrowStateClassName = 'state-undefined';
          break;
    }

    return arrowStateClassName;
  }

  private getArrowClass() {
    let arowClass = 'arrow-point';
    arowClass += ' ' + this.getVisibilityClass();
    arowClass += ' ' + this.getStateClass();
    arowClass += ' ' + this.getOrientationClass();
    return arowClass;
  }

  render() {
    return (
          <div id={this.arrowId} class={this.getArrowClass()} >
          </div>
    );
  }
}
