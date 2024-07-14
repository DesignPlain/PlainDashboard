import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField {
  // Name describing the field excluded from scanning.
  name?: string;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name describing the field excluded from scanning.",
      [],
      true,
      false,
    ),
  ];
}
