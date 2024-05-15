import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_AutoscalingPolicySecondaryWorkerConfig,
  Dataproc_AutoscalingPolicySecondaryWorkerConfig_GetTypes,
} from "../types/Dataproc_AutoscalingPolicySecondaryWorkerConfig";
import {
  Dataproc_AutoscalingPolicyWorkerConfig,
  Dataproc_AutoscalingPolicyWorkerConfig_GetTypes,
} from "../types/Dataproc_AutoscalingPolicyWorkerConfig";
import {
  Dataproc_AutoscalingPolicyBasicAlgorithm,
  Dataproc_AutoscalingPolicyBasicAlgorithm_GetTypes,
} from "../types/Dataproc_AutoscalingPolicyBasicAlgorithm";

export interface AutoscalingPolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Describes how the autoscaler will operate for secondary workers.
Structure is documented below.
*/
  SecondaryWorkerConfig?: Dataproc_AutoscalingPolicySecondaryWorkerConfig;

  /*
Describes how the autoscaler will operate for primary workers.
Structure is documented below.
*/
  WorkerConfig?: Dataproc_AutoscalingPolicyWorkerConfig;

  /*
Basic algorithm for autoscaling.
Structure is documented below.
*/
  BasicAlgorithm?: Dataproc_AutoscalingPolicyBasicAlgorithm;

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
}
export class AutoscalingPolicy extends Resource {
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

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Describes how the autoscaler will operate for secondary workers.
Structure is documented below.
*/
  public SecondaryWorkerConfig?: Dataproc_AutoscalingPolicySecondaryWorkerConfig;

  /*
Describes how the autoscaler will operate for primary workers.
Structure is documented below.
*/
  public WorkerConfig?: Dataproc_AutoscalingPolicyWorkerConfig;

  /*
Basic algorithm for autoscaling.
Structure is documented below.
*/
  public BasicAlgorithm?: Dataproc_AutoscalingPolicyBasicAlgorithm;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "BasicAlgorithm",
        "Basic algorithm for autoscaling.\nStructure is documented below.",
        Dataproc_AutoscalingPolicyBasicAlgorithm_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The  location where the autoscaling policy should reside.\nThe default value is `global`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PolicyId",
        "The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),\nand hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between\n3 and 50 characters.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SecondaryWorkerConfig",
        "Describes how the autoscaler will operate for secondary workers.\nStructure is documented below.",
        Dataproc_AutoscalingPolicySecondaryWorkerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WorkerConfig",
        "Describes how the autoscaler will operate for primary workers.\nStructure is documented below.",
        Dataproc_AutoscalingPolicyWorkerConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
