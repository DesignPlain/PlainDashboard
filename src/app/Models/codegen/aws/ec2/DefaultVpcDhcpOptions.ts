import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DefaultVpcDhcpOptionsArgs {
  // The ID of the AWS account that owns the DHCP options set.
  ownerId?: string;

  // A map of tags to assign to the resource.
  tags?: Map<string, string>;
}
export class DefaultVpcDhcpOptions extends DS_Resource {
  //
  public tagsAll?: Map<string, string>;

  // The ARN of the DHCP Options Set.
  public arn?: string;

  //
  public domainName?: string;

  //
  public ipv6AddressPreferredLeaseTime?: string;

  // The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
  public netbiosNodeType?: string;

  // A map of tags to assign to the resource.
  public tags?: Map<string, string>;

  //
  public domainNameServers?: string;

  // List of NETBIOS name servers.
  public netbiosNameServers?: string;

  //
  public ntpServers?: string;

  // The ID of the AWS account that owns the DHCP options set.
  public ownerId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ownerId',
        'The ID of the AWS account that owns the DHCP options set.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
