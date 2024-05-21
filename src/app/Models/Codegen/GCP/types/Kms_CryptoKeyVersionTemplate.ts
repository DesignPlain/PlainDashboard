import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kms_CryptoKeyVersionTemplate {
  /*
The algorithm to use when creating a version based on this template.
See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.
*/
  algorithm?: string;

  // The protection level to use when creating a version based on this template. Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".
  protectionLevel?: string;
}

export function kms_CryptoKeyVersionTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "algorithm",
      "The algorithm to use when creating a version based on this template.\nSee the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protectionLevel",
      'The protection level to use when creating a version based on this template. Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".',
      [],
      false,
      true,
    ),
  ];
}
