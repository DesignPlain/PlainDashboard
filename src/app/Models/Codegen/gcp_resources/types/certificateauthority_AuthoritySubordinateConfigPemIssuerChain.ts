import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface certificateauthority_AuthoritySubordinateConfigPemIssuerChain {
  // Expected to be in leaf-to-root order according to RFC 5246.
  pemCertificates?: Array<string>;
}

export function certificateauthority_AuthoritySubordinateConfigPemIssuerChain_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pemCertificates",
      "Expected to be in leaf-to-root order according to RFC 5246.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
