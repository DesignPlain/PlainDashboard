import { ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom } from "./ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom";
import { ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo } from "./ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo";

export interface ServicePerimetersServicePerimeterSpecIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo;
}
