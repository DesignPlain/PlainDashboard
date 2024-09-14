import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface InstanceProfileArgs {
  // The description of the instance profile.
  description?: string;

  // An array of strings that specifies the list of app packages that should not be cleaned up from the device after a test run.
  excludeAppPackagesFromCleanups?: Array<string>;

  // The name for the instance profile.
  name?: string;

  // When set to `true`, Device Farm removes app packages after a test run. The default value is `false` for private devices.
  packageCleanup?: boolean;

  // When set to `true`, Device Farm reboots the instance after a test run. The default value is `true`.
  rebootAfterUse?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class InstanceProfile extends DS_Resource {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name of this instance profile.
  public arn?: string;

  // The description of the instance profile.
  public description?: string;

  // An array of strings that specifies the list of app packages that should not be cleaned up from the device after a test run.
  public excludeAppPackagesFromCleanups?: Array<string>;

  // The name for the instance profile.
  public name?: string;

  // When set to `true`, Device Farm removes app packages after a test run. The default value is `false` for private devices.
  public packageCleanup?: boolean;

  // When set to `true`, Device Farm reboots the instance after a test run. The default value is `true`.
  public rebootAfterUse?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the instance profile.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "packageCleanup",
        "When set to `true`, Device Farm removes app packages after a test run. The default value is `false` for private devices.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "rebootAfterUse",
        "When set to `true`, Device Farm reboots the instance after a test run. The default value is `true`.",
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
        InputType.String,
        "description",
        "The description of the instance profile.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "excludeAppPackagesFromCleanups",
        "An array of strings that specifies the list of app packages that should not be cleaned up from the device after a test run.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
