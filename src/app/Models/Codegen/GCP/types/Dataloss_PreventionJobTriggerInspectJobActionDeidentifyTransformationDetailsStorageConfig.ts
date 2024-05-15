import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable,
  Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable";

export interface Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig {
  /*
The BigQuery table in which to store the output.
Structure is documented below.
*/
  Table?: Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable;
}

export function Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Table",
      "The BigQuery table in which to store the output.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable_GetTypes(),
      true,
      false,
    ),
  ];
}
