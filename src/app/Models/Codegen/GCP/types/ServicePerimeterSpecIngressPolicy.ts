import { ServicePerimeterSpecIngressPolicyIngressFrom } from "./ServicePerimeterSpecIngressPolicyIngressFrom";
import { ServicePerimeterSpecIngressPolicyIngressTo } from "./ServicePerimeterSpecIngressPolicyIngressTo";

export interface ServicePerimeterSpecIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: ServicePerimeterSpecIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: ServicePerimeterSpecIngressPolicyIngressTo;
}
