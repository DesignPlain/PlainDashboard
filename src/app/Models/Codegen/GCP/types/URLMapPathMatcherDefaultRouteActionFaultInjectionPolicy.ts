import { URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort } from "./URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort";
import { URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay } from "./URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay";

export interface URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay;
}
