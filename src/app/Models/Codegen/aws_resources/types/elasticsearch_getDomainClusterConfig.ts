import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elasticsearch_getDomainClusterConfigZoneAwarenessConfig,
  elasticsearch_getDomainClusterConfigZoneAwarenessConfig_GetTypes,
} from "./elasticsearch_getDomainClusterConfigZoneAwarenessConfig";
import {
  elasticsearch_getDomainClusterConfigColdStorageOption,
  elasticsearch_getDomainClusterConfigColdStorageOption_GetTypes,
} from "./elasticsearch_getDomainClusterConfigColdStorageOption";

export interface elasticsearch_getDomainClusterConfig {
  // Number of instances in the cluster.
  instanceCount?: number;

  // Instance type of data nodes in the cluster.
  instanceType?: string;

  // Warm storage is enabled.
  warmEnabled?: boolean;

  // Configuration block containing zone awareness settings.
  zoneAwarenessConfigs?: Array<elasticsearch_getDomainClusterConfigZoneAwarenessConfig>;

  // Number of dedicated master nodes in the cluster.
  dedicatedMasterCount?: number;

  // Indicates whether dedicated master nodes are enabled for the cluster.
  dedicatedMasterEnabled?: boolean;

  // Instance type of the dedicated master nodes in the cluster.
  dedicatedMasterType?: string;

  // The number of warm nodes in the cluster.
  warmCount?: number;

  // The instance type for the Elasticsearch cluster's warm nodes.
  warmType?: string;

  // Indicates whether zone awareness is enabled.
  zoneAwarenessEnabled?: boolean;

  // Configuration block containing cold storage configuration.
  coldStorageOptions?: Array<elasticsearch_getDomainClusterConfigColdStorageOption>;
}

export function elasticsearch_getDomainClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "instanceCount",
      "Number of instances in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dedicatedMasterCount",
      "Number of dedicated master nodes in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "warmCount",
      "The number of warm nodes in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "warmType",
      "The instance type for the Elasticsearch cluster's warm nodes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "zoneAwarenessEnabled",
      "Indicates whether zone awareness is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "Instance type of data nodes in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "warmEnabled",
      "Warm storage is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "zoneAwarenessConfigs",
      "Configuration block containing zone awareness settings.",
      elasticsearch_getDomainClusterConfigZoneAwarenessConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dedicatedMasterEnabled",
      "Indicates whether dedicated master nodes are enabled for the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dedicatedMasterType",
      "Instance type of the dedicated master nodes in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "coldStorageOptions",
      "Configuration block containing cold storage configuration.",
      elasticsearch_getDomainClusterConfigColdStorageOption_GetTypes(),
      true,
      false,
    ),
  ];
}
