import { ServicePerimeterStatusEgressPolicyEgressTo } from "./ServicePerimeterStatusEgressPolicyEgressTo";
import { ServicePerimeterStatusEgressPolicyEgressFrom } from "./ServicePerimeterStatusEgressPolicyEgressFrom";

export interface ServicePerimeterStatusEgressPolicy {
  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: ServicePerimeterStatusEgressPolicyEgressTo;

  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: ServicePerimeterStatusEgressPolicyEgressFrom;
}
