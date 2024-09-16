import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  inspector2_OrganizationConfigurationAutoEnable,
  inspector2_OrganizationConfigurationAutoEnable_GetTypes,
} from '../types/inspector2_OrganizationConfigurationAutoEnable';

export interface OrganizationConfigurationArgs {
  // Configuration block for auto enabling. See below.
  autoEnable?: inspector2_OrganizationConfigurationAutoEnable;
}
export class OrganizationConfiguration extends DS_Resource {
  // Configuration block for auto enabling. See below.
  public autoEnable?: inspector2_OrganizationConfigurationAutoEnable;

  // Whether your configuration reached the max account limit.
  public maxAccountLimitReached?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'autoEnable',
        'Configuration block for auto enabling. See below.',
        () => inspector2_OrganizationConfigurationAutoEnable_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
