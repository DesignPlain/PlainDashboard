import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appengine_EngineSplitTrafficSplit,
  appengine_EngineSplitTrafficSplit_GetTypes,
} from "../types/appengine_EngineSplitTrafficSplit";

export interface EngineSplitTrafficArgs {
  /*
Mapping that defines fractional HTTP traffic diversion to different versions within the service.
Structure is documented below.
*/
  split?: appengine_EngineSplitTrafficSplit;

  // If set to true traffic will be migrated to this version.
  migrateTraffic?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The name of the service these settings apply to.
  service?: string;
}
export class EngineSplitTraffic extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The name of the service these settings apply to.
  public service?: string;

  /*
Mapping that defines fractional HTTP traffic diversion to different versions within the service.
Structure is documented below.
*/
  public split?: appengine_EngineSplitTrafficSplit;

  // If set to true traffic will be migrated to this version.
  public migrateTraffic?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "split",
        "Mapping that defines fractional HTTP traffic diversion to different versions within the service.\nStructure is documented below.",
        () => appengine_EngineSplitTrafficSplit_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "migrateTraffic",
        "If set to true traffic will be migrated to this version.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "The name of the service these settings apply to.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
