import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VpcLinkArgs {
  // Description of the VPC link.
  description?: string;

  // Name used to label and identify the VPC link.
  name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // List of network load balancer arns in the VPC targeted by the VPC link. Currently AWS only supports 1 target.
  targetArn?: string;
}
export class VpcLink extends DS_Resource {
  // List of network load balancer arns in the VPC targeted by the VPC link. Currently AWS only supports 1 target.
  public targetArn?: string;

  //
  public arn?: string;

  // Description of the VPC link.
  public description?: string;

  // Name used to label and identify the VPC link.
  public name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "targetArn",
        "List of network load balancer arns in the VPC targeted by the VPC link. Currently AWS only supports 1 target.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the VPC link.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name used to label and identify the VPC link.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
