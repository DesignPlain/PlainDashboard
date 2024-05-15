import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig {
  /*
The Cloud KMS resource identifier of the customer-managed
encryption key used to protect a resource, such as a disks.
It has the following format:
`projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}`
*/
  KmsKey?: string;
}

export function Notebooks_RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKey",
      "The Cloud KMS resource identifier of the customer-managed\nencryption key used to protect a resource, such as a disks.\nIt has the following format:\n`projects/{PROJECT_ID}/locations/{REGION}/keyRings/\n{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}`",
      [],
      false,
      false,
    ),
  ];
}
