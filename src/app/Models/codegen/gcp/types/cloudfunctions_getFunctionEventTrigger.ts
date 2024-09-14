import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfunctions_getFunctionEventTriggerFailurePolicy,
  cloudfunctions_getFunctionEventTriggerFailurePolicy_GetTypes,
} from "./cloudfunctions_getFunctionEventTriggerFailurePolicy";

export interface cloudfunctions_getFunctionEventTrigger {
  // Policy for failed executions. Structure is documented below.
  failurePolicies?: Array<cloudfunctions_getFunctionEventTriggerFailurePolicy>;

  // The name of the resource whose events are being observed, for example, `"myBucket"`
  resource?: string;

  /*
The type of event to observe. For example: `"google.storage.object.finalize"`.
See the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/)
for a full reference of accepted triggers.
*/
  eventType?: string;
}

export function cloudfunctions_getFunctionEventTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "failurePolicies",
      "Policy for failed executions. Structure is documented below.",
      () => cloudfunctions_getFunctionEventTriggerFailurePolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resource",
      'The name of the resource whose events are being observed, for example, `"myBucket"`',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventType",
      'The type of event to observe. For example: `"google.storage.object.finalize"`.\nSee the documentation on [calling Cloud Functions](https://cloud.google.com/functions/docs/calling/)\nfor a full reference of accepted triggers.',
      () => [],
      true,
      false,
    ),
  ];
}
