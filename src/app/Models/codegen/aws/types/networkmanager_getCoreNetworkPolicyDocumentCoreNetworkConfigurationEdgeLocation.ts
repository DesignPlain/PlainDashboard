import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation {
  //
  location?: string;

  // ASN of the Core Network Edge in an AWS Region. By default, the ASN will be a single integer automatically assigned from `asn_ranges`
  asn?: string;

  // The local CIDR blocks for this Core Network Edge for AWS Transit Gateway Connect attachments. By default, this CIDR block will be one or more optional IPv4 and IPv6 CIDR prefixes auto-assigned from `inside_cidr_blocks`.
  insideCidrBlocks?: Array<string>;
}

export function networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'location', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'asn',
      'ASN of the Core Network Edge in an AWS Region. By default, the ASN will be a single integer automatically assigned from `asn_ranges`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'insideCidrBlocks',
      'The local CIDR blocks for this Core Network Edge for AWS Transit Gateway Connect attachments. By default, this CIDR block will be one or more optional IPv4 and IPv6 CIDR prefixes auto-assigned from `inside_cidr_blocks`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
