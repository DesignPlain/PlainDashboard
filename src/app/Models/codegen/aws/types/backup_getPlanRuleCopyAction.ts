import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  backup_getPlanRuleCopyActionLifecycle,
  backup_getPlanRuleCopyActionLifecycle_GetTypes,
} from "./backup_getPlanRuleCopyActionLifecycle";

export interface backup_getPlanRuleCopyAction {
  //
  destinationVaultArn?: string;

  //
  lifecycles?: Array<backup_getPlanRuleCopyActionLifecycle>;
}

export function backup_getPlanRuleCopyAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationVaultArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "lifecycles",
      "",
      () => backup_getPlanRuleCopyActionLifecycle_GetTypes(),
      true,
      false,
    ),
  ];
}
