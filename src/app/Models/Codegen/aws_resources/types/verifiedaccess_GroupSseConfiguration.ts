import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface verifiedaccess_GroupSseConfiguration {
  //
  customerManagedKeyEnabled?: boolean;

  // ARN of the KMS key to use.
  kmsKeyArn?: string;
}

export function verifiedaccess_GroupSseConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "customerManagedKeyEnabled",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "ARN of the KMS key to use.",
      [],
      false,
      false,
    ),
  ];
}
