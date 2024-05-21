import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfunctions_FunctionEventTriggerFailurePolicy {
  // Whether the function should be retried on failure. Defaults to `false`.
  retry?: boolean;
}

export function cloudfunctions_FunctionEventTriggerFailurePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "retry",
      "Whether the function should be retried on failure. Defaults to `false`.",
      [],
      true,
      false,
    ),
  ];
}
