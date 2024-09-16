import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RoleAssociationArgs {
  // DB Instance Identifier to associate with the IAM Role.
  dbInstanceIdentifier?: string;

  // Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).
  featureName?: string;

  // Amazon Resource Name (ARN) of the IAM Role to associate with the DB Instance.
  roleArn?: string;
}
export class RoleAssociation extends DS_Resource {
  // DB Instance Identifier to associate with the IAM Role.
  public dbInstanceIdentifier?: string;

  // Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).
  public featureName?: string;

  // Amazon Resource Name (ARN) of the IAM Role to associate with the DB Instance.
  public roleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'dbInstanceIdentifier',
        'DB Instance Identifier to associate with the IAM Role.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'featureName',
        'Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'Amazon Resource Name (ARN) of the IAM Role to associate with the DB Instance.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
