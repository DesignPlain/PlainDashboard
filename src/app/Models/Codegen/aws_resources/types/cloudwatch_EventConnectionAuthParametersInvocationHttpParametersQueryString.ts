import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString {
  // Specified whether the value is secret.
  isValueSecret?: boolean;

  // Header Name.
  key?: string;

  // Header Value. Created and stored in AWS Secrets Manager.
  value?: string;
}

export function cloudwatch_EventConnectionAuthParametersInvocationHttpParametersQueryString_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Header Value. Created and stored in AWS Secrets Manager.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isValueSecret",
      "Specified whether the value is secret.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Header Name.",
      [],
      false,
      false,
    ),
  ];
}
