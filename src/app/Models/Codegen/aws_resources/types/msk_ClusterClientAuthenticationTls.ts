import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface msk_ClusterClientAuthenticationTls {
  // List of ACM Certificate Authority Amazon Resource Names (ARNs).
  certificateAuthorityArns?: Array<string>;
}

export function msk_ClusterClientAuthenticationTls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificateAuthorityArns",
      "List of ACM Certificate Authority Amazon Resource Names (ARNs).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
