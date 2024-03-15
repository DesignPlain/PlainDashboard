import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AutoscalingPolicySecondaryWorkerConfig } from "../types/AutoscalingPolicySecondaryWorkerConfig";
import { AutoscalingPolicyWorkerConfig } from "../types/AutoscalingPolicyWorkerConfig";
import { AutoscalingPolicyBasicAlgorithm } from "../types/AutoscalingPolicyBasicAlgorithm";

export interface AutoscalingPolicyArgs {
  /*
Basic algorithm for autoscaling.
Structure is documented below.
*/
  BasicAlgorithm?: AutoscalingPolicyBasicAlgorithm;

  /*
The  location where the autoscaling policy should reside.
The default value is `global`.
*/
  Location?: string;

  /*
The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.


- - -
*/
  PolicyId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Describes how the autoscaler will operate for secondary workers.
Structure is documented below.
*/
  SecondaryWorkerConfig?: AutoscalingPolicySecondaryWorkerConfig;

  /*
Describes how the autoscaler will operate for primary workers.
Structure is documented below.
*/
  WorkerConfig?: AutoscalingPolicyWorkerConfig;
}
export class AutoscalingPolicy extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Describes how the autoscaler will operate for secondary workers.
Structure is documented below.
*/
  public SecondaryWorkerConfig?: AutoscalingPolicySecondaryWorkerConfig;

  /*
Describes how the autoscaler will operate for primary workers.
Structure is documented below.
*/
  public WorkerConfig?: AutoscalingPolicyWorkerConfig;

  /*
Basic algorithm for autoscaling.
Structure is documented below.
*/
  public BasicAlgorithm?: AutoscalingPolicyBasicAlgorithm;

  /*
The  location where the autoscaling policy should reside.
The default value is `global`.
*/
  public Location?: string;

  // The "resource name" of the autoscaling policy.
  public Name?: string;

  /*
The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.


- - -
*/
  public PolicyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BasicAlgorithm",
        "Basic algorithm for autoscaling.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The  location where the autoscaling policy should reside.\nThe default value is `global`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PolicyId",
        "The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),\nand hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between\n3 and 50 characters.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecondaryWorkerConfig",
        "Describes how the autoscaler will operate for secondary workers.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkerConfig",
        "Describes how the autoscaler will operate for primary workers.\nStructure is documented below.",
      ),
    ];
  }
}
