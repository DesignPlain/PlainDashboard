import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codebuild_ProjectSecondaryArtifact,
  codebuild_ProjectSecondaryArtifact_GetTypes,
} from "../types/codebuild_ProjectSecondaryArtifact";
import {
  codebuild_ProjectSecondarySource,
  codebuild_ProjectSecondarySource_GetTypes,
} from "../types/codebuild_ProjectSecondarySource";
import {
  codebuild_ProjectVpcConfig,
  codebuild_ProjectVpcConfig_GetTypes,
} from "../types/codebuild_ProjectVpcConfig";
import {
  codebuild_ProjectEnvironment,
  codebuild_ProjectEnvironment_GetTypes,
} from "../types/codebuild_ProjectEnvironment";
import {
  codebuild_ProjectLogsConfig,
  codebuild_ProjectLogsConfig_GetTypes,
} from "../types/codebuild_ProjectLogsConfig";
import {
  codebuild_ProjectArtifacts,
  codebuild_ProjectArtifacts_GetTypes,
} from "../types/codebuild_ProjectArtifacts";
import {
  codebuild_ProjectBuildBatchConfig,
  codebuild_ProjectBuildBatchConfig_GetTypes,
} from "../types/codebuild_ProjectBuildBatchConfig";
import {
  codebuild_ProjectCache,
  codebuild_ProjectCache_GetTypes,
} from "../types/codebuild_ProjectCache";
import {
  codebuild_ProjectSource,
  codebuild_ProjectSource_GetTypes,
} from "../types/codebuild_ProjectSource";
import {
  codebuild_ProjectFileSystemLocation,
  codebuild_ProjectFileSystemLocation_GetTypes,
} from "../types/codebuild_ProjectFileSystemLocation";
import {
  codebuild_ProjectSecondarySourceVersion,
  codebuild_ProjectSecondarySourceVersion_GetTypes,
} from "../types/codebuild_ProjectSecondarySourceVersion";

export interface ProjectArgs {
  // AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build project's build output artifacts.
  encryptionKey?: string;

  // Configuration block. Detailed below.
  environment?: codebuild_ProjectEnvironment;

  // A set of file system locations to mount inside the build. File system locations are documented below.
  fileSystemLocations?: Array<codebuild_ProjectFileSystemLocation>;

  // Configuration block. Detailed below.
  secondarySourceVersions?: Array<codebuild_ProjectSecondarySourceVersion>;

  // Configuration block. Detailed below.
  artifacts?: codebuild_ProjectArtifacts;

  // Configuration block. Detailed below.
  logsConfig?: codebuild_ProjectLogsConfig;

  // Project's name.
  name?: string;

  // Number of minutes, from 5 to 480 (8 hours), a build is allowed to be queued before it times out. The default is 8 hours. The `queued_timeout` property is not available on the `Lambda` compute type.
  queuedTimeout?: number;

  // Specify a maximum number of concurrent builds for the project. The value specified must be greater than 0 and less than the account concurrent running builds limit.
  concurrentBuildLimit?: number;

  // Defines the batch build options for the project.
  buildBatchConfig?: codebuild_ProjectBuildBatchConfig;

  // Configuration block. Detailed below.
  cache?: codebuild_ProjectCache;

  // Short description of the project.
  description?: string;

  // The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds in order to display them publicly. Only applicable if `project_visibility` is `PUBLIC_READ`.
  resourceAccessRole?: string;

  // Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
  serviceRole?: string;

  // Version of the build input to be built for this project. If not specified, the latest version is used.
  sourceVersion?: string;

  // Generates a publicly-accessible URL for the projects build badge. Available as `badge_url` attribute when enabled.
  badgeEnabled?: boolean;

  // Specifies the visibility of the project's builds. Possible values are: `PUBLIC_READ` and `PRIVATE`. Default value is `PRIVATE`.
  projectVisibility?: string;

  // Configuration block. Detailed below.
  secondaryArtifacts?: Array<codebuild_ProjectSecondaryArtifact>;

  // Configuration block. Detailed below.
  secondarySources?: Array<codebuild_ProjectSecondarySource>;

  /*
Configuration block. Detailed below.

The following arguments are optional:
*/
  source?: codebuild_ProjectSource;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block. Detailed below.
  vpcConfig?: codebuild_ProjectVpcConfig;

  // Number of minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes. The `build_timeout` property is not available on the `Lambda` compute type.
  buildTimeout?: number;
}
export class Project extends Resource {
  // ARN of the CodeBuild project.
  public arn?: string;

  // A set of file system locations to mount inside the build. File system locations are documented below.
  public fileSystemLocations?: Array<codebuild_ProjectFileSystemLocation>;

