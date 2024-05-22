import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codebuild_ProjectSecondaryArtifact {
  // Type of build output artifact to create. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, valid values are `NONE` or `ZIP`.
  packaging?: string;

  // Artifact identifier. Must be the same specified inside the AWS CodeBuild build specification.
  artifactIdentifier?: string;

  // Whether to disable encrypting output artifacts. If `type` is set to `NO_ARTIFACTS`, this value is ignored. Defaults to `false`.
  encryptionDisabled?: boolean;

  // Information about the build output artifact location. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, this is the name of the output bucket. If `path` is not specified, `location` can specify the path of the output artifact in the output bucket.
  location?: string;

  // Name of the project. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, this is the name of the output artifact object.
  name?: string;

  // Namespace to use in storing build artifacts. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, valid values are `BUILD_ID` or `NONE`.
  namespaceType?: string;

  // Whether a name specified in the build specification overrides the artifact name.
  overrideArtifactName?: boolean;

  // Along with `namespace_type` and `name`, the pattern that AWS CodeBuild uses to name and store the output artifact. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, this is the path to the output artifact.
  path?: string;

  // Build output artifact's type. Valid values `CODEPIPELINE`, `NO_ARTIFACTS`, and `S3`.
  type?: string;

  // Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects. Valid values are `NONE`, `READ_ONLY`, and `FULL`. The CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket.
  bucketOwnerAccess?: string;
}

export function codebuild_ProjectSecondaryArtifact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "overrideArtifactName",
      "Whether a name specified in the build specification overrides the artifact name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Build output artifact's type. Valid values `CODEPIPELINE`, `NO_ARTIFACTS`, and `S3`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "packaging",
      "Type of build output artifact to create. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, valid values are `NONE` or `ZIP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "artifactIdentifier",
      "Artifact identifier. Must be the same specified inside the AWS CodeBuild build specification.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encryptionDisabled",
      "Whether to disable encrypting output artifacts. If `type` is set to `NO_ARTIFACTS`, this value is ignored. Defaults to `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "Information about the build output artifact location. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, this is the name of the output bucket. If `path` is not specified, `location` can specify the path of the output artifact in the output bucket.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespaceType",
      "Namespace to use in storing build artifacts. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, valid values are `BUILD_ID` or `NONE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the project. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, this is the name of the output artifact object.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Along with `namespace_type` and `name`, the pattern that AWS CodeBuild uses to name and store the output artifact. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, this is the path to the output artifact.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketOwnerAccess",
      "Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects. Valid values are `NONE`, `READ_ONLY`, and `FULL`. The CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket.",
      [],
      false,
      false,
    ),
  ];
}
