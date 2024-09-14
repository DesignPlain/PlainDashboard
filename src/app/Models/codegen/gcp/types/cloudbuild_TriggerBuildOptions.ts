import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudbuild_TriggerBuildOptionsVolume,
  cloudbuild_TriggerBuildOptionsVolume_GetTypes,
} from "./cloudbuild_TriggerBuildOptionsVolume";

export interface cloudbuild_TriggerBuildOptions {
  // Compute Engine machine type on which to run the build.
  machineType?: string;

  /*
A list of global environment variables, which are encrypted using a Cloud Key Management
Service crypto key. These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.
*/
  secretEnvs?: Array<string>;

  /*
Global list of volumes to mount for ALL build steps
Each volume is created as an empty volume prior to starting the build process.
Upon completion of the build, volumes and their contents are discarded. Global
volume names and paths cannot conflict with the volumes defined a build step.
Using a global volume in a build with only one step is not valid as it is indicative
of a build request with an incorrect configuration.
Structure is documented below.
*/
  volumes?: Array<cloudbuild_TriggerBuildOptionsVolume>;

  /*
Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}
This field is experimental.
*/
  workerPool?: string;

  /*
Option to define build log streaming behavior to Google Cloud Storage.
Possible values are: `STREAM_DEFAULT`, `STREAM_ON`, `STREAM_OFF`.
*/
  logStreamingOption?: string;

  /*
Option to specify the logging mode, which determines if and where build logs are stored.
Possible values are: `LOGGING_UNSPECIFIED`, `LEGACY`, `GCS_ONLY`, `STACKDRIVER_ONLY`, `CLOUD_LOGGING_ONLY`, `NONE`.
*/
  logging?: string;

  /*
A list of global environment variable definitions that will exist for all build steps
in this build. If a variable is defined in both globally and in a build step,
the variable will use the build step value.
The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
*/
  envs?: Array<string>;

  /*
Requested verifiability options.
Possible values are: `NOT_VERIFIED`, `VERIFIED`.
*/
  requestedVerifyOption?: string;

  /*
Requested hash for SourceProvenance.
Each value may be one of: `NONE`, `SHA256`, `MD5`.
*/
  sourceProvenanceHashes?: Array<string>;

  /*
Option to specify behavior when there is an error in the substitution checks.
NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file.
Possible values are: `MUST_MATCH`, `ALLOW_LOOSE`.
*/
  substitutionOption?: string;

  /*
Requested disk size for the VM that runs the build. Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.
*/
  diskSizeGb?: number;

  /*
Option to specify whether or not to apply bash style string operations to the substitutions.
NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.
*/
  dynamicSubstitutions?: boolean;
}

export function cloudbuild_TriggerBuildOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "Compute Engine machine type on which to run the build.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logStreamingOption",
      "Option to define build log streaming behavior to Google Cloud Storage.\nPossible values are: `STREAM_DEFAULT`, `STREAM_ON`, `STREAM_OFF`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logging",
      "Option to specify the logging mode, which determines if and where build logs are stored.\nPossible values are: `LOGGING_UNSPECIFIED`, `LEGACY`, `GCS_ONLY`, `STACKDRIVER_ONLY`, `CLOUD_LOGGING_ONLY`, `NONE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      'Requested disk size for the VM that runs the build. Note that this is NOT "disk free";\nsome of the space will be used by the operating system and build utilities.\nAlso note that this is the minimum disk size that will be allocated for the build --\nthe build may run with a larger disk than requested. At present, the maximum disk size\nis 1000GB; builds that request more than the maximum are rejected with an error.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "requestedVerifyOption",
      "Requested verifiability options.\nPossible values are: `NOT_VERIFIED`, `VERIFIED`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceProvenanceHashes",
      "Requested hash for SourceProvenance.\nEach value may be one of: `NONE`, `SHA256`, `MD5`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "substitutionOption",
      "Option to specify behavior when there is an error in the substitution checks.\nNOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden\nin the build configuration file.\nPossible values are: `MUST_MATCH`, `ALLOW_LOOSE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dynamicSubstitutions",
      "Option to specify whether or not to apply bash style string operations to the substitutions.\nNOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secretEnvs",
      "A list of global environment variables, which are encrypted using a Cloud Key Management\nService crypto key. These values must be specified in the build's Secret. These variables\nwill be available to all build steps in this build.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "Global list of volumes to mount for ALL build steps\nEach volume is created as an empty volume prior to starting the build process.\nUpon completion of the build, volumes and their contents are discarded. Global\nvolume names and paths cannot conflict with the volumes defined a build step.\nUsing a global volume in a build with only one step is not valid as it is indicative\nof a build request with an incorrect configuration.\nStructure is documented below.",
      () => cloudbuild_TriggerBuildOptionsVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workerPool",
      "Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}\nThis field is experimental.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "envs",
      'A list of global environment variable definitions that will exist for all build steps\nin this build. If a variable is defined in both globally and in a build step,\nthe variable will use the build step value.\nThe elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
