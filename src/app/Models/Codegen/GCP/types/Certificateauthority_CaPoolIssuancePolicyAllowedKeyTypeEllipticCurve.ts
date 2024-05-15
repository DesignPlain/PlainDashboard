import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve {
  /*
The algorithm used.
Possible values are: `ECDSA_P256`, `ECDSA_P384`, `EDDSA_25519`.
*/
  SignatureAlgorithm?: string;
}

export function Certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SignatureAlgorithm",
      "The algorithm used.\nPossible values are: `ECDSA_P256`, `ECDSA_P384`, `EDDSA_25519`.",
      [],
      true,
      false,
    ),
  ];
}
