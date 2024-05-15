import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Kms_CryptoKeyPrimary {
  // The resource name for the CryptoKey.
  Name?: string;

  /*
(Output)
The current state of the CryptoKeyVersion.
*/
  State?: string;
}

export function Kms_CryptoKeyPrimary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nThe current state of the CryptoKeyVersion.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The resource name for the CryptoKey.",
      [],
      false,
      false,
    ),
  ];
}
