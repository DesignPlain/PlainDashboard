import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_InstanceGroupManagerAllInstancesConfig {
  /*
, The label key-value pairs that you want to patch onto the instance.

- - -
*/
  labels?: Map<string, string>;

  // , The metadata key-value pairs that you want to patch onto the instance. For more information, see [Project and instance metadata](https://cloud.google.com/compute/docs/metadata#project_and_instance_metadata).
  metadata?: Map<string, string>;
}

export function compute_InstanceGroupManagerAllInstancesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'labels',
      ', The label key-value pairs that you want to patch onto the instance.\n\n- - -',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'metadata',
      ', The metadata key-value pairs that you want to patch onto the instance. For more information, see [Project and instance metadata](https://cloud.google.com/compute/docs/metadata#project_and_instance_metadata).',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
