import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_MultiplexMultiplexSettings,
  medialive_MultiplexMultiplexSettings_GetTypes,
} from '../types/medialive_MultiplexMultiplexSettings';

export interface MultiplexArgs {
  // Multiplex settings. See Multiplex Settings for more details.
  multiplexSettings?: medialive_MultiplexMultiplexSettings;

  /*
name of Multiplex.

The following arguments are optional:
*/
  name?: string;

  // Whether to start the Multiplex. Defaults to `false`.
  startMultiplex?: boolean;

  // A map of tags to assign to the Multiplex. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A list of availability zones. You must specify exactly two.
  availabilityZones?: Array<string>;
}
export class Multiplex extends DS_Resource {
  /*
name of Multiplex.

The following arguments are optional:
*/
  public name?: string;

  // Whether to start the Multiplex. Defaults to `false`.
  public startMultiplex?: boolean;

  // A map of tags to assign to the Multiplex. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // ARN of the Multiplex.
  public arn?: string;

  // A list of availability zones. You must specify exactly two.
  public availabilityZones?: Array<string>;

  // Multiplex settings. See Multiplex Settings for more details.
  public multiplexSettings?: medialive_MultiplexMultiplexSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'multiplexSettings',
        'Multiplex settings. See Multiplex Settings for more details.',
        () => medialive_MultiplexMultiplexSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'name of Multiplex.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'startMultiplex',
        'Whether to start the Multiplex. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the Multiplex. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'availabilityZones',
        'A list of availability zones. You must specify exactly two.',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
