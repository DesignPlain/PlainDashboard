import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opensearch_DomainClusterConfigZoneAwarenessConfig,
  opensearch_DomainClusterConfigZoneAwarenessConfig_GetTypes,
} from './opensearch_DomainClusterConfigZoneAwarenessConfig';
import {
  opensearch_DomainClusterConfigColdStorageOptions,
  opensearch_DomainClusterConfigColdStorageOptions_GetTypes,
} from './opensearch_DomainClusterConfigColdStorageOptions';

export interface opensearch_DomainClusterConfig {
  // Number of dedicated main nodes in the cluster.
  dedicatedMasterCount?: number;

  // Whether dedicated main nodes are enabled for the cluster.
  dedicatedMasterEnabled?: boolean;

  // Whether a multi-AZ domain is turned on with a standby AZ. For more information, see [Configuring a multi-AZ domain in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html).
  multiAzWithStandbyEnabled?: boolean;

  // Instance type for the OpenSearch cluster's warm nodes. Valid values are `ultrawarm1.medium.search`, `ultrawarm1.large.search` and `ultrawarm1.xlarge.search`. `warm_type` can be only and must be set when `warm_enabled` is set to `true`.
  warmType?: string;

  // Configuration block containing zone awareness settings. Detailed below.
  zoneAwarenessConfig?: opensearch_DomainClusterConfigZoneAwarenessConfig;

  // Whether zone awareness is enabled, set to `true` for multi-az deployment. To enable awareness with three Availability Zones, the `availability_zone_count` within the `zone_awareness_config` must be set to `3`.
  zoneAwarenessEnabled?: boolean;

  // Configuration block containing cold storage configuration. Detailed below.
  coldStorageOptions?: opensearch_DomainClusterConfigColdStorageOptions;

  // Instance type of the dedicated main nodes in the cluster.
  dedicatedMasterType?: string;

  // Number of instances in the cluster.
  instanceCount?: number;

  // Instance type of data nodes in the cluster.
  instanceType?: string;

  // Number of warm nodes in the cluster. Valid values are between `2` and `150`. `warm_count` can be only and must be set when `warm_enabled` is set to `true`.
  warmCount?: number;

  // Whether to enable warm storage.
  warmEnabled?: boolean;
}

export function opensearch_DomainClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'multiAzWithStandbyEnabled',
      'Whether a multi-AZ domain is turned on with a standby AZ. For more information, see [Configuring a multi-AZ domain in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'zoneAwarenessConfig',
      'Configuration block containing zone awareness settings. Detailed below.',
      () => opensearch_DomainClusterConfigZoneAwarenessConfig_GetTypes(),
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
      InputType.Object,
      'coldStorageOptions',
      'Configuration block containing cold storage configuration. Detailed below.',
      () => opensearch_DomainClusterConfigColdStorageOptions_GetTypes(),
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
      InputType.Number,
      'warmCount',
      'Number of warm nodes in the cluster. Valid values are between `2` and `150`. `warm_count` can be only and must be set when `warm_enabled` is set to `true`.',
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
      InputType.Number,
      'dedicatedMasterCount',
      'Number of dedicated main nodes in the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'warmType',
      "Instance type for the OpenSearch cluster's warm nodes. Valid values are `ultrawarm1.medium.search`, `ultrawarm1.large.search` and `ultrawarm1.xlarge.search`. `warm_type` can be only and must be set when `warm_enabled` is set to `true`.",
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
      InputType.String,
      'instanceType',
      'Instance type of data nodes in the cluster.',
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
  ];
}
