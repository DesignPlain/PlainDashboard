import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface backup_getPlanRuleLifecycle {
  //
  coldStorageAfter?: number;

  //
  deleteAfter?: number;

  //
  optInToArchiveForSupportedResources?: boolean;
}

export function backup_getPlanRuleLifecycle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "deleteAfter",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "optInToArchiveForSupportedResources",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "coldStorageAfter",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
