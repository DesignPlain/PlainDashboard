import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField {
  // Name describing the field excluded from scanning.
  Name?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name describing the field excluded from scanning.",
      [],
      true,
      false,
    ),
  ];
}
