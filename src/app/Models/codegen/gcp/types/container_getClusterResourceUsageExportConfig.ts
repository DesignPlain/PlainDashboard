import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterResourceUsageExportConfigBigqueryDestination,
  container_getClusterResourceUsageExportConfigBigqueryDestination_GetTypes,
} from "./container_getClusterResourceUsageExportConfigBigqueryDestination";

export interface container_getClusterResourceUsageExportConfig {
  // Parameters for using BigQuery as the destination of resource usage export.
  bigqueryDestinations?: Array<container_getClusterResourceUsageExportConfigBigqueryDestination>;

  // Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
  enableNetworkEgressMetering?: boolean;

  // Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.
  enableResourceConsumptionMetering?: boolean;
}

export function container_getClusterResourceUsageExportConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "bigqueryDestinations",
      "Parameters for using BigQuery as the destination of resource usage export.",
      () =>
        container_getClusterResourceUsageExportConfigBigqueryDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableNetworkEgressMetering",
      "Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableResourceConsumptionMetering",
      "Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.",
      () => [],
      true,
      false,
    ),
  ];
}
