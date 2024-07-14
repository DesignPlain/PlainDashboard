import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ClusterIamRolesArgs {
  // The name of the Redshift Cluster IAM Roles.
  clusterIdentifier?: string;

  // The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.
  defaultIamRoleArn?: string;

  // A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
  iamRoleArns?: Array<string>;
}
export class ClusterIamRoles extends Resource {
  // The name of the Redshift Cluster IAM Roles.
  public clusterIdentifier?: string;

  // The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.
  public defaultIamRoleArn?: string;

  // A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
  public iamRoleArns?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "defaultIamRoleArn",
        "The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "iamRoleArns",
        "A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The name of the Redshift Cluster IAM Roles.",
        [],
        true,
        true,
      ),
    ];
  }
}
