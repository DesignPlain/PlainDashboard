import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codegurureviewer_RepositoryAssociationRepositoryCodecommit,
  codegurureviewer_RepositoryAssociationRepositoryCodecommit_GetTypes,
} from "./codegurureviewer_RepositoryAssociationRepositoryCodecommit";
import {
  codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer,
  codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer_GetTypes,
} from "./codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer";
import {
  codegurureviewer_RepositoryAssociationRepositoryS3Bucket,
  codegurureviewer_RepositoryAssociationRepositoryS3Bucket_GetTypes,
} from "./codegurureviewer_RepositoryAssociationRepositoryS3Bucket";
import {
  codegurureviewer_RepositoryAssociationRepositoryBitbucket,
  codegurureviewer_RepositoryAssociationRepositoryBitbucket_GetTypes,
} from "./codegurureviewer_RepositoryAssociationRepositoryBitbucket";

export interface codegurureviewer_RepositoryAssociationRepository {
  //
  codecommit?: codegurureviewer_RepositoryAssociationRepositoryCodecommit;

  //
  githubEnterpriseServer?: codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer;

  //
  s3Bucket?: codegurureviewer_RepositoryAssociationRepositoryS3Bucket;

  //
  bitbucket?: codegurureviewer_RepositoryAssociationRepositoryBitbucket;
}

export function codegurureviewer_RepositoryAssociationRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bitbucket",
      "",
      () =>
        codegurureviewer_RepositoryAssociationRepositoryBitbucket_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codecommit",
      "",
      () =>
        codegurureviewer_RepositoryAssociationRepositoryCodecommit_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "githubEnterpriseServer",
      "",
      () =>
        codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Bucket",
      "",
      () => codegurureviewer_RepositoryAssociationRepositoryS3Bucket_GetTypes(),
      false,
      true,
    ),
  ];
}
