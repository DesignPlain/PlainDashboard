import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codegurureviewer_RepositoryAssociationKmsKeyDetails,
  codegurureviewer_RepositoryAssociationKmsKeyDetails_GetTypes,
} from '../types/codegurureviewer_RepositoryAssociationKmsKeyDetails';
import {
  codegurureviewer_RepositoryAssociationRepository,
  codegurureviewer_RepositoryAssociationRepository_GetTypes,
} from '../types/codegurureviewer_RepositoryAssociationRepository';
import {
  codegurureviewer_RepositoryAssociationS3RepositoryDetail,
  codegurureviewer_RepositoryAssociationS3RepositoryDetail_GetTypes,
} from '../types/codegurureviewer_RepositoryAssociationS3RepositoryDetail';

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
export class RepositoryAssociation extends DS_Resource {
  // The Amazon Resource Name (ARN) identifying the repository association.
  public arn?: string;

  // The ID of the repository association.
  public associationId?: string;

  // The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
  public connectionArn?: string;

  // An object describing the KMS key to asssociate. Block is documented below.
  public kmsKeyDetails?: codegurureviewer_RepositoryAssociationKmsKeyDetails;

  // The owner of the repository.
  public owner?: string;

  /*
An object describing the repository to associate. Valid values: `bitbucket`, `codecommit`, `github_enterprise_server`, or `s3_bucket`. Block is documented below. Note: for repositories that leverage CodeStar connections (ex. `bitbucket`, `github_enterprise_server`) the connection must be in `Available` status prior to creating this resource.

The following arguments are optional:
*/
  public repository?: codegurureviewer_RepositoryAssociationRepository;

  //
  public s3RepositoryDetails?: Array<codegurureviewer_RepositoryAssociationS3RepositoryDetail>;

  // The state of the repository association.
  public state?: string;

  //
  public tags?: Map<string, string>;

  // The name of the repository.
  public name?: string;

  // The provider type of the repository association.
  public providerType?: string;

  // A description of why the repository association is in the current state.
  public stateReason?: string;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'kmsKeyDetails',
        'An object describing the KMS key to asssociate. Block is documented below.',
        () => codegurureviewer_RepositoryAssociationKmsKeyDetails_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'repository',
        'An object describing the repository to associate. Valid values: `bitbucket`, `codecommit`, `github_enterprise_server`, or `s3_bucket`. Block is documented below. Note: for repositories that leverage CodeStar connections (ex. `bitbucket`, `github_enterprise_server`) the connection must be in `Available` status prior to creating this resource.\n\nThe following arguments are optional:',
        () => codegurureviewer_RepositoryAssociationRepository_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
