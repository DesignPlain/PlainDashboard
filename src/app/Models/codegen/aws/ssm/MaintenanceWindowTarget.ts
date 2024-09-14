import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_MaintenanceWindowTargetTarget,
  ssm_MaintenanceWindowTargetTarget_GetTypes,
} from "../types/ssm_MaintenanceWindowTargetTarget";

export interface MaintenanceWindowTargetArgs {
  // The description of the maintenance window target.
  description?: string;

  // The name of the maintenance window target.
  name?: string;

  // User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
  ownerInformation?: string;

  // The type of target being registered with the Maintenance Window. Possible values are `INSTANCE` and `RESOURCE_GROUP`.
  resourceType?: string;

  /*
The targets to register with the maintenance window. In other words, the instances to run commands on when the maintenance window runs. You can specify targets using instance IDs, resource group names, or tags that have been applied to instances. For more information about these examples formats see
(https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-tutorial-targets-examples.html)
*/
  targets?: Array<ssm_MaintenanceWindowTargetTarget>;

  // The Id of the maintenance window to register the target with.
  windowId?: string;
}
export class MaintenanceWindowTarget extends DS_Resource {
  // The description of the maintenance window target.
  public description?: string;

  // The name of the maintenance window target.
  public name?: string;

  // User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
  public ownerInformation?: string;

  // The type of target being registered with the Maintenance Window. Possible values are `INSTANCE` and `RESOURCE_GROUP`.
  public resourceType?: string;

  /*
The targets to register with the maintenance window. In other words, the instances to run commands on when the maintenance window runs. You can specify targets using instance IDs, resource group names, or tags that have been applied to instances. For more information about these examples formats see
(https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-tutorial-targets-examples.html)
*/
  public targets?: Array<ssm_MaintenanceWindowTargetTarget>;

  // The Id of the maintenance window to register the target with.
  public windowId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ownerInformation",
        "User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceType",
        "The type of target being registered with the Maintenance Window. Possible values are `INSTANCE` and `RESOURCE_GROUP`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targets",
        "The targets to register with the maintenance window. In other words, the instances to run commands on when the maintenance window runs. You can specify targets using instance IDs, resource group names, or tags that have been applied to instances. For more information about these examples formats see\n(https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-tutorial-targets-examples.html)",
        () => ssm_MaintenanceWindowTargetTarget_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "windowId",
        "The Id of the maintenance window to register the target with.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the maintenance window target.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the maintenance window target.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
