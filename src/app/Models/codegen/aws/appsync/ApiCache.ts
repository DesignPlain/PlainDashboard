import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ApiCacheArgs {
  // Transit encryption flag when connecting to cache. You cannot update this setting after creation.
  transitEncryptionEnabled?: boolean;

  // TTL in seconds for cache entries.
  ttl?: number;

  // Cache instance type. Valid values are `SMALL`, `MEDIUM`, `LARGE`, `XLARGE`, `LARGE_2X`, `LARGE_4X`, `LARGE_8X`, `LARGE_12X`, `T2_SMALL`, `T2_MEDIUM`, `R4_LARGE`, `R4_XLARGE`, `R4_2XLARGE`, `R4_4XLARGE`, `R4_8XLARGE`.
  type?: string;

  // Caching behavior. Valid values are `FULL_REQUEST_CACHING` and `PER_RESOLVER_CACHING`.
  apiCachingBehavior?: string;

  // GraphQL API ID.
  apiId?: string;

  // At-rest encryption flag for cache. You cannot update this setting after creation.
  atRestEncryptionEnabled?: boolean;
}
export class ApiCache extends DS_Resource {
  // Caching behavior. Valid values are `FULL_REQUEST_CACHING` and `PER_RESOLVER_CACHING`.
  public apiCachingBehavior?: string;

  // GraphQL API ID.
  public apiId?: string;

  // At-rest encryption flag for cache. You cannot update this setting after creation.
  public atRestEncryptionEnabled?: boolean;

  // Transit encryption flag when connecting to cache. You cannot update this setting after creation.
  public transitEncryptionEnabled?: boolean;

  // TTL in seconds for cache entries.
  public ttl?: number;

  // Cache instance type. Valid values are `SMALL`, `MEDIUM`, `LARGE`, `XLARGE`, `LARGE_2X`, `LARGE_4X`, `LARGE_8X`, `LARGE_12X`, `T2_SMALL`, `T2_MEDIUM`, `R4_LARGE`, `R4_XLARGE`, `R4_2XLARGE`, `R4_4XLARGE`, `R4_8XLARGE`.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'type',
        'Cache instance type. Valid values are `SMALL`, `MEDIUM`, `LARGE`, `XLARGE`, `LARGE_2X`, `LARGE_4X`, `LARGE_8X`, `LARGE_12X`, `T2_SMALL`, `T2_MEDIUM`, `R4_LARGE`, `R4_XLARGE`, `R4_2XLARGE`, `R4_4XLARGE`, `R4_8XLARGE`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'apiCachingBehavior',
        'Caching behavior. Valid values are `FULL_REQUEST_CACHING` and `PER_RESOLVER_CACHING`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'apiId',
        'GraphQL API ID.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'atRestEncryptionEnabled',
        'At-rest encryption flag for cache. You cannot update this setting after creation.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'transitEncryptionEnabled',
        'Transit encryption flag when connecting to cache. You cannot update this setting after creation.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'ttl',
        'TTL in seconds for cache entries.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
