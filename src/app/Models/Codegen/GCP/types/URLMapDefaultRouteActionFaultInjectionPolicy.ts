import { URLMapDefaultRouteActionFaultInjectionPolicyAbort } from "./URLMapDefaultRouteActionFaultInjectionPolicyAbort";
import { URLMapDefaultRouteActionFaultInjectionPolicyDelay } from "./URLMapDefaultRouteActionFaultInjectionPolicyDelay";

export interface URLMapDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: URLMapDefaultRouteActionFaultInjectionPolicyDelay;

  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: URLMapDefaultRouteActionFaultInjectionPolicyAbort;
}
