import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  elasticache_ServerlessCacheCacheUsageLimitsDataStorage,
  elasticache_ServerlessCacheCacheUsageLimitsDataStorage_GetTypes,
} from './elasticache_ServerlessCacheCacheUsageLimitsDataStorage';
import {
  elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond,
  elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond_GetTypes,
} from './elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond';

export interface elasticache_ServerlessCacheCacheUsageLimits {
  // The maximum data storage limit in the cache, expressed in Gigabytes. See Data Storage config for more details.
  dataStorage?: elasticache_ServerlessCacheCacheUsageLimitsDataStorage;

  // The configuration for the number of ElastiCache Processing Units (ECPU) the cache can consume per second.See config block for more details.
  ecpuPerSeconds?: Array<elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond>;
}

export function elasticache_ServerlessCacheCacheUsageLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dataStorage',
      'The maximum data storage limit in the cache, expressed in Gigabytes. See Data Storage config for more details.',
      () => elasticache_ServerlessCacheCacheUsageLimitsDataStorage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ecpuPerSeconds',
      'The configuration for the number of ElastiCache Processing Units (ECPU) the cache can consume per second.See config block for more details.',
      () => elasticache_ServerlessCacheCacheUsageLimitsEcpuPerSecond_GetTypes(),
      false,
      false,
    ),
  ];
}
