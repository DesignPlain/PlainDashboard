import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterResourceUsageExportConfigBigqueryDestination,
  Container_getClusterResourceUsageExportConfigBigqueryDestination_GetTypes,
} from "./Container_getClusterResourceUsageExportConfigBigqueryDestination";

export interface Container_getClusterResourceUsageExportConfig {
  // Parameters for using BigQuery as the destination of resource usage export.
  BigqueryDestinations?: Array<Container_getClusterResourceUsageExportConfigBigqueryDestination>;

  // Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
  EnableNetworkEgressMetering?: boolean;

  // Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.
  EnableResourceConsumptionMetering?: boolean;
}

export function Container_getClusterResourceUsageExportConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "BigqueryDestinations",
      "Parameters for using BigQuery as the destination of resource usage export.",
      Container_getClusterResourceUsageExportConfigBigqueryDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableNetworkEgressMetering",
      "Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableResourceConsumptionMetering",
      "Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.",
      [],
      true,
      false,
    ),
  ];
}
