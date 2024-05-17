import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_getFunctionBuildConfigSource,
  Cloudfunctionsv2_getFunctionBuildConfigSource_GetTypes,
} from "./Cloudfunctionsv2_getFunctionBuildConfigSource";

export interface Cloudfunctionsv2_getFunctionBuildConfig {
  // The location of the function source code.
  Sources?: Array<Cloudfunctionsv2_getFunctionBuildConfigSource>;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  WorkerPool?: string;

  /*
The Cloud Build name of the latest successful
deployment of the function.
*/
  Build?: string;

  // User managed repository created in Artifact Registry optionally with a customer managed encryption key.
  DockerRepository?: string;

  /*
The name of the function (as defined in source code) that will be executed.
Defaults to the resource name suffix, if not specified. For backward
compatibility, if function with given name is not found, then the system
will try to use function named "function". For Node.js this is name of a
function exported by the module specified in source_location.
*/
  EntryPoint?: string;

  // User-provided build-time environment variables for the function.
  EnvironmentVariables?: Map<string, string>;

  /*
The runtime in which to run the function. Required when deploying a new
function, optional when updating an existing function.
*/
  Runtime?: string;
}

export function Cloudfunctionsv2_getFunctionBuildConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Sources",
      "The location of the function source code.",
      Cloudfunctionsv2_getFunctionBuildConfigSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkerPool",
      "Name of the Cloud Build Custom Worker Pool that should be used to build the function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Build",
      "The Cloud Build name of the latest successful\ndeployment of the function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DockerRepository",
      "User managed repository created in Artifact Registry optionally with a customer managed encryption key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EntryPoint",
      'The name of the function (as defined in source code) that will be executed.\nDefaults to the resource name suffix, if not specified. For backward\ncompatibility, if function with given name is not found, then the system\nwill try to use function named "function". For Node.js this is name of a\nfunction exported by the module specified in source_location.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "EnvironmentVariables",
      "User-provided build-time environment variables for the function.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Runtime",
      "The runtime in which to run the function. Required when deploying a new\nfunction, optional when updating an existing function.",
      [],
      true,
      false,
    ),
  ];
}
