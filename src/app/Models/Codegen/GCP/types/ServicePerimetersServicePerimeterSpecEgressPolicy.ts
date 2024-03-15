import { ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom } from "./ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom";
import { ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo } from "./ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo";

export interface ServicePerimetersServicePerimeterSpecEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: ServicePerimetersServicePerimeterSpecEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo;
}
