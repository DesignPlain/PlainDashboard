import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterResourceUsageExportConfigBigqueryDestination {
  // The ID of a BigQuery Dataset.
  datasetId?: string;
}

export function container_ClusterResourceUsageExportConfigBigqueryDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The ID of a BigQuery Dataset.",
      [],
      true,
      false,
    ),
  ];
}
