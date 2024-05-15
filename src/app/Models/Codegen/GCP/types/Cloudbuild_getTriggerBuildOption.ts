import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_getTriggerBuildOptionVolume,
  Cloudbuild_getTriggerBuildOptionVolume_GetTypes,
} from "./Cloudbuild_getTriggerBuildOptionVolume";

export interface Cloudbuild_getTriggerBuildOption {
  /*
Requested disk size for the VM that runs the build. Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.
*/
  DiskSizeGb?: number;

  /*
Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.
*/
  DynamicSubstitutions?: boolean;

  /*
A list of global environment variable definitions that will exist for all build steps
in this build. If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
*/
  Envs?: Array<string>;

  // Option to specify the logging mode, which determines if and where build logs are stored. Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]
  Logging?: string;

  /*
Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]
*/
  SubstitutionOption?: string;

  // Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]
  LogStreamingOption?: string;

  // Compute Engine machine type on which to run the build.
  MachineType?: string;

  // Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]
  RequestedVerifyOption?: string;

  /*
A list of global environment variables, which are encrypted using a Cloud Key Management
Service crypto key. These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.
*/
  SecretEnvs?: Array<string>;

  // Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]
  SourceProvenanceHashes?: Array<string>;

  /*
Global list of volumes to mount for ALL build steps

Each volume is created as an empty volume prior to starting the build process.
Upon completion of the build, volumes and their contents are discarded. Global
volume names and paths cannot conflict with the volumes defined a build step.

Using a global volume in a build with only one step is not valid as it is indicative
of a build request with an incorrect configuration.
*/
  Volumes?: Array<Cloudbuild_getTriggerBuildOptionVolume>;

  /*
Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}

This field is experimental.
*/
  WorkerPool?: string;
}

export function Cloudbuild_getTriggerBuildOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Envs",
      'A list of global environment variable definitions that will exist for all build steps\nin this build. If a variable is defined in both globally and in a build step,\nthe variable will use the build step value.\n\nThe elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Logging",
      'Option to specify the logging mode, which determines if and where build logs are stored. Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "Compute Engine machine type on which to run the build.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RequestedVerifyOption",
      'Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SourceProvenanceHashes",
      'Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Volumes",
      "Global list of volumes to mount for ALL build steps\n\nEach volume is created as an empty volume prior to starting the build process.\nUpon completion of the build, volumes and their contents are discarded. Global\nvolume names and paths cannot conflict with the volumes defined a build step.\n\nUsing a global volume in a build with only one step is not valid as it is indicative\nof a build request with an incorrect configuration.",
      Cloudbuild_getTriggerBuildOptionVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DynamicSubstitutions",
      "Option to specify whether or not to apply bash style string operations to the substitutions.\n\nNOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SubstitutionOption",
      'Option to specify behavior when there is an error in the substitution checks.\n\nNOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden\nin the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LogStreamingOption",
      'Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecretEnvs",
      "A list of global environment variables, which are encrypted using a Cloud Key Management\nService crypto key. These values must be specified in the build's Secret. These variables\nwill be available to all build steps in this build.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkerPool",
      "Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}\n\nThis field is experimental.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSizeGb",
      'Requested disk size for the VM that runs the build. Note that this is NOT "disk free";\nsome of the space will be used by the operating system and build utilities.\nAlso note that this is the minimum disk size that will be allocated for the build --\nthe build may run with a larger disk than requested. At present, the maximum disk size\nis 1000GB; builds that request more than the maximum are rejected with an error.',
      [],
      true,
      false,
    ),
  ];
}
