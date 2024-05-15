import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudfunctions_getFunctionEventTriggerFailurePolicy {
  // Whether the function should be retried on failure.
  Retry?: boolean;
}

export function Cloudfunctions_getFunctionEventTriggerFailurePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Retry",
      "Whether the function should be retried on failure.",
      [],
      true,
      false,
    ),
  ];
}
