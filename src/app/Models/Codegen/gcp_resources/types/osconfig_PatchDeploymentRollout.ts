import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_PatchDeploymentRolloutDisruptionBudget,
  osconfig_PatchDeploymentRolloutDisruptionBudget_GetTypes,
} from "./osconfig_PatchDeploymentRolloutDisruptionBudget";

export interface osconfig_PatchDeploymentRollout {
  /*
Mode of the patch rollout.
Possible values are: `ZONE_BY_ZONE`, `CONCURRENT_ZONES`.
*/
  mode?: string;

  /*
The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up.
During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps.
A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget.
For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone.
For example, if the disruption budget has a fixed value of 10, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops.
Structure is documented below.
*/
  disruptionBudget?: osconfig_PatchDeploymentRolloutDisruptionBudget;
}

export function osconfig_PatchDeploymentRollout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Mode of the patch rollout.\nPossible values are: `ZONE_BY_ZONE`, `CONCURRENT_ZONES`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "disruptionBudget",
      "The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up.\nDuring patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps.\nA VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget.\nFor zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone.\nFor example, if the disruption budget has a fixed value of 10, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops.\nStructure is documented below.",
      osconfig_PatchDeploymentRolloutDisruptionBudget_GetTypes(),
      true,
      true,
    ),
  ];
}
