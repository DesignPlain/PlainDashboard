import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  eks_FargateProfileSelector,
  eks_FargateProfileSelector_GetTypes,
} from "../types/eks_FargateProfileSelector";

export interface FargateProfileArgs {
  // Name of the EKS Cluster.
  clusterName?: string;

  // Name of the EKS Fargate Profile.
  fargateProfileName?: string;

  // Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Fargate Profile.
  podExecutionRoleArn?: string;

  // Configuration block(s) for selecting Kubernetes Pods to execute with this EKS Fargate Profile. Detailed below.
  selectors?: Array<eks_FargateProfileSelector>;

  /*
Identifiers of private EC2 Subnets to associate with the EKS Fargate Profile. These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME` (where `CLUSTER_NAME` is replaced with the name of the EKS Cluster).

The following arguments are optional:
*/
  subnetIds?: Array<string>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class FargateProfile extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Name of the EKS Cluster.
  public clusterName?: string;

  // Name of the EKS Fargate Profile.
  public fargateProfileName?: string;

  // Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Fargate Profile.
  public podExecutionRoleArn?: string;

  // Configuration block(s) for selecting Kubernetes Pods to execute with this EKS Fargate Profile. Detailed below.
  public selectors?: Array<eks_FargateProfileSelector>;

  /*
Identifiers of private EC2 Subnets to associate with the EKS Fargate Profile. These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME` (where `CLUSTER_NAME` is replaced with the name of the EKS Cluster).

The following arguments are optional:
*/
  public subnetIds?: Array<string>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the EKS Fargate Profile.
  public arn?: string;

  // Status of the EKS Fargate Profile.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterName",
        "Name of the EKS Cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fargateProfileName",
        "Name of the EKS Fargate Profile.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "podExecutionRoleArn",
        "Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Fargate Profile.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "selectors",
        "Configuration block(s) for selecting Kubernetes Pods to execute with this EKS Fargate Profile. Detailed below.",
        eks_FargateProfileSelector_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "Identifiers of private EC2 Subnets to associate with the EKS Fargate Profile. These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME` (where `CLUSTER_NAME` is replaced with the name of the EKS Cluster).\n\nThe following arguments are optional:",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
