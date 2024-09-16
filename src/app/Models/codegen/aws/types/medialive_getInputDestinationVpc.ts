import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_getInputDestinationVpc {
  //
  availabilityZone?: string;

  //
  networkInterfaceId?: string;
}

export function medialive_getInputDestinationVpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'availabilityZone',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkInterfaceId',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
