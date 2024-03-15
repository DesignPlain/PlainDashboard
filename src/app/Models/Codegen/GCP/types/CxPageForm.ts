import { CxPageFormParameter } from "./CxPageFormParameter";

export interface CxPageForm {
  /*
Parameters to collect from the user.
Structure is documented below.
*/
  Parameters?: Array<CxPageFormParameter>;
}
