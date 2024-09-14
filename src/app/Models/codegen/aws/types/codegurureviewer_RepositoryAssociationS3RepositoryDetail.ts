import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact,
  codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact_GetTypes,
} from "./codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact";

export interface codegurureviewer_RepositoryAssociationS3RepositoryDetail {
  // The name of the S3 bucket used for associating a new S3 repository. Note: The name must begin with `codeguru-reviewer-`.
  bucketName?: string;

  //
  codeArtifacts?: Array<codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact>;
}

export function codegurureviewer_RepositoryAssociationS3RepositoryDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "The name of the S3 bucket used for associating a new S3 repository. Note: The name must begin with `codeguru-reviewer-`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "codeArtifacts",
      "",
      () =>
        codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact_GetTypes(),
      false,
      false,
    ),
  ];
}
