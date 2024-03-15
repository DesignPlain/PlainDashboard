import { FunctionEventTriggerFailurePolicy } from "./FunctionEventTriggerFailurePolicy";

export interface FunctionEventTrigger {
  /*
Required. The name or partial URI of the resource from
which to observe events. For example, `"myBucket"` or `"projects/my-project/topics/my-topic"`
*/
  Resource?: string;

  /*
The type of event to observe. For example: `"google.storage.object.finalize"`.
See the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/) for a
full reference of accepted triggers.
*/
  EventType?: string;

  // Specifies policy for failed executions. Structure is documented below.
  FailurePolicy?: FunctionEventTriggerFailurePolicy;
}
