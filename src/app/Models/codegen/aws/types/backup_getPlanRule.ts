import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  backup_getPlanRuleCopyAction,
  backup_getPlanRuleCopyAction_GetTypes,
} from "./backup_getPlanRuleCopyAction";
import {
  backup_getPlanRuleLifecycle,
  backup_getPlanRuleLifecycle_GetTypes,
} from "./backup_getPlanRuleLifecycle";

export interface backup_getPlanRule {
  //
  completionWindow?: number;

  //
  copyActions?: Array<backup_getPlanRuleCopyAction>;

  //
  enableContinuousBackup?: boolean;

  //
  recoveryPointTags?: Map<string, string>;

  //
  ruleName?: string;

  //
  schedule?: string;

  //
  startWindow?: number;

  //
  lifecycles?: Array<backup_getPlanRuleLifecycle>;

  //
  targetVaultName?: string;
}

export function backup_getPlanRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "completionWindow",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "ruleName", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "startWindow",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "lifecycles",
      "",
      () => backup_getPlanRuleLifecycle_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetVaultName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "copyActions",
      "",
      () => backup_getPlanRuleCopyAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableContinuousBackup",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "recoveryPointTags",
      "",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "schedule", "", () => [], true, false),
  ];
}
