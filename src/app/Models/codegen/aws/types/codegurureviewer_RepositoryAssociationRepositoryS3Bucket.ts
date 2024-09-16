import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codegurureviewer_RepositoryAssociationRepositoryS3Bucket {
  // The name of the S3 bucket used for associating a new S3 repository. Note: The name must begin with `codeguru-reviewer-`.
  bucketName?: string;

  // The name of the repository in the S3 bucket.
  name?: string;
}

export function codegurureviewer_RepositoryAssociationRepositoryS3Bucket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      'The name of the S3 bucket used for associating a new S3 repository. Note: The name must begin with `codeguru-reviewer-`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the repository in the S3 bucket.',
      () => [],
      true,
      false,
    ),
  ];
}
