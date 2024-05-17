import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionSecurityPolicyUserDefinedField {
  /*
The base relative to which 'offset' is measured. Possible values are:
- IPV4: Points to the beginning of the IPv4 header.
- IPV6: Points to the beginning of the IPv6 header.
- TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
- UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
Possible values are: `IPV4`, `IPV6`, `TCP`, `UDP`.
*/
  Base?: string;

  /*
If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.
Encoded as a hexadecimal number (starting with "0x").
The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.
*/
  Mask?: string;

  // The name of this field. Must be unique within the policy.
  Name?: string;

  // Offset of the first byte of the field (in network byte order) relative to 'base'.
  Offset?: number;

  // Size of the field in bytes. Valid values: 1-4.
  Size?: number;
}

export function Compute_RegionSecurityPolicyUserDefinedField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Base",
      "The base relative to which 'offset' is measured. Possible values are:\n- IPV4: Points to the beginning of the IPv4 header.\n- IPV6: Points to the beginning of the IPv6 header.\n- TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.\n- UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.\nPossible values are: `IPV4`, `IPV6`, `TCP`, `UDP`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mask",
      'If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.\nEncoded as a hexadecimal number (starting with "0x").\nThe last byte of the field (in network byte order) corresponds to the least significant byte of the mask.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of this field. Must be unique within the policy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Offset",
      "Offset of the first byte of the field (in network byte order) relative to 'base'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Size",
      "Size of the field in bytes. Valid values: 1-4.",
      [],
      false,
      false,
    ),
  ];
}
