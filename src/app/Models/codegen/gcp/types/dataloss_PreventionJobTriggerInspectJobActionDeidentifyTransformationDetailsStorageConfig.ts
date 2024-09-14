import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable,
  dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable";

export interface dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig {
  /*
The BigQuery table in which to store the output.
Structure is documented below.
*/
  table?: dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable;
}

export function dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "table",
      "The BigQuery table in which to store the output.\nStructure is documented below.",
      () =>
        dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable_GetTypes(),
      true,
      false,
    ),
  ];
}
