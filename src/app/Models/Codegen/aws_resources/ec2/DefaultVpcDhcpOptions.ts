import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DefaultVpcDhcpOptionsArgs {
  // A map of tags to assign to the resource.
  tags?: Map<string, string>;

  // The ID of the AWS account that owns the DHCP options set.
  ownerId?: string;
}
export class DefaultVpcDhcpOptions extends Resource {
  //
  public domainName?: string;

  // The ID of the AWS account that owns the DHCP options set.
  public ownerId?: string;

  //
  public tagsAll?: Map<string, string>;

  // The ARN of the DHCP Options Set.
  public arn?: string;

  // List of NETBIOS name servers.
  public netbiosNameServers?: string;

  // The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
  public netbiosNodeType?: string;

  //
  public ntpServers?: string;

  // A map of tags to assign to the resource.
  public tags?: Map<string, string>;

  //
  public domainNameServers?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ownerId",
        "The ID of the AWS account that owns the DHCP options set.",
        [],
        false,
        false,
      ),
    ];
  }
}
