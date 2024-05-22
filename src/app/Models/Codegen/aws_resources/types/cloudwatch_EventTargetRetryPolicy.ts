import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventTargetRetryPolicy {
  // The age in seconds to continue to make retry attempts.
  maximumEventAgeInSeconds?: number;

  // maximum number of retry attempts to make before the request fails
  maximumRetryAttempts?: number;
}

export function cloudwatch_EventTargetRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumEventAgeInSeconds",
      "The age in seconds to continue to make retry attempts.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumRetryAttempts",
      "maximum number of retry attempts to make before the request fails",
      [],
      false,
      false,
    ),
  ];
}
