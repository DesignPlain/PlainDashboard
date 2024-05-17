import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions {
  /*
The columns that are the primary keys for table objects included in ContentItem. A copy of this
cell's value will stored alongside alongside each finding so that the finding can be traced to
the specific row it came from. No more than 3 may be provided.
Structure is documented below.
*/
  IdentifyingFields?: Array<Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField>;
}

export function Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "IdentifyingFields",
      "The columns that are the primary keys for table objects included in ContentItem. A copy of this\ncell's value will stored alongside alongside each finding so that the finding can be traced to\nthe specific row it came from. No more than 3 may be provided.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingField_GetTypes(),
      false,
      false,
    ),
  ];
}
