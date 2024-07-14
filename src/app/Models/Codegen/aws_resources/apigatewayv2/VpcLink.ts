import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VpcLinkArgs {
  // Map of tags to assign to the VPC Link. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the VPC Link. Must be between 1 and 128 characters in length.
  name?: string;

  // Security group IDs for the VPC Link.
  securityGroupIds?: Array<string>;

  // Subnet IDs for the VPC Link.
  subnetIds?: Array<string>;
}
export class VpcLink extends Resource {
  // VPC Link ARN.
  public arn?: string;

  // Name of the VPC Link. Must be between 1 and 128 characters in length.
  public name?: string;

  // Security group IDs for the VPC Link.
  public securityGroupIds?: Array<string>;

  // Subnet IDs for the VPC Link.
  public subnetIds?: Array<string>;

  // Map of tags to assign to the VPC Link. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "Subnet IDs for the VPC Link.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the VPC Link. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the VPC Link. Must be between 1 and 128 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "Security group IDs for the VPC Link.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
