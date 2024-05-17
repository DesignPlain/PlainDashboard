import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_PerInstanceConfigPreservedState,
  Compute_PerInstanceConfigPreservedState_GetTypes,
} from "../types/Compute_PerInstanceConfigPreservedState";

export interface PerInstanceConfigArgs {
  /*
When true, deleting this config will immediately remove the underlying instance.
When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.
*/
  RemoveInstanceOnDestroy?: boolean;

  /*
The instance group manager this instance config is part of.


- - -
*/
  InstanceGroupManager?: string;

  /*
The preserved state for this instance.
Structure is documented below.
*/
  PreservedState?: Compute_PerInstanceConfigPreservedState;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
When true, deleting this config will immediately remove any specified state from the underlying instance.
When false, deleting this config will -not- immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.
*/
  RemoveInstanceStateOnDestroy?: boolean;

  // Zone where the containing instance group manager is located
  Zone?: string;

  /*
The minimal action to perform on the instance during an update.
Default is `NONE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  MinimalAction?: string;

  /*
The most disruptive action to perform on the instance during an update.
Default is `REPLACE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  MostDisruptiveAllowedAction?: string;

  // The name for this per-instance config and its corresponding instance.
  Name?: string;
}
export class PerInstanceConfig extends Resource {
  /*
The preserved state for this instance.
Structure is documented below.
*/
  public PreservedState?: Compute_PerInstanceConfigPreservedState;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
When true, deleting this config will immediately remove the underlying instance.
When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.
*/
  public RemoveInstanceOnDestroy?: boolean;

  /*
When true, deleting this config will immediately remove any specified state from the underlying instance.
When false, deleting this config will -not- immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.
*/
  public RemoveInstanceStateOnDestroy?: boolean;

  /*
The instance group manager this instance config is part of.


- - -
*/
  public InstanceGroupManager?: string;

  /*
The minimal action to perform on the instance during an update.
Default is `NONE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  public MinimalAction?: string;

  /*
The most disruptive action to perform on the instance during an update.
Default is `REPLACE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  public MostDisruptiveAllowedAction?: string;

  // The name for this per-instance config and its corresponding instance.
  public Name?: string;

  // Zone where the containing instance group manager is located
  public Zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name for this per-instance config and its corresponding instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "RemoveInstanceOnDestroy",
        "When true, deleting this config will immediately remove the underlying instance.\nWhen false, deleting this config will use the behavior as determined by remove_instance_on_destroy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceGroupManager",
        "The instance group manager this instance config is part of.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PreservedState",
        "The preserved state for this instance.\nStructure is documented below.",
        Compute_PerInstanceConfigPreservedState_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "RemoveInstanceStateOnDestroy",
        "When true, deleting this config will immediately remove any specified state from the underlying instance.\nWhen false, deleting this config will *not* immediately remove any state from the underlying instance.\nState will be removed on the next instance recreation or update.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "Zone where the containing instance group manager is located",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "MinimalAction",
        "The minimal action to perform on the instance during an update.\nDefault is `NONE`. Possible values are:\n* REPLACE\n* RESTART\n* REFRESH\n* NONE",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MostDisruptiveAllowedAction",
        "The most disruptive action to perform on the instance during an update.\nDefault is `REPLACE`. Possible values are:\n* REPLACE\n* RESTART\n* REFRESH\n* NONE",
        [],
        false,
        false,
      ),
    ];
  }
}
