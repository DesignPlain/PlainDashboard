import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterResourceUsageExportConfigBigqueryDestination {
  // The ID of a BigQuery Dataset.
  datasetId?: string;
}

export function container_getClusterResourceUsageExportConfigBigqueryDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The ID of a BigQuery Dataset.",
      () => [],
      true,
      false,
    ),
  ];
}
