import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterResourceUsageExportConfigBigqueryDestination,
  container_ClusterResourceUsageExportConfigBigqueryDestination_GetTypes,
} from "./container_ClusterResourceUsageExportConfigBigqueryDestination";

export interface container_ClusterResourceUsageExportConfig {
  /*
Whether to enable resource
consumption metering on this cluster. When enabled, a table will be created in
the resource export BigQuery dataset to store resource consumption data. The
resulting table can be joined with the resource usage table or with BigQuery
billing export. Defaults to `true`.
*/
  enableResourceConsumptionMetering?: boolean;

  /*
Parameters for using BigQuery as the destination of resource usage export.

- `bigquery_destination.dataset_id` (Required) - The ID of a BigQuery Dataset. For Example:
*/
  bigqueryDestination?: container_ClusterResourceUsageExportConfigBigqueryDestination;

  /*
Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created
in the cluster to meter network egress traffic.
*/
  enableNetworkEgressMetering?: boolean;
}

export function container_ClusterResourceUsageExportConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableNetworkEgressMetering",
      "Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created\nin the cluster to meter network egress traffic.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableResourceConsumptionMetering",
      "Whether to enable resource\nconsumption metering on this cluster. When enabled, a table will be created in\nthe resource export BigQuery dataset to store resource consumption data. The\nresulting table can be joined with the resource usage table or with BigQuery\nbilling export. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "bigqueryDestination",
      "Parameters for using BigQuery as the destination of resource usage export.\n\n* `bigquery_destination.dataset_id` (Required) - The ID of a BigQuery Dataset. For Example:",
      container_ClusterResourceUsageExportConfigBigqueryDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
