import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody {
  // Header Value. Created and stored in AWS Secrets Manager.
  value?: string;

  // Specified whether the value is secret.
  isValueSecret?: boolean;

  // Header Name.
  key?: string;
}

export function cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody_GetTypes(): DynamicUIProps[] {
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
