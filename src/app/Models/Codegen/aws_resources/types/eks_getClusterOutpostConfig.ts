import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  eks_getClusterOutpostConfigControlPlanePlacement,
  eks_getClusterOutpostConfigControlPlanePlacement_GetTypes,
} from "./eks_getClusterOutpostConfigControlPlanePlacement";

export interface eks_getClusterOutpostConfig {
  // The Amazon EC2 instance type for all Kubernetes control plane instances.
  controlPlaneInstanceType?: string;

  // An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on AWS Outpost.
  controlPlanePlacements?: Array<eks_getClusterOutpostConfigControlPlanePlacement>;

  // List of ARNs of the Outposts hosting the EKS cluster. Only a single ARN is supported currently.
  outpostArns?: Array<string>;
}

export function eks_getClusterOutpostConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "controlPlaneInstanceType",
      "The Amazon EC2 instance type for all Kubernetes control plane instances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "controlPlanePlacements",
      "An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on AWS Outpost.",
      eks_getClusterOutpostConfigControlPlanePlacement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outpostArns",
      "List of ARNs of the Outposts hosting the EKS cluster. Only a single ARN is supported currently.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
