import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ProfileArgs {
  // The name of the Profile.
  name?: string;

  // Specifies whether instance properties are required in [CreateSession](https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html) requests with this profile.
  requireInstanceProperties?: boolean;

  // A list of IAM roles that this profile can assume
  roleArns?: Array<string>;

  // A session policy that applies to the trust boundary of the vended session credentials.
  sessionPolicy?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The number of seconds the vended session credentials are valid for. Defaults to 3600.
  durationSeconds?: number;

  // Whether or not the Profile is enabled.
  enabled?: boolean;

  // A list of managed policy ARNs that apply to the vended session credentials.
  managedPolicyArns?: Array<string>;
}
export class Profile extends DS_Resource {
  // Amazon Resource Name (ARN) of the Profile
  public arn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of managed policy ARNs that apply to the vended session credentials.
  public managedPolicyArns?: Array<string>;

  // The name of the Profile.
  public name?: string;

  // Specifies whether instance properties are required in [CreateSession](https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html) requests with this profile.
  public requireInstanceProperties?: boolean;

  // A list of IAM roles that this profile can assume
  public roleArns?: Array<string>;

  // A session policy that applies to the trust boundary of the vended session credentials.
  public sessionPolicy?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The number of seconds the vended session credentials are valid for. Defaults to 3600.
  public durationSeconds?: number;

  // Whether or not the Profile is enabled.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Profile.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requireInstanceProperties",
        "Specifies whether instance properties are required in [CreateSession](https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html) requests with this profile.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "roleArns",
        "A list of IAM roles that this profile can assume",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sessionPolicy",
        "A session policy that applies to the trust boundary of the vended session credentials.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "durationSeconds",
        "The number of seconds the vended session credentials are valid for. Defaults to 3600.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether or not the Profile is enabled.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "managedPolicyArns",
        "A list of managed policy ARNs that apply to the vended session credentials.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
