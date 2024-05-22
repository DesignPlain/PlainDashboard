import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codegurureviewer_RepositoryAssociationRepositoryS3Bucket {
  // The name of the third party source repository.
  name?: string;

  // The name of the S3 bucket used for associating a new S3 repository. Note: The name must begin with `codeguru-reviewer-`.
  bucketName?: string;
}

export function codegurureviewer_RepositoryAssociationRepositoryS3Bucket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the third party source repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "The name of the S3 bucket used for associating a new S3 repository. Note: The name must begin with `codeguru-reviewer-`.",
      [],
      true,
      false,
    ),
  ];
}
