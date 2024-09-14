import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField,
  dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions {
  /*
The columns that are the primary keys for table objects included in ContentItem. A copy of this
cell's value will stored alongside alongside each finding so that the finding can be traced to
the specific row it came from. No more than 3 may be provided.
Structure is documented below.
*/
  identifyingFields?: Array<dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField>;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "identifyingFields",
      "The columns that are the primary keys for table objects included in ContentItem. A copy of this\ncell's value will stored alongside alongside each finding so that the finding can be traced to\nthe specific row it came from. No more than 3 may be provided.\nStructure is documented below.",
      () =>
        dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField_GetTypes(),
      false,
      false,
    ),
  ];
}
