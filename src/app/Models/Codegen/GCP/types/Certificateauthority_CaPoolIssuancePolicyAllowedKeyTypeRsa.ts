import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa {
  /*
The maximum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.
*/
  maxModulusSize?: string;

  /*
The minimum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.
*/
  minModulusSize?: string;
}

export function certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "minModulusSize",
      "The minimum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the\nservice-level min RSA modulus size will continue to apply.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxModulusSize",
      "The maximum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the\nservice will not enforce an explicit upper bound on RSA modulus sizes.",
      [],
      false,
      false,
    ),
  ];
}
