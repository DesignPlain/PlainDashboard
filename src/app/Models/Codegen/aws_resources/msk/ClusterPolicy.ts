import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ClusterPolicyArgs {
  // The Amazon Resource Name (ARN) that uniquely identifies the cluster.
  clusterArn?: string;

  // Resource policy for cluster.
  policy?: string;
}
export class ClusterPolicy extends Resource {
  // Resource policy for cluster.
  public policy?: string;

  // The Amazon Resource Name (ARN) that uniquely identifies the cluster.
  public clusterArn?: string;

  //
  public currentVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "Resource policy for cluster.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterArn",
        "The Amazon Resource Name (ARN) that uniquely identifies the cluster.",
        [],
        true,
        false,
      ),
    ];
  }
}