  // Specifies the visibility of the project's builds. Possible values are: `PUBLIC_READ` and `PRIVATE`. Default value is `PRIVATE`.
  public projectVisibility?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
  public serviceRole?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // URL of the build badge when `badge_enabled` is enabled.
  public badgeUrl?: string;

  // Short description of the project.
  public description?: string;

  // Configuration block. Detailed below.
  public environment?: codebuild_ProjectEnvironment;

  // Number of minutes, from 5 to 480 (8 hours), a build is allowed to be queued before it times out. The default is 8 hours. The `queued_timeout` property is not available on the `Lambda` compute type.
  public queuedTimeout?: number;

  // Configuration block. Detailed below.
  public secondarySourceVersions?: Array<codebuild_ProjectSecondarySourceVersion>;

  /*
Configuration block. Detailed below.

The following arguments are optional:
*/
  public source?: codebuild_ProjectSource;

  // Number of minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes. The `build_timeout` property is not available on the `Lambda` compute type.
  public buildTimeout?: number;

  // Specify a maximum number of concurrent builds for the project. The value specified must be greater than 0 and less than the account concurrent running builds limit.
  public concurrentBuildLimit?: number;

  // The project identifier used with the public build APIs.
  public publicProjectAlias?: string;

  // Defines the batch build options for the project.
  public buildBatchConfig?: codebuild_ProjectBuildBatchConfig;

  // Configuration block. Detailed below.
  public cache?: codebuild_ProjectCache;

  // AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build project's build output artifacts.
  public encryptionKey?: string;

  // Project's name.
  public name?: string;

  // Configuration block. Detailed below.
  public secondaryArtifacts?: Array<codebuild_ProjectSecondaryArtifact>;

  // Generates a publicly-accessible URL for the projects build badge. Available as `badge_url` attribute when enabled.
  public badgeEnabled?: boolean;

  // The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds in order to display them publicly. Only applicable if `project_visibility` is `PUBLIC_READ`.
  public resourceAccessRole?: string;

  // Version of the build input to be built for this project. If not specified, the latest version is used.
  public sourceVersion?: string;

  // Configuration block. Detailed below.
  public vpcConfig?: codebuild_ProjectVpcConfig;

  // Configuration block. Detailed below.
  public secondarySources?: Array<codebuild_ProjectSecondarySource>;

  // Configuration block. Detailed below.
  public artifacts?: codebuild_ProjectArtifacts;

  // Configuration block. Detailed below.
  public logsConfig?: codebuild_ProjectLogsConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "fileSystemLocations",
        "A set of file system locations to mount inside the build. File system locations are documented below.",
        codebuild_ProjectFileSystemLocation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceAccessRole",
        "The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds in order to display them publicly. Only applicable if `project_visibility` is `PUBLIC_READ`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Project's name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cache",
        "Configuration block. Detailed below.",
        codebuild_ProjectCache_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceVersion",
        "Version of the build input to be built for this project. If not specified, the latest version is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logsConfig",
        "Configuration block. Detailed below.",
        codebuild_ProjectLogsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "queuedTimeout",
        "Number of minutes, from 5 to 480 (8 hours), a build is allowed to be queued before it times out. The default is 8 hours. The `queued_timeout` property is not available on the `Lambda` compute type.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "concurrentBuildLimit",
        "Specify a maximum number of concurrent builds for the project. The value specified must be greater than 0 and less than the account concurrent running builds limit.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectVisibility",
        "Specifies the visibility of the project's builds. Possible values are: `PUBLIC_READ` and `PRIVATE`. Default value is `PRIVATE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "secondaryArtifacts",
        "Configuration block. Detailed below.",
        codebuild_ProjectSecondaryArtifact_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "encryptionKey",
        "AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build project's build output artifacts.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "secondarySourceVersions",
        "Configuration block. Detailed below.",
        codebuild_ProjectSecondarySourceVersion_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "artifacts",
        "Configuration block. Detailed below.",
        codebuild_ProjectArtifacts_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "secondarySources",
        "Configuration block. Detailed below.",
        codebuild_ProjectSecondarySource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "source",
        "Configuration block. Detailed below.\n\nThe following arguments are optional:",
        codebuild_ProjectSource_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "buildTimeout",
        "Number of minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes. The `build_timeout` property is not available on the `Lambda` compute type.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceRole",
        "Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "badgeEnabled",
        "Generates a publicly-accessible URL for the projects build badge. Available as `badge_url` attribute when enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration block. Detailed below.",
        codebuild_ProjectVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "environment",
        "Configuration block. Detailed below.",
        codebuild_ProjectEnvironment_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "buildBatchConfig",
        "Defines the batch build options for the project.",
        codebuild_ProjectBuildBatchConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Short description of the project.",
        [],
        false,
        false,
      ),
    ];
  }
}
