import {Key} from './key';


export interface State {
  lcd: number; /* last computation done */
  lka: Key; /* last key activated */
  loa: Key; /* last operator activated */
  vpr: number; /* val printed */
}
