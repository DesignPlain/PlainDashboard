import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve,
  certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve";
import {
  certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa,
  certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa";

export interface certificateauthority_CaPoolIssuancePolicyAllowedKeyType {
  /*
Represents an allowed Elliptic Curve key type.
Structure is documented below.
*/
  ellipticCurve?: certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve;

  /*
Describes an RSA key that may be used in a Certificate issued from a CaPool.
Structure is documented below.
*/
  rsa?: certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa;
}

export function certificateauthority_CaPoolIssuancePolicyAllowedKeyType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ellipticCurve",
      "Represents an allowed Elliptic Curve key type.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rsa",
      "Describes an RSA key that may be used in a Certificate issued from a CaPool.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa_GetTypes(),
      false,
      false,
    ),
  ];
}
