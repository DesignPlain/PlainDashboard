import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa {
  /*
The maximum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.
*/
  MaxModulusSize?: string;

  /*
The minimum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.
*/
  MinModulusSize?: string;
}

export function Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MaxModulusSize",
      "The maximum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the\nservice will not enforce an explicit upper bound on RSA modulus sizes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinModulusSize",
      "The minimum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the\nservice-level min RSA modulus size will continue to apply.",
      [],
      false,
      false,
    ),
  ];
}
