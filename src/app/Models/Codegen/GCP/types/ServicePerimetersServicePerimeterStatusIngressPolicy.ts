import { ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom } from "./ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom";
import { ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo } from "./ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo";

export interface ServicePerimetersServicePerimeterStatusIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo;
}
