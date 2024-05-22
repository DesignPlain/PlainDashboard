import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codegurureviewer_RepositoryAssociationRepositoryBitbucket,
  codegurureviewer_RepositoryAssociationRepositoryBitbucket_GetTypes,
} from "./codegurureviewer_RepositoryAssociationRepositoryBitbucket";
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

export interface codegurureviewer_RepositoryAssociationRepository {
  //
  bitbucket?: codegurureviewer_RepositoryAssociationRepositoryBitbucket;

  //
  codecommit?: codegurureviewer_RepositoryAssociationRepositoryCodecommit;

  //
  githubEnterpriseServer?: codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer;

  //
  s3Bucket?: codegurureviewer_RepositoryAssociationRepositoryS3Bucket;
}

export function codegurureviewer_RepositoryAssociationRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bitbucket",
      "",
      codegurureviewer_RepositoryAssociationRepositoryBitbucket_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codecommit",
      "",
      codegurureviewer_RepositoryAssociationRepositoryCodecommit_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "githubEnterpriseServer",
      "",
      codegurureviewer_RepositoryAssociationRepositoryGithubEnterpriseServer_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Bucket",
      "",
      codegurureviewer_RepositoryAssociationRepositoryS3Bucket_GetTypes(),
      false,
      true,
    ),
  ];
}
