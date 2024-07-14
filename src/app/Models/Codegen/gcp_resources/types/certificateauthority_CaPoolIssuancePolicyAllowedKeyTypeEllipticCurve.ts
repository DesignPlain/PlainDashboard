import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve {
  /*
The algorithm used.
Possible values are: `ECDSA_P256`, `ECDSA_P384`, `EDDSA_25519`.
*/
  signatureAlgorithm?: string;
}

export function certificateauthority_CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "signatureAlgorithm",
      "The algorithm used.\nPossible values are: `ECDSA_P256`, `ECDSA_P384`, `EDDSA_25519`.",
      [],
      true,
      false,
    ),
  ];
}
