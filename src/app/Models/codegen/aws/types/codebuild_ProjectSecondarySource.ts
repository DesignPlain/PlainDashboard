import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codebuild_ProjectSecondarySourceBuildStatusConfig,
  codebuild_ProjectSecondarySourceBuildStatusConfig_GetTypes,
} from "./codebuild_ProjectSecondarySourceBuildStatusConfig";
import {
  codebuild_ProjectSecondarySourceGitSubmodulesConfig,
  codebuild_ProjectSecondarySourceGitSubmodulesConfig_GetTypes,
} from "./codebuild_ProjectSecondarySourceGitSubmodulesConfig";

export interface codebuild_ProjectSecondarySource {
  // Truncate git history to this many commits. Use `0` for a `Full` checkout which you need to run commands like `git branch --show-current`. See [AWS CodePipeline User Guide: Tutorial: Use full clone with a GitHub pipeline source](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github-gitclone.html) for details.
  gitCloneDepth?: number;

  // Whether to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket.
  reportBuildStatus?: boolean;

  // Ignore SSL warnings when connecting to source control.
  insecureSsl?: boolean;

  // Location of the source code from git or s3.
  location?: string;

  // An identifier for this project source. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length.
  sourceIdentifier?: string;

  // Type of repository that contains the source code to be built. Valid values: `BITBUCKET`, `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `GITLAB`, `GITLAB_SELF_MANAGED`, `NO_SOURCE`, `S3`.
  type?: string;

  // Configuration block that contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket. `build_status_config` blocks are documented below.
  buildStatusConfig?: codebuild_ProjectSecondarySourceBuildStatusConfig;

  // The build spec declaration to use for this build project's related builds. This must be set when `type` is `NO_SOURCE`. It can either be a path to a file residing in the repository to be built or a local file path leveraging the `file()` built-in.
  buildspec?: string;

  // Configuration block. Detailed below.
  gitSubmodulesConfig?: codebuild_ProjectSecondarySourceGitSubmodulesConfig;
}

export function codebuild_ProjectSecondarySource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "insecureSsl",
      "Ignore SSL warnings when connecting to source control.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "Location of the source code from git or s3.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "buildStatusConfig",
      "Configuration block that contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket. `build_status_config` blocks are documented below.",
      () => codebuild_ProjectSecondarySourceBuildStatusConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gitSubmodulesConfig",
      "Configuration block. Detailed below.",
      () => codebuild_ProjectSecondarySourceGitSubmodulesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "buildspec",
      "The build spec declaration to use for this build project's related builds. This must be set when `type` is `NO_SOURCE`. It can either be a path to a file residing in the repository to be built or a local file path leveraging the `file()` built-in.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "gitCloneDepth",
      "Truncate git history to this many commits. Use `0` for a `Full` checkout which you need to run commands like `git branch --show-current`. See [AWS CodePipeline User Guide: Tutorial: Use full clone with a GitHub pipeline source](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github-gitclone.html) for details.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "reportBuildStatus",
      "Whether to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceIdentifier",
      "An identifier for this project source. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of repository that contains the source code to be built. Valid values: `BITBUCKET`, `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `GITLAB`, `GITLAB_SELF_MANAGED`, `NO_SOURCE`, `S3`.",
      () => [],
      true,
      false,
    ),
  ];
}
