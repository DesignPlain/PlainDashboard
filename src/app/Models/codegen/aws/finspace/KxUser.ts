import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface KxUserArgs {
  // Unique identifier for the KX environment.
  environmentId?: string;

  /*
IAM role ARN to be associated with the user.

The following arguments are optional:
*/
  iamRole?: string;

  // A unique identifier for the user.
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class KxUser extends DS_Resource {
  // A unique identifier for the user.
  public name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) identifier of the KX user.
  public arn?: string;

  // Unique identifier for the KX environment.
  public environmentId?: string;

  /*
IAM role ARN to be associated with the user.

The following arguments are optional:
*/
  public iamRole?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique identifier for the user.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "environmentId",
        "Unique identifier for the KX environment.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamRole",
        "IAM role ARN to be associated with the user.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
