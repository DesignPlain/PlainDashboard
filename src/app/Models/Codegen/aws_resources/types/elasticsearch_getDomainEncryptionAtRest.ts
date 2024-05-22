import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticsearch_getDomainEncryptionAtRest {
  // Whether node to node encryption is enabled.
  enabled?: boolean;

  // The KMS key id used to encrypt data at rest.
  kmsKeyId?: string;
}

export function elasticsearch_getDomainEncryptionAtRest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether node to node encryption is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The KMS key id used to encrypt data at rest.",
      [],
      true,
      false,
    ),
  ];
}
