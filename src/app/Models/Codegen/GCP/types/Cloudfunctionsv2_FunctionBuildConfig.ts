import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_FunctionBuildConfigSource,
  Cloudfunctionsv2_FunctionBuildConfigSource_GetTypes,
} from "./Cloudfunctionsv2_FunctionBuildConfigSource";

export interface Cloudfunctionsv2_FunctionBuildConfig {
  /*
(Output)
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

  /*
The location of the function source code.
Structure is documented below.
*/
  Source?: Cloudfunctionsv2_FunctionBuildConfigSource;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  WorkerPool?: string;
}

export function Cloudfunctionsv2_FunctionBuildConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EntryPoint",
      'The name of the function (as defined in source code) that will be executed.\nDefaults to the resource name suffix, if not specified. For backward\ncompatibility, if function with given name is not found, then the system\nwill try to use function named "function". For Node.js this is name of a\nfunction exported by the module specified in source_location.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "EnvironmentVariables",
      "User-provided build-time environment variables for the function.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Runtime",
      "The runtime in which to run the function. Required when deploying a new\nfunction, optional when updating an existing function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Source",
      "The location of the function source code.\nStructure is documented below.",
      Cloudfunctionsv2_FunctionBuildConfigSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkerPool",
      "Name of the Cloud Build Custom Worker Pool that should be used to build the function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Build",
      "(Output)\nThe Cloud Build name of the latest successful\ndeployment of the function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DockerRepository",
      "User managed repository created in Artifact Registry optionally with a customer managed encryption key.",
      [],
      false,
      false,
    ),
  ];
}
