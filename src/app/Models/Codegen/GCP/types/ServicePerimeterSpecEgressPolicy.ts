import { ServicePerimeterSpecEgressPolicyEgressFrom } from "./ServicePerimeterSpecEgressPolicyEgressFrom";
import { ServicePerimeterSpecEgressPolicyEgressTo } from "./ServicePerimeterSpecEgressPolicyEgressTo";

export interface ServicePerimeterSpecEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: ServicePerimeterSpecEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: ServicePerimeterSpecEgressPolicyEgressTo;
}
