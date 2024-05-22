import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_getDomainEncryptionAtRest {
  // Enabled disabled toggle for off-peak update window
  enabled?: boolean;

  // KMS key id used to encrypt data at rest.
  kmsKeyId?: string;
}

export function opensearch_getDomainEncryptionAtRest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled disabled toggle for off-peak update window",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "KMS key id used to encrypt data at rest.",
      [],
      true,
      false,
    ),
  ];
}
