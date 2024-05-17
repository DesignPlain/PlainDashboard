import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve,
  Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve";
import {
  Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa,
  Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa";

export interface Certificateauthority_CaPoolIssuancePolicyAllowedKeyType {
  /*
Represents an allowed Elliptic Curve key type.
Structure is documented below.
*/
  EllipticCurve?: Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve;

  /*
Describes an RSA key that may be used in a Certificate issued from a CaPool.
Structure is documented below.
*/
  Rsa?: Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa;
}

export function Certificateauthority_CaPoolIssuancePolicyAllowedKeyType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EllipticCurve",
      "Represents an allowed Elliptic Curve key type.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Rsa",
      "Describes an RSA key that may be used in a Certificate issued from a CaPool.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeRsa_GetTypes(),
      false,
      false,
    ),
  ];
}
