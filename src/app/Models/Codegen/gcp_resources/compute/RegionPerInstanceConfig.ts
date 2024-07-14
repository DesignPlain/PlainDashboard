import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RegionPerInstanceConfigPreservedState,
  compute_RegionPerInstanceConfigPreservedState_GetTypes,
} from "../types/compute_RegionPerInstanceConfigPreservedState";

export interface RegionPerInstanceConfigArgs {
  // Region where the containing instance group manager is located
  region?: string;

  /*
The preserved state for this instance.
Structure is documented below.
*/
  preservedState?: compute_RegionPerInstanceConfigPreservedState;

  /*
The most disruptive action to perform on the instance during an update.
Default is `REPLACE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  mostDisruptiveAllowedAction?: string;

  // The name for this per-instance config and its corresponding instance.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The region instance group manager this instance config is part of.


- - -
*/
  regionInstanceGroupManager?: string;

  /*
When true, deleting this config will immediately remove the underlying instance.
When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.
*/
  removeInstanceOnDestroy?: boolean;

  /*
When true, deleting this config will immediately remove any specified state from the underlying instance.
When false, deleting this config will -not- immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.
*/
  removeInstanceStateOnDestroy?: boolean;

  /*
The minimal action to perform on the instance during an update.
Default is `NONE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  minimalAction?: string;
}
export class RegionPerInstanceConfig extends Resource {
  /*
The minimal action to perform on the instance during an update.
Default is `NONE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  public minimalAction?: string;

  /*
The most disruptive action to perform on the instance during an update.
Default is `REPLACE`. Possible values are:
- REPLACE
- RESTART
- REFRESH
- NONE
*/
  public mostDisruptiveAllowedAction?: string;

  // The name for this per-instance config and its corresponding instance.
  public name?: string;

  /*
The preserved state for this instance.
Structure is documented below.
*/
  public preservedState?: compute_RegionPerInstanceConfigPreservedState;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
When true, deleting this config will immediately remove the underlying instance.
When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.
*/
  public removeInstanceOnDestroy?: boolean;

  // Region where the containing instance group manager is located
  public region?: string;

  /*
The region instance group manager this instance config is part of.


- - -
*/
  public regionInstanceGroupManager?: string;

  /*
When true, deleting this config will immediately remove any specified state from the underlying instance.
When false, deleting this config will -not- immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.
*/
  public removeInstanceStateOnDestroy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "preservedState",
        "The preserved state for this instance.\nStructure is documented below.",
        compute_RegionPerInstanceConfigPreservedState_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "mostDisruptiveAllowedAction",
        "The most disruptive action to perform on the instance during an update.\nDefault is `REPLACE`. Possible values are:\n* REPLACE\n* RESTART\n* REFRESH\n* NONE",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for this per-instance config and its corresponding instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "regionInstanceGroupManager",
        "The region instance group manager this instance config is part of.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "removeInstanceStateOnDestroy",
        "When true, deleting this config will immediately remove any specified state from the underlying instance.\nWhen false, deleting this config will *not* immediately remove any state from the underlying instance.\nState will be removed on the next instance recreation or update.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "minimalAction",
        "The minimal action to perform on the instance during an update.\nDefault is `NONE`. Possible values are:\n* REPLACE\n* RESTART\n* REFRESH\n* NONE",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "Region where the containing instance group manager is located",
        [],
        false,
        true,
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
        InputType.Bool,
        "removeInstanceOnDestroy",
        "When true, deleting this config will immediately remove the underlying instance.\nWhen false, deleting this config will use the behavior as determined by remove_instance_on_destroy.",
        [],
        false,
        false,
      ),
    ];
  }
}
