import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LinkAggregationGroupArgs {
  // The name of the service provider associated with the LAG.
  providerName?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of an existing dedicated connection to migrate to the LAG.
  connectionId?: string;

  // The bandwidth of the individual physical connections bundled by the LAG. Valid values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps and 100Gbps. Case sensitive.
  connectionsBandwidth?: string;

  // A boolean that indicates all connections associated with the LAG should be deleted so that the LAG can be destroyed without error. These objects are -not- recoverable.
  forceDestroy?: boolean;

  // The AWS Direct Connect location in which the LAG should be allocated. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.
  location?: string;

  // The name of the LAG.
  name?: string;
}
export class LinkAggregationGroup extends Resource {
  // Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).
  public hasLogicalRedundancy?: string;

  // Indicates whether jumbo frames (9001 MTU) are supported.
  public jumboFrameCapable?: boolean;

  // The ID of the AWS account that owns the LAG.
  public ownerAccountId?: string;

  // The name of the LAG.
  public name?: string;

  // The name of the service provider associated with the LAG.
  public providerName?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the LAG.
  public arn?: string;

  // The ID of an existing dedicated connection to migrate to the LAG.
  public connectionId?: string;

  // The bandwidth of the individual physical connections bundled by the LAG. Valid values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps and 100Gbps. Case sensitive.
  public connectionsBandwidth?: string;

  // A boolean that indicates all connections associated with the LAG should be deleted so that the LAG can be destroyed without error. These objects are -not- recoverable.
  public forceDestroy?: boolean;

  // The AWS Direct Connect location in which the LAG should be allocated. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.
  public location?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionId",
        "The ID of an existing dedicated connection to migrate to the LAG.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionsBandwidth",
        "The bandwidth of the individual physical connections bundled by the LAG. Valid values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps and 100Gbps. Case sensitive.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "A boolean that indicates all connections associated with the LAG should be deleted so that the LAG can be destroyed without error. These objects are *not* recoverable.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The AWS Direct Connect location in which the LAG should be allocated. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the LAG.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "providerName",
        "The name of the service provider associated with the LAG.",
        [],
        false,
        true,
      ),
    ];
  }
}
