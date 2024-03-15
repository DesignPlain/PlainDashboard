import { ServicePerimeterStatusIngressPolicyIngressFrom } from "./ServicePerimeterStatusIngressPolicyIngressFrom";
import { ServicePerimeterStatusIngressPolicyIngressTo } from "./ServicePerimeterStatusIngressPolicyIngressTo";

export interface ServicePerimeterStatusIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: ServicePerimeterStatusIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: ServicePerimeterStatusIngressPolicyIngressTo;
}
