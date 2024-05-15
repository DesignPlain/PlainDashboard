import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctions_getFunctionEventTriggerFailurePolicy,
  Cloudfunctions_getFunctionEventTriggerFailurePolicy_GetTypes,
} from "./Cloudfunctions_getFunctionEventTriggerFailurePolicy";

export interface Cloudfunctions_getFunctionEventTrigger {
  // The name of the resource whose events are being observed, for example, `"myBucket"`
  Resource?: string;

  /*
The type of event to observe. For example: `"google.storage.object.finalize"`.
See the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/)
for a full reference of accepted triggers.
*/
  EventType?: string;

  // Policy for failed executions. Structure is documented below.
  FailurePolicies?: Array<Cloudfunctions_getFunctionEventTriggerFailurePolicy>;
}

export function Cloudfunctions_getFunctionEventTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Resource",
      'The name of the resource whose events are being observed, for example, `"myBucket"`',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EventType",
      'The type of event to observe. For example: `"google.storage.object.finalize"`.\nSee the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/)\nfor a full reference of accepted triggers.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "FailurePolicies",
      "Policy for failed executions. Structure is documented below.",
      Cloudfunctions_getFunctionEventTriggerFailurePolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
