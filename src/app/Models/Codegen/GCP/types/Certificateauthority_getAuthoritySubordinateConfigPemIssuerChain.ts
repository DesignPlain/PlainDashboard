import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_getAuthoritySubordinateConfigPemIssuerChain {
  // Expected to be in leaf-to-root order according to RFC 5246.
  PemCertificates?: Array<string>;
}

export function Certificateauthority_getAuthoritySubordinateConfigPemIssuerChain_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PemCertificates",
      "Expected to be in leaf-to-root order according to RFC 5246.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
