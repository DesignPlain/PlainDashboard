import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface resourceexplorer_SearchResourceProperty {
  // Name of this property of the resource.
  name?: string;

  // Details about this property. The content of this field is a JSON object that varies based on the resource type.
  data?: string;

  // The date and time that the information about this resource property was last updated.
  lastReportedAt?: string;
}

export function resourceexplorer_SearchResourceProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'lastReportedAt',
      'The date and time that the information about this resource property was last updated.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of this property of the resource.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'data',
      'Details about this property. The content of this field is a JSON object that varies based on the resource type.',
      () => [],
      true,
      false,
    ),
  ];
}
