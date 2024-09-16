import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField {
  // Name describing the field to which scanning is limited.
  name?: string;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name describing the field to which scanning is limited.',
      () => [],
      true,
      false,
    ),
  ];
}
