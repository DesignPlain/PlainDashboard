import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfunctionsv2_getFunctionBuildConfigSource,
  cloudfunctionsv2_getFunctionBuildConfigSource_GetTypes,
} from './cloudfunctionsv2_getFunctionBuildConfigSource';

export interface cloudfunctionsv2_getFunctionBuildConfig {
  // User managed repository created in Artifact Registry optionally with a customer managed encryption key.
  dockerRepository?: string;

  /*
The name of the function (as defined in source code) that will be executed.
Defaults to the resource name suffix, if not specified. For backward
compatibility, if function with given name is not found, then the system
will try to use function named "function". For Node.js this is name of a
function exported by the module specified in source_location.
*/
  entryPoint?: string;

  // User-provided build-time environment variables for the function.
  environmentVariables?: Map<string, string>;

  /*
The runtime in which to run the function. Required when deploying a new
function, optional when updating an existing function.
*/
  runtime?: string;

  // The location of the function source code.
  sources?: Array<cloudfunctionsv2_getFunctionBuildConfigSource>;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  workerPool?: string;

  /*
The Cloud Build name of the latest successful
deployment of the function.
*/
  build?: string;
}

export function cloudfunctionsv2_getFunctionBuildConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'workerPool',
      'Name of the Cloud Build Custom Worker Pool that should be used to build the function.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'build',
      'The Cloud Build name of the latest successful\ndeployment of the function.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dockerRepository',
      'User managed repository created in Artifact Registry optionally with a customer managed encryption key.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'entryPoint',
      'The name of the function (as defined in source code) that will be executed.\nDefaults to the resource name suffix, if not specified. For backward\ncompatibility, if function with given name is not found, then the system\nwill try to use function named "function". For Node.js this is name of a\nfunction exported by the module specified in source_location.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'environmentVariables',
      'User-provided build-time environment variables for the function.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'runtime',
      'The runtime in which to run the function. Required when deploying a new\nfunction, optional when updating an existing function.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sources',
      'The location of the function source code.',
      () => cloudfunctionsv2_getFunctionBuildConfigSource_GetTypes(),
      true,
      false,
    ),
  ];
}
