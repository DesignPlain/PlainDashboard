import { FunctionBuildConfigSource } from "./FunctionBuildConfigSource";

export interface FunctionBuildConfig {
  /*
The runtime in which to run the function. Required when deploying a new
function, optional when updating an existing function.
*/
  Runtime?: string;

  /*
The location of the function source code.
Structure is documented below.
*/
  Source?: FunctionBuildConfigSource;

  // Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  WorkerPool?: string;

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
}
