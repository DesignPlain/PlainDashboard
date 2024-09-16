import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emr_InstanceFleetInstanceTypeConfigConfiguration {
  // The classification within a configuration.
  classification?: string;

  // A map of properties specified within a configuration classification
  properties?: Map<string, string>;
}

export function emr_InstanceFleetInstanceTypeConfigConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'properties',
      'A map of properties specified within a configuration classification',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'classification',
      'The classification within a configuration.',
      () => [],
      false,
      true,
    ),
  ];
}
