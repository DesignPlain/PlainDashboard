import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctions_FunctionEventTriggerFailurePolicy,
  Cloudfunctions_FunctionEventTriggerFailurePolicy_GetTypes,
} from "./Cloudfunctions_FunctionEventTriggerFailurePolicy";

export interface Cloudfunctions_FunctionEventTrigger {
  // Specifies policy for failed executions. Structure is documented below.
  FailurePolicy?: Cloudfunctions_FunctionEventTriggerFailurePolicy;

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
}

export function Cloudfunctions_FunctionEventTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Resource",
      'Required. The name or partial URI of the resource from\nwhich to observe events. For example, `"myBucket"` or `"projects/my-project/topics/my-topic"`',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EventType",
      'The type of event to observe. For example: `"google.storage.object.finalize"`.\nSee the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/) for a\nfull reference of accepted triggers.',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FailurePolicy",
      "Specifies policy for failed executions. Structure is documented below.",
      Cloudfunctions_FunctionEventTriggerFailurePolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
