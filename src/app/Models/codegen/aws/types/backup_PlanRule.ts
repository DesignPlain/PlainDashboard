import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  backup_PlanRuleLifecycle,
  backup_PlanRuleLifecycle_GetTypes,
} from "./backup_PlanRuleLifecycle";
import {
  backup_PlanRuleCopyAction,
  backup_PlanRuleCopyAction_GetTypes,
} from "./backup_PlanRuleCopyAction";

export interface backup_PlanRule {
  // Enable continuous backups for supported resources.
  enableContinuousBackup?: boolean;

  // The lifecycle defines when a protected resource is transitioned to cold storage and when it expires.  Fields documented below.
  lifecycle?: backup_PlanRuleLifecycle;

  // An display name for a backup rule.
  ruleName?: string;

  // A CRON expression specifying when AWS Backup initiates a backup job.
  schedule?: string;

  // Configuration block(s) with copy operation settings. Detailed below.
  copyActions?: Array<backup_PlanRuleCopyAction>;

  // Metadata that you can assign to help organize the resources that you create.
  recoveryPointTags?: Map<string, string>;

  // The amount of time in minutes before beginning a backup.
  startWindow?: number;

  // The name of a logical container where backups are stored.
  targetVaultName?: string;

  // The amount of time in minutes AWS Backup attempts a backup before canceling the job and returning an error.
  completionWindow?: number;
}

export function backup_PlanRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "schedule",
      "A CRON expression specifying when AWS Backup initiates a backup job.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "recoveryPointTags",
      "Metadata that you can assign to help organize the resources that you create.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetVaultName",
      "The name of a logical container where backups are stored.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableContinuousBackup",
      "Enable continuous backups for supported resources.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lifecycle",
      "The lifecycle defines when a protected resource is transitioned to cold storage and when it expires.  Fields documented below.",
      () => backup_PlanRuleLifecycle_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleName",
      "An display name for a backup rule.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "copyActions",
      "Configuration block(s) with copy operation settings. Detailed below.",
      () => backup_PlanRuleCopyAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "startWindow",
      "The amount of time in minutes before beginning a backup.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "completionWindow",
      "The amount of time in minutes AWS Backup attempts a backup before canceling the job and returning an error.",
      () => [],
      false,
      false,
    ),
  ];
}
