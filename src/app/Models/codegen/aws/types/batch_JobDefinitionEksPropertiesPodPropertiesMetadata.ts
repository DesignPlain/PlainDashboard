import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesMetadata {
  //
  labels?: Map<string, string>;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'labels',
      '',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
