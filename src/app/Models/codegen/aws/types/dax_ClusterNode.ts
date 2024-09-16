import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dax_ClusterNode {
  //
  id?: string;

  // The port used by the configuration endpoint
  port?: number;

  //
  address?: string;

  //
  availabilityZone?: string;
}

export function dax_ClusterNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'availabilityZone',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'id', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The port used by the configuration endpoint',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'address', '', () => [], false, false),
  ];
}
