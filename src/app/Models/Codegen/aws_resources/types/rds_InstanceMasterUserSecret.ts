import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface rds_InstanceMasterUserSecret {
  // The Amazon Resource Name (ARN) of the secret.
  secretArn?: string;

  // The status of the secret. Valid Values: `creating` | `active` | `rotating` | `impaired`.
  secretStatus?: string;

  /*
The ARN for the KMS encryption key. If creating an
encrypted replica, set this to the destination KMS ARN.
*/
  kmsKeyId?: string;
}

export function rds_InstanceMasterUserSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretArn",
      "The Amazon Resource Name (ARN) of the secret.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretStatus",
      "The status of the secret. Valid Values: `creating` | `active` | `rotating` | `impaired`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The ARN for the KMS encryption key. If creating an\nencrypted replica, set this to the destination KMS ARN.",
      [],
      false,
      false,
    ),
  ];
}
