import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ClusterRoleAssociationArgs {
  // Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).
  featureName?: string;

  // Amazon Resource Name (ARN) of the IAM Role to associate with the DB Cluster.
  roleArn?: string;

  // DB Cluster Identifier to associate with the IAM Role.
  dbClusterIdentifier?: string;
}
export class ClusterRoleAssociation extends Resource {
  // DB Cluster Identifier to associate with the IAM Role.
  public dbClusterIdentifier?: string;

  // Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).
  public featureName?: string;

  // Amazon Resource Name (ARN) of the IAM Role to associate with the DB Cluster.
  public roleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dbClusterIdentifier",
        "DB Cluster Identifier to associate with the IAM Role.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "featureName",
        "Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "Amazon Resource Name (ARN) of the IAM Role to associate with the DB Cluster.",
        [],
        true,
        true,
      ),
    ];
  }
}
