import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codebuild_ProjectLogsConfigS3Logs {
  // Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects. Valid values are `NONE`, `READ_ONLY`, and `FULL`. your CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket.
  bucketOwnerAccess?: string;

  // Whether to disable encrypting output artifacts. If `type` is set to `NO_ARTIFACTS`, this value is ignored. Defaults to `false`.
  encryptionDisabled?: boolean;

  // Information about the build output artifact location. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored. If `type` is set to `S3`, this is the name of the output bucket.
  location?: string;

  // Current status of logs in S3 for a build project. Valid values: `ENABLED`, `DISABLED`. Defaults to `DISABLED`.
  status?: string;
}

export function codebuild_ProjectLogsConfigS3Logs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Current status of logs in S3 for a build project. Valid values: `ENABLED`, `DISABLED`. Defaults to `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketOwnerAccess",
      "Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects. Valid values are `NONE`, `READ_ONLY`, and `FULL`. your CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket.",
      [],
      false,
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
      "Information about the build output artifact location. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored. If `type` is set to `S3`, this is the name of the output bucket.",
      [],
      false,
      false,
    ),
  ];
}
