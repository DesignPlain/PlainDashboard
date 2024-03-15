import { ClusterMaintenancePolicyWindowRecurringWindowWindow } from "./ClusterMaintenancePolicyWindowRecurringWindowWindow";

export interface ClusterMaintenancePolicyWindowRecurringWindow {
  /*
An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
this window recurs. They go on for the span of time between the start and
end time.
*/
  Recurrence?: string;

  /*
Represents an arbitrary window of time.
Structure is documented below.
*/
  Window?: ClusterMaintenancePolicyWindowRecurringWindowWindow;
}
