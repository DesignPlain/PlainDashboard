import { ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom } from "./ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom";
import { ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo } from "./ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo";

export interface ServicePerimetersServicePerimeterStatusEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo;
}
