import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  elasticsearch_DomainClusterConfigZoneAwarenessConfig,
  elasticsearch_DomainClusterConfigZoneAwarenessConfig_GetTypes,
} from './elasticsearch_DomainClusterConfigZoneAwarenessConfig';
import {
  elasticsearch_DomainClusterConfigColdStorageOptions,
  elasticsearch_DomainClusterConfigColdStorageOptions_GetTypes,
} from './elasticsearch_DomainClusterConfigColdStorageOptions';

export interface elasticsearch_DomainClusterConfig {
  // Number of instances in the cluster.
  instanceCount?: number;

  // Instance type of data nodes in the cluster.
  instanceType?: string;

  // Whether to enable warm storage.
  warmEnabled?: boolean;

  // Instance type for the Elasticsearch cluster's warm nodes. Valid values are `ultrawarm1.medium.elasticsearch`, `ultrawarm1.large.elasticsearch` and `ultrawarm1.xlarge.elasticsearch`. `warm_type` can be only and must be set when `warm_enabled` is set to `true`.
  warmType?: string;

  // Configuration block containing cold storage configuration. Detailed below.
  coldStorageOptions?: elasticsearch_DomainClusterConfigColdStorageOptions;

  // Number of dedicated main nodes in the cluster.
  dedicatedMasterCount?: number;

  // Number of warm nodes in the cluster. Valid values are between `2` and `150`. `warm_count` can be only and must be set when `warm_enabled` is set to `true`.
  warmCount?: number;

  // Configuration block containing zone awareness settings. Detailed below.
  zoneAwarenessConfig?: elasticsearch_DomainClusterConfigZoneAwarenessConfig;

  // Whether zone awareness is enabled, set to `true` for multi-az deployment. To enable awareness with three Availability Zones, the `availability_zone_count` within the `zone_awareness_config` must be set to `3`.
  zoneAwarenessEnabled?: boolean;

  // Whether dedicated main nodes are enabled for the cluster.
  dedicatedMasterEnabled?: boolean;

  // Instance type of the dedicated main nodes in the cluster.
  dedicatedMasterType?: string;
}

export function elasticsearch_DomainClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'zoneAwarenessConfig',
      'Configuration block containing zone awareness settings. Detailed below.',
      () => elasticsearch_DomainClusterConfigZoneAwarenessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'zoneAwarenessEnabled',
      'Whether zone awareness is enabled, set to `true` for multi-az deployment. To enable awareness with three Availability Zones, the `availability_zone_count` within the `zone_awareness_config` must be set to `3`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'dedicatedMasterEnabled',
      'Whether dedicated main nodes are enabled for the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'instanceCount',
      'Number of instances in the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceType',
      'Instance type of data nodes in the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'warmEnabled',
      'Whether to enable warm storage.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'warmType',
      "Instance type for the Elasticsearch cluster's warm nodes. Valid values are `ultrawarm1.medium.elasticsearch`, `ultrawarm1.large.elasticsearch` and `ultrawarm1.xlarge.elasticsearch`. `warm_type` can be only and must be set when `warm_enabled` is set to `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'warmCount',
      'Number of warm nodes in the cluster. Valid values are between `2` and `150`. `warm_count` can be only and must be set when `warm_enabled` is set to `true`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dedicatedMasterType',
      'Instance type of the dedicated main nodes in the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'coldStorageOptions',
      'Configuration block containing cold storage configuration. Detailed below.',
      () => elasticsearch_DomainClusterConfigColdStorageOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'dedicatedMasterCount',
      'Number of dedicated main nodes in the cluster.',
      () => [],
      false,
      false,
    ),
  ];
}
