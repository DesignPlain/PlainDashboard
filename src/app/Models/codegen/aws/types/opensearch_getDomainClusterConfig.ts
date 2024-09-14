import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opensearch_getDomainClusterConfigColdStorageOption,
  opensearch_getDomainClusterConfigColdStorageOption_GetTypes,
} from "./opensearch_getDomainClusterConfigColdStorageOption";
import {
  opensearch_getDomainClusterConfigZoneAwarenessConfig,
  opensearch_getDomainClusterConfigZoneAwarenessConfig_GetTypes,
} from "./opensearch_getDomainClusterConfigZoneAwarenessConfig";

export interface opensearch_getDomainClusterConfig {
  // Instance type of the dedicated master nodes in the cluster.
  dedicatedMasterType?: string;

  // Number of instances in the cluster.
  instanceCount?: number;

  // Instance type of data nodes in the cluster.
  instanceType?: string;

  // Indicates whether zone awareness is enabled.
  zoneAwarenessEnabled?: boolean;

  // Number of warm nodes in the cluster.
  warmCount?: number;

  // Warm storage is enabled.
  warmEnabled?: boolean;

  // Instance type for the OpenSearch cluster's warm nodes.
  warmType?: string;

  // Configuration block containing zone awareness settings.
  zoneAwarenessConfigs?: Array<opensearch_getDomainClusterConfigZoneAwarenessConfig>;

  // Configuration block containing cold storage configuration.
  coldStorageOptions?: Array<opensearch_getDomainClusterConfigColdStorageOption>;

  // Number of dedicated master nodes in the cluster.
  dedicatedMasterCount?: number;

  // Indicates whether dedicated master nodes are enabled for the cluster.
  dedicatedMasterEnabled?: boolean;

  // Whether a multi-AZ domain is turned on with a standby AZ.
  multiAzWithStandbyEnabled?: boolean;
}

export function opensearch_getDomainClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "warmCount",
      "Number of warm nodes in the cluster.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "warmEnabled",
      "Warm storage is enabled.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "zoneAwarenessConfigs",
      "Configuration block containing zone awareness settings.",
      () => opensearch_getDomainClusterConfigZoneAwarenessConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dedicatedMasterCount",
      "Number of dedicated master nodes in the cluster.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dedicatedMasterEnabled",
      "Indicates whether dedicated master nodes are enabled for the cluster.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "multiAzWithStandbyEnabled",
      "Whether a multi-AZ domain is turned on with a standby AZ.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dedicatedMasterType",
      "Instance type of the dedicated master nodes in the cluster.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "instanceCount",
      "Number of instances in the cluster.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "Instance type of data nodes in the cluster.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "zoneAwarenessEnabled",
      "Indicates whether zone awareness is enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "warmType",
      "Instance type for the OpenSearch cluster's warm nodes.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "coldStorageOptions",
      "Configuration block containing cold storage configuration.",
      () => opensearch_getDomainClusterConfigColdStorageOption_GetTypes(),
      true,
      false,
    ),
  ];
}
