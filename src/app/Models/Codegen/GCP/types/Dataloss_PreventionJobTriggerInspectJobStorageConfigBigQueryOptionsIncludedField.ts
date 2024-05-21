import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField {
  // Name describing the field to which scanning is limited.
  name?: string;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name describing the field to which scanning is limited.",
      [],
      true,
      false,
    ),
  ];
}
