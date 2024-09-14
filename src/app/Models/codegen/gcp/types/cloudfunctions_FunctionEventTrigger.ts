import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfunctions_FunctionEventTriggerFailurePolicy,
  cloudfunctions_FunctionEventTriggerFailurePolicy_GetTypes,
} from "./cloudfunctions_FunctionEventTriggerFailurePolicy";

export interface cloudfunctions_FunctionEventTrigger {
  /*
The type of event to observe. For example: `"google.storage.object.finalize"`.
See the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/) for a
full reference of accepted triggers.
*/
  eventType?: string;

  // Specifies policy for failed executions. Structure is documented below.
  failurePolicy?: cloudfunctions_FunctionEventTriggerFailurePolicy;

  /*
Required. The name or partial URI of the resource from
which to observe events. For example, `"myBucket"` or `"projects/my-project/topics/my-topic"`
*/
  resource?: string;
}

export function cloudfunctions_FunctionEventTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventType",
      'The type of event to observe. For example: `"google.storage.object.finalize"`.\nSee the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/) for a\nfull reference of accepted triggers.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "failurePolicy",
      "Specifies policy for failed executions. Structure is documented below.",
      () => cloudfunctions_FunctionEventTriggerFailurePolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resource",
      'Required. The name or partial URI of the resource from\nwhich to observe events. For example, `"myBucket"` or `"projects/my-project/topics/my-topic"`',
      () => [],
      true,
      false,
    ),
  ];
}
