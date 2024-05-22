import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  backup_PlanRuleCopyActionLifecycle,
  backup_PlanRuleCopyActionLifecycle_GetTypes,
} from "./backup_PlanRuleCopyActionLifecycle";

export interface backup_PlanRuleCopyAction {
  // An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup.
  destinationVaultArn?: string;

  // The lifecycle defines when a protected resource is copied over to a backup vault and when it expires.  Fields documented above.
  lifecycle?: backup_PlanRuleCopyActionLifecycle;
}

export function backup_PlanRuleCopyAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationVaultArn",
      "An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lifecycle",
      "The lifecycle defines when a protected resource is copied over to a backup vault and when it expires.  Fields documented above.",
      backup_PlanRuleCopyActionLifecycle_GetTypes(),
      false,
      false,
    ),
  ];
}
