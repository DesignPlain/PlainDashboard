import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codebuild_ProjectSecondarySourceBuildStatusConfig,
  codebuild_ProjectSecondarySourceBuildStatusConfig_GetTypes,
} from "./codebuild_ProjectSecondarySourceBuildStatusConfig";
import {
  codebuild_ProjectSecondarySourceGitSubmodulesConfig,
  codebuild_ProjectSecondarySourceGitSubmodulesConfig_GetTypes,
} from "./codebuild_ProjectSecondarySourceGitSubmodulesConfig";

export interface codebuild_ProjectSecondarySource {
  // Configuration block. Detailed below.
  gitSubmodulesConfig?: codebuild_ProjectSecondarySourceGitSubmodulesConfig;

  // Location of the source code from git or s3.
  location?: string;

  // An identifier for this project source. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length.
  sourceIdentifier?: string;

  // Whether to report the status of a build's start and finish to your source provider. This option is only valid when your source provider is `GITHUB`, `BITBUCKET`, or `GITHUB_ENTERPRISE`.
  reportBuildStatus?: boolean;

  // Type of repository that contains the source code to be built. Valid values: `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `BITBUCKET` or `S3`.
  type?: string;

  // Configuration block that contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is `GITHUB`, `GITHUB_ENTERPRISE`, or `BITBUCKET`. `build_status_config` blocks are documented below.
  buildStatusConfig?: codebuild_ProjectSecondarySourceBuildStatusConfig;

  // The build spec declaration to use for this build project's related builds. This must be set when `type` is `NO_SOURCE`. It can either be a path to a file residing in the repository to be built or a local file path leveraging the `file()` built-in.
  buildspec?: string;

  // Truncate git history to this many commits. Use `0` for a `Full` checkout which you need to run commands like `git branch --show-current`. See [AWS CodePipeline User Guide: Tutorial: Use full clone with a GitHub pipeline source](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github-gitclone.html) for details.
  gitCloneDepth?: number;

  // Ignore SSL warnings when connecting to source control.
  insecureSsl?: boolean;
}

export function codebuild_ProjectSecondarySource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "location",
      "Location of the source code from git or s3.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceIdentifier",
      "An identifier for this project source. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "reportBuildStatus",
      "Whether to report the status of a build's start and finish to your source provider. This option is only valid when your source provider is `GITHUB`, `BITBUCKET`, or `GITHUB_ENTERPRISE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of repository that contains the source code to be built. Valid values: `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `BITBUCKET` or `S3`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "buildStatusConfig",
      "Configuration block that contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is `GITHUB`, `GITHUB_ENTERPRISE`, or `BITBUCKET`. `build_status_config` blocks are documented below.",
      codebuild_ProjectSecondarySourceBuildStatusConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "buildspec",
      "The build spec declaration to use for this build project's related builds. This must be set when `type` is `NO_SOURCE`. It can either be a path to a file residing in the repository to be built or a local file path leveraging the `file()` built-in.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "insecureSsl",
      "Ignore SSL warnings when connecting to source control.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gitSubmodulesConfig",
      "Configuration block. Detailed below.",
      codebuild_ProjectSecondarySourceGitSubmodulesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "gitCloneDepth",
      "Truncate git history to this many commits. Use `0` for a `Full` checkout which you need to run commands like `git branch --show-current`. See [AWS CodePipeline User Guide: Tutorial: Use full clone with a GitHub pipeline source](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github-gitclone.html) for details.",
      [],
      false,
      false,
    ),
  ];
}
