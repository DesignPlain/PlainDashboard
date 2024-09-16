import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpclattice_TargetGroupConfig,
  vpclattice_TargetGroupConfig_GetTypes,
} from '../types/vpclattice_TargetGroupConfig';

export interface TargetGroupArgs {
  // The target group configuration.
  config?: vpclattice_TargetGroupConfig;

  // The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The type of target group. Valid Values are `IP` | `LAMBDA` | `INSTANCE` | `ALB`

The following arguments are optional:
*/
  type?: string;
}
export class TargetGroup extends DS_Resource {
  // The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
  public name?: string;

  // Status of the target group.
  public status?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The type of target group. Valid Values are `IP` | `LAMBDA` | `INSTANCE` | `ALB`

The following arguments are optional:
*/
  public type?: string;

  // ARN of the target group.
  public arn?: string;

  // The target group configuration.
  public config?: vpclattice_TargetGroupConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'config',
        'The target group configuration.',
        () => vpclattice_TargetGroupConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        "The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of target group. Valid Values are `IP` | `LAMBDA` | `INSTANCE` | `ALB`\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
    ];
  }
}
