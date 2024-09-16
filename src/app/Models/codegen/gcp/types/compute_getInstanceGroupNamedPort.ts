import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getInstanceGroupNamedPort {
  // The name of the instance group. Either `name` or `self_link` must be provided.
  name?: string;

  //
  port?: number;
}

export function compute_getInstanceGroupNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the instance group. Either `name` or `self_link` must be provided.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, 'port', '', () => [], true, false),
  ];
}
