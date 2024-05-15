import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterResourceUsageExportConfigBigqueryDestination {
  // The ID of a BigQuery Dataset.
  DatasetId?: string;
}

export function Container_getClusterResourceUsageExportConfigBigqueryDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "The ID of a BigQuery Dataset.",
      [],
      true,
      false,
    ),
  ];
}
