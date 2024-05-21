import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_AutoscalingPolicyBasicAlgorithm,
  dataproc_AutoscalingPolicyBasicAlgorithm_GetTypes,
} from "../types/dataproc_AutoscalingPolicyBasicAlgorithm";
import {
  dataproc_AutoscalingPolicySecondaryWorkerConfig,
  dataproc_AutoscalingPolicySecondaryWorkerConfig_GetTypes,
} from "../types/dataproc_AutoscalingPolicySecondaryWorkerConfig";
import {
  dataproc_AutoscalingPolicyWorkerConfig,
  dataproc_AutoscalingPolicyWorkerConfig_GetTypes,
} from "../types/dataproc_AutoscalingPolicyWorkerConfig";

export interface AutoscalingPolicyArgs {
  /*
Basic algorithm for autoscaling.
Structure is documented below.
*/
  basicAlgorithm?: dataproc_AutoscalingPolicyBasicAlgorithm;

  /*
The  location where the autoscaling policy should reside.
The default value is `global`.
*/
  location?: string;

  /*
The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.


- - -
*/
  policyId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Describes how the autoscaler will operate for secondary workers.
Structure is documented below.
*/
  secondaryWorkerConfig?: dataproc_AutoscalingPolicySecondaryWorkerConfig;

  /*
Describes how the autoscaler will operate for primary workers.
Structure is documented below.
*/
  workerConfig?: dataproc_AutoscalingPolicyWorkerConfig;
}
export class AutoscalingPolicy extends Resource {
  /*
The  location where the autoscaling policy should reside.
The default value is `global`.
*/
  public location?: string;

  // The "resource name" of the autoscaling policy.
  public name?: string;

  /*
The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.


- - -
*/
  public policyId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Describes how the autoscaler will operate for secondary workers.
Structure is documented below.
*/
  public secondaryWorkerConfig?: dataproc_AutoscalingPolicySecondaryWorkerConfig;

  /*
Describes how the autoscaler will operate for primary workers.
Structure is documented below.
*/
  public workerConfig?: dataproc_AutoscalingPolicyWorkerConfig;

  /*
Basic algorithm for autoscaling.
Structure is documented below.
*/
  public basicAlgorithm?: dataproc_AutoscalingPolicyBasicAlgorithm;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "workerConfig",
        "Describes how the autoscaler will operate for primary workers.\nStructure is documented below.",
        dataproc_AutoscalingPolicyWorkerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "basicAlgorithm",
        "Basic algorithm for autoscaling.\nStructure is documented below.",
        dataproc_AutoscalingPolicyBasicAlgorithm_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The  location where the autoscaling policy should reside.\nThe default value is `global`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyId",
        "The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),\nand hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between\n3 and 50 characters.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "secondaryWorkerConfig",
        "Describes how the autoscaler will operate for secondary workers.\nStructure is documented below.",
        dataproc_AutoscalingPolicySecondaryWorkerConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
