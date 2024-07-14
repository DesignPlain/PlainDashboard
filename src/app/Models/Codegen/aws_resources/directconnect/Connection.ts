import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ConnectionArgs {
  // Set to true if you do not wish the connection to be deleted at destroy time, and instead just removed from the state.
  skipDestroy?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The bandwidth of the connection. Valid values for dedicated connections: 1Gbps, 10Gbps. Valid values for hosted connections: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps and 100Gbps. Case sensitive.
  bandwidth?: string;

  // The connection MAC Security (MACsec) encryption mode. MAC Security (MACsec) is only available on dedicated connections. Valid values are `no_encrypt`, `should_encrypt`, and `must_encrypt`.
  encryptionMode?: string;

  // The AWS Direct Connect location where the connection is located. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.
  location?: string;

  // The name of the connection.
  name?: string;

  // The name of the service provider associated with the connection.
  providerName?: string;

  /*
Boolean value indicating whether you want the connection to support MAC Security (MACsec). MAC Security (MACsec) is only available on dedicated connections. See [MACsec prerequisites](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites) for more information about MAC Security (MACsec) prerequisites. Default value: `false`.

> --NOTE:-- Changing the value of `request_macsec` will cause the resource to be destroyed and re-created.
*/
  requestMacsec?: boolean;
}
export class Connection extends Resource {
  // Boolean value representing if jumbo frames have been enabled for this connection.
  public jumboFrameCapable?: boolean;

  // Boolean value indicating whether the connection supports MAC Security (MACsec).
  public macsecCapable?: boolean;

  // The MAC Security (MACsec) port link status of the connection.
  public portEncryptionStatus?: string;

  // The name of the service provider associated with the connection.
  public providerName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Direct Connect endpoint on which the physical connection terminates.
  public awsDevice?: string;

  /*
Boolean value indicating whether you want the connection to support MAC Security (MACsec). MAC Security (MACsec) is only available on dedicated connections. See [MACsec prerequisites](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites) for more information about MAC Security (MACsec) prerequisites. Default value: `false`.

> --NOTE:-- Changing the value of `request_macsec` will cause the resource to be destroyed and re-created.
*/
  public requestMacsec?: boolean;

  // The VLAN ID.
  public vlanId?: number;

  // Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).
  public hasLogicalRedundancy?: string;

  // The AWS Direct Connect location where the connection is located. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.
  public location?: string;

  // The ID of the AWS account that owns the connection.
  public ownerAccountId?: string;

  // The ARN of the connection.
  public arn?: string;

  // The connection MAC Security (MACsec) encryption mode. MAC Security (MACsec) is only available on dedicated connections. Valid values are `no_encrypt`, `should_encrypt`, and `must_encrypt`.
  public encryptionMode?: string;

  // The name of the connection.
  public name?: string;

  // The name of the AWS Direct Connect service provider associated with the connection.
  public partnerName?: string;

  // Set to true if you do not wish the connection to be deleted at destroy time, and instead just removed from the state.
  public skipDestroy?: boolean;

  // The bandwidth of the connection. Valid values for dedicated connections: 1Gbps, 10Gbps. Valid values for hosted connections: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps and 100Gbps. Case sensitive.
  public bandwidth?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bandwidth",
        "The bandwidth of the connection. Valid values for dedicated connections: 1Gbps, 10Gbps. Valid values for hosted connections: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps and 100Gbps. Case sensitive.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "encryptionMode",
        "The connection MAC Security (MACsec) encryption mode. MAC Security (MACsec) is only available on dedicated connections. Valid values are `no_encrypt`, `should_encrypt`, and `must_encrypt`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The AWS Direct Connect location where the connection is located. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the connection.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "providerName",
        "The name of the service provider associated with the connection.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requestMacsec",
        "Boolean value indicating whether you want the connection to support MAC Security (MACsec). MAC Security (MACsec) is only available on dedicated connections. See [MACsec prerequisites](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites) for more information about MAC Security (MACsec) prerequisites. Default value: `false`.\n\n> **NOTE:** Changing the value of `request_macsec` will cause the resource to be destroyed and re-created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "Set to true if you do not wish the connection to be deleted at destroy time, and instead just removed from the state.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
