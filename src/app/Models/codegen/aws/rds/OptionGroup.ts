import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  rds_OptionGroupOption,
  rds_OptionGroupOption_GetTypes,
} from '../types/rds_OptionGroupOption';

export interface OptionGroupArgs {
  // The options to apply. See `option` Block below for more details.
  options?: Array<rds_OptionGroupOption>;

  // Set to true if you do not wish the option group to be deleted at destroy time, and instead just remove the option group from the Pulumi state.
  skipDestroy?: boolean;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the name of the engine that this option group should be associated with.
  engineName?: string;

  // Specifies the major version of the engine that this option group should be associated with.
  majorEngineVersion?: string;

  // Name of the option group. If omitted, the provider will assign a random, unique name. Must be lowercase, to match as it is stored in AWS.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. Must be lowercase, to match as it is stored in AWS.
  namePrefix?: string;

  // Description of the option group.
  optionGroupDescription?: string;
}
export class OptionGroup extends DS_Resource {
  // Name of the option group. If omitted, the provider will assign a random, unique name. Must be lowercase, to match as it is stored in AWS.
  public name?: string;

  // Description of the option group.
  public optionGroupDescription?: string;

  // The options to apply. See `option` Block below for more details.
  public options?: Array<rds_OptionGroupOption>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the major version of the engine that this option group should be associated with.
  public majorEngineVersion?: string;

  // Specifies the name of the engine that this option group should be associated with.
  public engineName?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. Must be lowercase, to match as it is stored in AWS.
  public namePrefix?: string;

  // Set to true if you do not wish the option group to be deleted at destroy time, and instead just remove the option group from the Pulumi state.
  public skipDestroy?: boolean;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the DB option group.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`. Must be lowercase, to match as it is stored in AWS.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'optionGroupDescription',
        'Description of the option group.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'options',
        'The options to apply. See `option` Block below for more details.',
        () => rds_OptionGroupOption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'skipDestroy',
        'Set to true if you do not wish the option group to be deleted at destroy time, and instead just remove the option group from the Pulumi state.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineName',
        'Specifies the name of the engine that this option group should be associated with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'majorEngineVersion',
        'Specifies the major version of the engine that this option group should be associated with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the option group. If omitted, the provider will assign a random, unique name. Must be lowercase, to match as it is stored in AWS.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
