import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codebuild_ProjectSourceGitSubmodulesConfig,
  codebuild_ProjectSourceGitSubmodulesConfig_GetTypes,
} from './codebuild_ProjectSourceGitSubmodulesConfig';
import {
  codebuild_ProjectSourceBuildStatusConfig,
  codebuild_ProjectSourceBuildStatusConfig_GetTypes,
} from './codebuild_ProjectSourceBuildStatusConfig';

export interface codebuild_ProjectSource {
  // Location of the source code from git or s3.
  location?: string;

  // Whether to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket.
  reportBuildStatus?: boolean;

  // Type of repository that contains the source code to be built. Valid values: `BITBUCKET`, `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `GITLAB`, `GITLAB_SELF_MANAGED`, `NO_SOURCE`, `S3`.
  type?: string;

  // Configuration block that contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket. `build_status_config` blocks are documented below.
  buildStatusConfig?: codebuild_ProjectSourceBuildStatusConfig;

  // Build specification to use for this build project's related builds. This must be set when `type` is `NO_SOURCE`. Also, if a non-default buildspec file name or file path aside from the root is used, it must be specified.
  buildspec?: string;

  // Truncate git history to this many commits. Use `0` for a `Full` checkout which you need to run commands like `git branch --show-current`. See [AWS CodePipeline User Guide: Tutorial: Use full clone with a GitHub pipeline source](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github-gitclone.html) for details.
  gitCloneDepth?: number;

  // Configuration block. Detailed below.
  gitSubmodulesConfig?: codebuild_ProjectSourceGitSubmodulesConfig;

  // Ignore SSL warnings when connecting to source control.
  insecureSsl?: boolean;
}

export function codebuild_ProjectSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'location',
      'Location of the source code from git or s3.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'reportBuildStatus',
      "Whether to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of repository that contains the source code to be built. Valid values: `BITBUCKET`, `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `GITLAB`, `GITLAB_SELF_MANAGED`, `NO_SOURCE`, `S3`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'buildStatusConfig',
      'Configuration block that contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket. `build_status_config` blocks are documented below.',
      () => codebuild_ProjectSourceBuildStatusConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'buildspec',
      "Build specification to use for this build project's related builds. This must be set when `type` is `NO_SOURCE`. Also, if a non-default buildspec file name or file path aside from the root is used, it must be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'gitCloneDepth',
      'Truncate git history to this many commits. Use `0` for a `Full` checkout which you need to run commands like `git branch --show-current`. See [AWS CodePipeline User Guide: Tutorial: Use full clone with a GitHub pipeline source](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github-gitclone.html) for details.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'gitSubmodulesConfig',
      'Configuration block. Detailed below.',
      () => codebuild_ProjectSourceGitSubmodulesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'insecureSsl',
      'Ignore SSL warnings when connecting to source control.',
      () => [],
      false,
      false,
    ),
  ];
}
