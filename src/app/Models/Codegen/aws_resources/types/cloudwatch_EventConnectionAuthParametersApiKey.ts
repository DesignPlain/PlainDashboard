import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventConnectionAuthParametersApiKey {
  // Header Name.
  key?: string;

  // Header Value. Created and stored in AWS Secrets Manager.
  value?: string;
}

export function cloudwatch_EventConnectionAuthParametersApiKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Header Value. Created and stored in AWS Secrets Manager.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Header Name.",
      [],
      true,
      false,
    ),
  ];
}
