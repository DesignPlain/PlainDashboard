import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuild_TriggerBuildStepVolume,
  cloudbuild_TriggerBuildStepVolume_GetTypes,
} from "./cloudbuild_TriggerBuildStepVolume";

export interface cloudbuild_TriggerBuildStep {
  /*
Working directory to use when running this step's container.
If this value is a relative path, it is relative to the build's working
directory. If this value is absolute, it may be outside the build's working
directory, in which case the contents of the path may not be persisted
across build step executions, unless a `volume` for that path is specified.
If the build specifies a `RepoSource` with `dir` and a step with a
`dir`,
which specifies an absolute path, the `RepoSource` `dir` is ignored
for the step's execution.
*/
  dir?: string;

  /*
Entrypoint to be used instead of the build step image's
default entrypoint.
If unset, the image's default entrypoint is used
*/
  entrypoint?: string;

  /*
The ID(s) of the step(s) that this build step depends on.
This build step will not start until all the build steps in `wait_for`
have completed successfully. If `wait_for` is empty, this build step
will start when all previous build steps in the `Build.Steps` list
have completed successfully.
*/
  waitFors?: Array<string>;

  /*
Allow this build step to fail without failing the entire build.
If false, the entire build will fail if this step fails. Otherwise, the
build will succeed, but this step will still have a failure status.
Error information will be reported in the `failureDetail` field.
`allowExitCodes` takes precedence over this field.
*/
  allowFailure?: boolean;

  /*
A list of arguments that will be presented to the step when it is started.
If the image used to run the step's container has an entrypoint, the args
are used as arguments to that entrypoint. If the image does not define an
entrypoint, the first element in args is used as the entrypoint, and the
remainder will be used as arguments.
*/
  args?: Array<string>;

  /*
Unique identifier for this build step, used in `wait_for` to
reference this build step as a dependency.
*/
  id?: string;

  /*
List of volumes to mount into the build step.
Each volume is created as an empty volume prior to execution of the
build step. Upon completion of the build, volumes and their contents
are discarded.
Using a named volume in only one step is not valid as it is
indicative of a build request with an incorrect configuration.
Structure is documented below.
*/
  volumes?: Array<cloudbuild_TriggerBuildStepVolume>;

  /*
Allow this build step to fail without failing the entire build if and
only if the exit code is one of the specified codes.
If `allowFailure` is also specified, this field will take precedence.
*/
  allowExitCodes?: Array<number>;

  /*
The name of the container image that will run this particular build step.
If the image is available in the host's Docker daemon's cache, it will be
run directly. If not, the host will attempt to pull the image first, using
the builder service account's credentials if necessary.
The Docker daemon's cache will already have the latest versions of all of
the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders
for images and examples).
The Docker daemon will also have cached many of the layers for some popular
images, like "ubuntu", "debian", but they will be refreshed at the time
you attempt to use them.
If you built an image in a previous build step, it will be stored in the
host's Docker daemon's cache and is available to use as the name for a
later build step.
*/
  name?: string;

  /*
Output only. Stores timing information for executing this
build step.
*/
  timing?: string;

  /*
A list of environment variable definitions to be used when
running a step.
The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE".
*/
  envs?: Array<string>;

  /*
A shell script to be executed in the step.
When script is provided, the user cannot specify the entrypoint or args.
*/
  script?: string;

  /*
A list of environment variables which are encrypted using
a Cloud Key
Management Service crypto key. These values must be specified in
the build's `Secret`.
*/
  secretEnvs?: Array<string>;

  /*
Time limit for executing this build step. If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out.
*/
  timeout?: string;
}

export function cloudbuild_TriggerBuildStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowExitCodes",
      "Allow this build step to fail without failing the entire build if and\nonly if the exit code is one of the specified codes.\nIf `allowFailure` is also specified, this field will take precedence.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "script",
      "A shell script to be executed in the step.\nWhen script is provided, the user cannot specify the entrypoint or args.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowFailure",
      "Allow this build step to fail without failing the entire build.\nIf false, the entire build will fail if this step fails. Otherwise, the\nbuild will succeed, but this step will still have a failure status.\nError information will be reported in the `failureDetail` field.\n`allowExitCodes` takes precedence over this field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "A list of arguments that will be presented to the step when it is started.\nIf the image used to run the step's container has an entrypoint, the args\nare used as arguments to that entrypoint. If the image does not define an\nentrypoint, the first element in args is used as the entrypoint, and the\nremainder will be used as arguments.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for this build step, used in `wait_for` to\nreference this build step as a dependency.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Time limit for executing this build step. If not defined,\nthe step has no\ntime limit and will be allowed to continue to run until either it\ncompletes or the build itself times out.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dir",
      "Working directory to use when running this step's container.\nIf this value is a relative path, it is relative to the build's working\ndirectory. If this value is absolute, it may be outside the build's working\ndirectory, in which case the contents of the path may not be persisted\nacross build step executions, unless a `volume` for that path is specified.\nIf the build specifies a `RepoSource` with `dir` and a step with a\n`dir`,\nwhich specifies an absolute path, the `RepoSource` `dir` is ignored\nfor the step's execution.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entrypoint",
      "Entrypoint to be used instead of the build step image's\ndefault entrypoint.\nIf unset, the image's default entrypoint is used",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "List of volumes to mount into the build step.\nEach volume is created as an empty volume prior to execution of the\nbuild step. Upon completion of the build, volumes and their contents\nare discarded.\nUsing a named volume in only one step is not valid as it is\nindicative of a build request with an incorrect configuration.\nStructure is documented below.",
      cloudbuild_TriggerBuildStepVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timing",
      "Output only. Stores timing information for executing this\nbuild step.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "envs",
      'A list of environment variable definitions to be used when\nrunning a step.\nThe elements are of the form "KEY=VALUE" for the environment variable\n"KEY" being given the value "VALUE".',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secretEnvs",
      "A list of environment variables which are encrypted using\na Cloud Key\nManagement Service crypto key. These values must be specified in\nthe build's `Secret`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "waitFors",
      "The ID(s) of the step(s) that this build step depends on.\nThis build step will not start until all the build steps in `wait_for`\nhave completed successfully. If `wait_for` is empty, this build step\nwill start when all previous build steps in the `Build.Steps` list\nhave completed successfully.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the container image that will run this particular build step.\nIf the image is available in the host's Docker daemon's cache, it will be\nrun directly. If not, the host will attempt to pull the image first, using\nthe builder service account's credentials if necessary.\nThe Docker daemon's cache will already have the latest versions of all of\nthe officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders\nfor images and examples).\nThe Docker daemon will also have cached many of the layers for some popular\nimages, like \"ubuntu\", \"debian\", but they will be refreshed at the time\nyou attempt to use them.\nIf you built an image in a previous build step, it will be stored in the\nhost's Docker daemon's cache and is available to use as the name for a\nlater build step.",
      [],
      true,
      false,
    ),
  ];
}
