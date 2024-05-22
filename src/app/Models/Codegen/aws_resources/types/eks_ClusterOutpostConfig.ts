import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  eks_ClusterOutpostConfigControlPlanePlacement,
  eks_ClusterOutpostConfigControlPlanePlacement_GetTypes,
} from "./eks_ClusterOutpostConfigControlPlanePlacement";

export interface eks_ClusterOutpostConfig {
  // The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. This argument is a list of arns, but only a single Outpost ARN is supported currently.
  outpostArns?: Array<string>;

  /*
The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. The instance type that you specify is used for all Kubernetes control plane instances. The instance type can't be changed after cluster creation. Choose an instance type based on the number of nodes that your cluster will have. If your cluster will have:

- 1–20 nodes, then we recommend specifying a large instance type.

- 21–100 nodes, then we recommend specifying an xlarge instance type.

- 101–250 nodes, then we recommend specifying a 2xlarge instance type.

For a list of the available Amazon EC2 instance types, see Compute and storage in AWS Outposts rack features  The control plane is not automatically scaled by Amazon EKS.
*/
  controlPlaneInstanceType?: string;

  /*
An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on AWS Outpost.
The `control_plane_placement` configuration block supports the following arguments:
*/
  controlPlanePlacement?: eks_ClusterOutpostConfigControlPlanePlacement;
}

export function eks_ClusterOutpostConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "outpostArns",
      "The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. This argument is a list of arns, but only a single Outpost ARN is supported currently.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "controlPlaneInstanceType",
      "The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. The instance type that you specify is used for all Kubernetes control plane instances. The instance type can't be changed after cluster creation. Choose an instance type based on the number of nodes that your cluster will have. If your cluster will have:\n\n* 1–20 nodes, then we recommend specifying a large instance type.\n\n* 21–100 nodes, then we recommend specifying an xlarge instance type.\n\n* 101–250 nodes, then we recommend specifying a 2xlarge instance type.\n\nFor a list of the available Amazon EC2 instance types, see Compute and storage in AWS Outposts rack features  The control plane is not automatically scaled by Amazon EKS.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "controlPlanePlacement",
      "An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on AWS Outpost.\nThe `control_plane_placement` configuration block supports the following arguments:",
      eks_ClusterOutpostConfigControlPlanePlacement_GetTypes(),
      false,
      false,
    ),
  ];
}
