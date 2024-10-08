import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appsync_ResolverCachingConfig,
  appsync_ResolverCachingConfig_GetTypes,
} from '../types/appsync_ResolverCachingConfig';
import {
  appsync_ResolverSyncConfig,
  appsync_ResolverSyncConfig_GetTypes,
} from '../types/appsync_ResolverSyncConfig';
import {
  appsync_ResolverPipelineConfig,
  appsync_ResolverPipelineConfig_GetTypes,
} from '../types/appsync_ResolverPipelineConfig';
import {
  appsync_ResolverRuntime,
  appsync_ResolverRuntime_GetTypes,
} from '../types/appsync_ResolverRuntime';

export interface ResolverArgs {
  // The Caching Config. See Caching Config.
  cachingConfig?: appsync_ResolverCachingConfig;

  // Describes a Sync configuration for a resolver. See Sync Config.
  syncConfig?: appsync_ResolverSyncConfig;

  // Data source name.
  dataSource?: string;

  // Field name from the schema defined in the GraphQL API.
  field?: string;

  // Resolver type. Valid values are `UNIT` and `PIPELINE`.
  kind?: string;

  // Maximum batching size for a resolver. Valid values are between `0` and `2000`.
  maxBatchSize?: number;

  // The caching configuration for the resolver. See Pipeline Config.
  pipelineConfig?: appsync_ResolverPipelineConfig;

  // Request mapping template for UNIT resolver or 'before mapping template' for PIPELINE resolver. Required for non-Lambda resolvers.
  requestTemplate?: string;

  // API ID for the GraphQL API.
  apiId?: string;

  // The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.
  code?: string;

  // Type name from the schema defined in the GraphQL API.
  type?: string;

  // Response mapping template for UNIT resolver or 'after mapping template' for PIPELINE resolver. Required for non-Lambda resolvers.
  responseTemplate?: string;

  // Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. See Runtime.
  runtime?: appsync_ResolverRuntime;
}
export class Resolver extends DS_Resource {
  // Response mapping template for UNIT resolver or 'after mapping template' for PIPELINE resolver. Required for non-Lambda resolvers.
  public responseTemplate?: string;

  // Describes a Sync configuration for a resolver. See Sync Config.
  public syncConfig?: appsync_ResolverSyncConfig;

  // Type name from the schema defined in the GraphQL API.
  public type?: string;

  // The caching configuration for the resolver. See Pipeline Config.
  public pipelineConfig?: appsync_ResolverPipelineConfig;

  // Data source name.
  public dataSource?: string;

  // Resolver type. Valid values are `UNIT` and `PIPELINE`.
  public kind?: string;

  // Maximum batching size for a resolver. Valid values are between `0` and `2000`.
  public maxBatchSize?: number;

  // Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. See Runtime.
  public runtime?: appsync_ResolverRuntime;

  // API ID for the GraphQL API.
  public apiId?: string;

  // ARN
  public arn?: string;

  // Field name from the schema defined in the GraphQL API.
  public field?: string;

  // The Caching Config. See Caching Config.
  public cachingConfig?: appsync_ResolverCachingConfig;

  // The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.
  public code?: string;

  // Request mapping template for UNIT resolver or 'before mapping template' for PIPELINE resolver. Required for non-Lambda resolvers.
  public requestTemplate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'requestTemplate',
        "Request mapping template for UNIT resolver or 'before mapping template' for PIPELINE resolver. Required for non-Lambda resolvers.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'apiId',
        'API ID for the GraphQL API.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'code',
        'The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'responseTemplate',
        "Response mapping template for UNIT resolver or 'after mapping template' for PIPELINE resolver. Required for non-Lambda resolvers.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'runtime',
        'Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. See Runtime.',
        () => appsync_ResolverRuntime_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cachingConfig',
        'The Caching Config. See Caching Config.',
        () => appsync_ResolverCachingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxBatchSize',
        'Maximum batching size for a resolver. Valid values are between `0` and `2000`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'pipelineConfig',
        'The caching configuration for the resolver. See Pipeline Config.',
        () => appsync_ResolverPipelineConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kind',
        'Resolver type. Valid values are `UNIT` and `PIPELINE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'Type name from the schema defined in the GraphQL API.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'syncConfig',
        'Describes a Sync configuration for a resolver. See Sync Config.',
        () => appsync_ResolverSyncConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataSource',
        'Data source name.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'field',
        'Field name from the schema defined in the GraphQL API.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
