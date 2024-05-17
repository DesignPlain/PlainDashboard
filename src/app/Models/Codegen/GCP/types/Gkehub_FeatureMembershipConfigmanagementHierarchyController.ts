import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureMembershipConfigmanagementHierarchyController {
  // Whether hierarchical resource quota is enabled in this cluster.
  EnableHierarchicalResourceQuota?: boolean;

  // Whether pod tree labels are enabled in this cluster.
  EnablePodTreeLabels?: boolean;

  // Whether Hierarchy Controller is enabled in this cluster.
  Enabled?: boolean;
}

export function Gkehub_FeatureMembershipConfigmanagementHierarchyController_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableHierarchicalResourceQuota",
      "Whether hierarchical resource quota is enabled in this cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePodTreeLabels",
      "Whether pod tree labels are enabled in this cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether Hierarchy Controller is enabled in this cluster.",
      [],
      false,
      false,
    ),
  ];
}
