import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelDestinationMultiplexSettings,
  medialive_ChannelDestinationMultiplexSettings_GetTypes,
} from './medialive_ChannelDestinationMultiplexSettings';
import {
  medialive_ChannelDestinationSetting,
  medialive_ChannelDestinationSetting_GetTypes,
} from './medialive_ChannelDestinationSetting';
import {
  medialive_ChannelDestinationMediaPackageSetting,
  medialive_ChannelDestinationMediaPackageSetting_GetTypes,
} from './medialive_ChannelDestinationMediaPackageSetting';

export interface medialive_ChannelDestination {
  // User-specified id. Ths is used in an output group or an output.
  id?: string;

  // Destination settings for a MediaPackage output; one destination for both encoders. See Media Package Settings for more details.
  mediaPackageSettings?: Array<medialive_ChannelDestinationMediaPackageSetting>;

  // Destination settings for a Multiplex output; one destination for both encoders. See Multiplex Settings for more details.
  multiplexSettings?: medialive_ChannelDestinationMultiplexSettings;

  // Destination settings for a standard output; one destination for each redundant encoder. See Settings for more details.
  settings?: Array<medialive_ChannelDestinationSetting>;
}

export function medialive_ChannelDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'User-specified id. Ths is used in an output group or an output.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'mediaPackageSettings',
      'Destination settings for a MediaPackage output; one destination for both encoders. See Media Package Settings for more details.',
      () => medialive_ChannelDestinationMediaPackageSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'multiplexSettings',
      'Destination settings for a Multiplex output; one destination for both encoders. See Multiplex Settings for more details.',
      () => medialive_ChannelDestinationMultiplexSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'settings',
      'Destination settings for a standard output; one destination for each redundant encoder. See Settings for more details.',
      () => medialive_ChannelDestinationSetting_GetTypes(),
      false,
      false,
    ),
  ];
}
