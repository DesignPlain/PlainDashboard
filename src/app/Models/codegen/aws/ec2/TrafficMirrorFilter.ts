import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TrafficMirrorFilterArgs {
  // List of amazon network services that should be mirrored. Valid values: `amazon-dns`.
  networkServices?: Array<string>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A description of the filter.
  description?: string;
}
export class TrafficMirrorFilter extends DS_Resource {
  // The ARN of the traffic mirror filter.
  public arn?: string;

  // A description of the filter.
  public description?: string;

  // List of amazon network services that should be mirrored. Valid values: `amazon-dns`.
  public networkServices?: Array<string>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "networkServices",
        "List of amazon network services that should be mirrored. Valid values: `amazon-dns`.",
        () => InputType_String_GetTypes(),
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
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the filter.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
