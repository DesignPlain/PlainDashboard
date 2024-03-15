import { AutomationSelectorTarget } from "./AutomationSelectorTarget";

export interface AutomationSelector {
  /*
Contains attributes about a target.
Structure is documented below.
*/
  Targets?: Array<AutomationSelectorTarget>;
}
