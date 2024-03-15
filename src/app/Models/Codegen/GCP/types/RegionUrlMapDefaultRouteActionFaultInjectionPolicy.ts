import { RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort } from "./RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort";
import { RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay } from "./RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay";

export interface RegionUrlMapDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay;
}
