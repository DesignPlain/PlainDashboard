import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RegionPerInstanceConfigPreservedState } from "../types/RegionPerInstanceConfigPreservedState";

export interface RegionPerInstanceConfigArgs {
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

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Region where the containing instance group manager is located
  Region?: string;

  /*
The region instance group manager this instance config is part of.


- - -
*/
  RegionInstanceGroupManager?: string;

  // The name for this per-instance config and its corresponding instance.
  Name?: string;

  /*
The preserved state for this instance.
Structure is documented below.
*/
  PreservedState?: RegionPerInstanceConfigPreservedState;

  /*
When true, deleting this config will immediately remove the underlying instance.
When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.
*/
  RemoveInstanceOnDestroy?: boolean;

  /*
When true, deleting this config will immediately remove any specified state from the underlying instance.
When false, deleting this config will -not- immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.
*/
  RemoveInstanceStateOnDestroy?: boolean;
}
export class RegionPerInstanceConfig extends Resource {
  /*
The most disruptive action to perform on the instance during an update.
Default is `REPLACE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  public MostDisruptiveAllowedAction?: string;

  /*
The preserved state for this instance.
Structure is documented below.
*/
  public PreservedState?: RegionPerInstanceConfigPreservedState;

  // Region where the containing instance group manager is located
  public Region?: string;

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
The minimal action to perform on the instance during an update.
Default is `NONE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  public MinimalAction?: string;

  // The name for this per-instance config and its corresponding instance.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The region instance group manager this instance config is part of.


- - -
*/
  public RegionInstanceGroupManager?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "RemoveInstanceOnDestroy",
        "When true, deleting this config will immediately remove the underlying instance.\nWhen false, deleting this config will use the behavior as determined by remove_instance_on_destroy.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PreservedState",
        "The preserved state for this instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "RemoveInstanceStateOnDestroy",
        "When true, deleting this config will immediately remove any specified state from the underlying instance.\nWhen false, deleting this config will *not* immediately remove any state from the underlying instance.\nState will be removed on the next instance recreation or update.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MinimalAction",
        "The minimal action to perform on the instance during an update.\nDefault is `NONE`. Possible values are:\n* REPLACE\n* RESTART\n* REFRESH\n* NONE",
      ),
      new DynamicUIProps(
        InputType.String,
        "MostDisruptiveAllowedAction",
        "The most disruptive action to perform on the instance during an update.\nDefault is `REPLACE`. Possible values are:\n* REPLACE\n* RESTART\n* REFRESH\n* NONE",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the containing instance group manager is located",
      ),
      new DynamicUIProps(
        InputType.String,
        "RegionInstanceGroupManager",
        "The region instance group manager this instance config is part of.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name for this per-instance config and its corresponding instance.",
      ),
    ];
  }
}
