import { getFunctionEventTriggerFailurePolicy } from "./getFunctionEventTriggerFailurePolicy";

export interface getFunctionEventTrigger {
  /*
The type of event to observe. For example: `"google.storage.object.finalize"`.
See the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/)
for a full reference of accepted triggers.
*/
  EventType?: string;

  // Policy for failed executions. Structure is documented below.
  FailurePolicies?: Array<getFunctionEventTriggerFailurePolicy>;

  // The name of the resource whose events are being observed, for example, `"myBucket"`
  Resource?: string;
}
