import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codegurureviewer_RepositoryAssociationKmsKeyDetails,
  codegurureviewer_RepositoryAssociationKmsKeyDetails_GetTypes,
} from "../types/codegurureviewer_RepositoryAssociationKmsKeyDetails";
import {
  codegurureviewer_RepositoryAssociationRepository,
  codegurureviewer_RepositoryAssociationRepository_GetTypes,
} from "../types/codegurureviewer_RepositoryAssociationRepository";
import {
  codegurureviewer_RepositoryAssociationS3RepositoryDetail,
  codegurureviewer_RepositoryAssociationS3RepositoryDetail_GetTypes,
} from "../types/codegurureviewer_RepositoryAssociationS3RepositoryDetail";

export interface RepositoryAssociationArgs {
  // An object describing the KMS key to asssociate. Block is documented below.
  kmsKeyDetails?: codegurureviewer_RepositoryAssociationKmsKeyDetails;

  /*
An object describing the repository to associate. Valid values: `bitbucket`, `codecommit`, `github_enterprise_server`, or `s3_bucket`. Block is documented below. Note: for repositories that leverage CodeStar connections (ex. `bitbucket`, `github_enterprise_server`) the connection must be in `Available` status prior to creating this resource.

The following arguments are optional:
*/
  repository?: codegurureviewer_RepositoryAssociationRepository;

  //
  tags?: Map<string, string>;
}
export class RepositoryAssociation extends Resource {
  /*
An object describing the repository to associate. Valid values: `bitbucket`, `codecommit`, `github_enterprise_server`, or `s3_bucket`. Block is documented below. Note: for repositories that leverage CodeStar connections (ex. `bitbucket`, `github_enterprise_server`) the connection must be in `Available` status prior to creating this resource.

The following arguments are optional:
*/
  public repository?: codegurureviewer_RepositoryAssociationRepository;

  // The state of the repository association.
  public state?: string;

  // A description of why the repository association is in the current state.
  public stateReason?: string;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
  public connectionArn?: string;

  // The name of the third party source repository.
  public name?: string;

  // An object describing the KMS key to asssociate. Block is documented below.
  public kmsKeyDetails?: codegurureviewer_RepositoryAssociationKmsKeyDetails;

  // The username for the account that owns the repository.
  public owner?: string;

  // The provider type of the repository association.
  public providerType?: string;

  //
  public s3RepositoryDetails?: Array<codegurureviewer_RepositoryAssociationS3RepositoryDetail>;

  // The Amazon Resource Name (ARN) identifying the repository association.
  public arn?: string;

  // The ID of the repository association.
  public associationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "kmsKeyDetails",
        "An object describing the KMS key to asssociate. Block is documented below.",
        codegurureviewer_RepositoryAssociationKmsKeyDetails_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "repository",
        "An object describing the repository to associate. Valid values: `bitbucket`, `codecommit`, `github_enterprise_server`, or `s3_bucket`. Block is documented below. Note: for repositories that leverage CodeStar connections (ex. `bitbucket`, `github_enterprise_server`) the connection must be in `Available` status prior to creating this resource.\n\nThe following arguments are optional:",
        codegurureviewer_RepositoryAssociationRepository_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
