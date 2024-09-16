import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appsync_FunctionRuntime,
  appsync_FunctionRuntime_GetTypes,
} from '../types/appsync_FunctionRuntime';
import {
  appsync_FunctionSyncConfig,
  appsync_FunctionSyncConfig_GetTypes,
} from '../types/appsync_FunctionSyncConfig';

export interface FunctionArgs {
  // Version of the request mapping template. Currently the supported value is `2018-05-29`. Does not apply when specifying `code`.
  functionVersion?: string;

  // Maximum batching size for a resolver. Valid values are between `0` and `2000`.
  maxBatchSize?: number;

  // Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. See `runtime` Block for details.
  runtime?: appsync_FunctionRuntime;

  // Describes a Sync configuration for a resolver. See `sync_config` Block for details.
  syncConfig?: appsync_FunctionSyncConfig;

  // ID of the associated AppSync API.
  apiId?: string;

  // Function data source name.
  dataSource?: string;

  // Function description.
  description?: string;

  // Function response mapping template.
  responseMappingTemplate?: string;

  // The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.
  code?: string;

  // Function name. The function name does not have to be unique.
  name?: string;

  // Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
  requestMappingTemplate?: string;
}
export class Function extends DS_Resource {
  // Unique ID representing the Function object.
  public functionId?: string;

  // Version of the request mapping template. Currently the supported value is `2018-05-29`. Does not apply when specifying `code`.
  public functionVersion?: string;

  // Maximum batching size for a resolver. Valid values are between `0` and `2000`.
  public maxBatchSize?: number;

  // Function response mapping template.
  public responseMappingTemplate?: string;

  // Describes a Sync configuration for a resolver. See `sync_config` Block for details.
  public syncConfig?: appsync_FunctionSyncConfig;

  // ID of the associated AppSync API.
  public apiId?: string;

  // Function description.
  public description?: string;

  // Function data source name.
  public dataSource?: string;

  // Function name. The function name does not have to be unique.
  public name?: string;

  // Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
  public requestMappingTemplate?: string;

  // Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. See `runtime` Block for details.
  public runtime?: appsync_FunctionRuntime;

  // ARN of the Function object.
  public arn?: string;

  // The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.
  public code?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'apiId',
        'ID of the associated AppSync API.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataSource',
        'Function data source name.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Function name. The function name does not have to be unique.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'requestMappingTemplate',
        'Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'functionVersion',
        'Version of the request mapping template. Currently the supported value is `2018-05-29`. Does not apply when specifying `code`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'runtime',
        'Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. See `runtime` Block for details.',
        () => appsync_FunctionRuntime_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Function description.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'responseMappingTemplate',
        'Function response mapping template.',
        () => [],
        false,
        false,
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
        InputType.Number,
        'maxBatchSize',
        'Maximum batching size for a resolver. Valid values are between `0` and `2000`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'syncConfig',
        'Describes a Sync configuration for a resolver. See `sync_config` Block for details.',
        () => appsync_FunctionSyncConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
