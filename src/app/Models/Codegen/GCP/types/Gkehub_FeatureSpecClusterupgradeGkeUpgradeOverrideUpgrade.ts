import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade {
  // Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters.
  name?: string;

  // Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters.
  version?: string;
}

export function gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      'Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      'Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters.',
      [],
      true,
      false,
    ),
  ];
}
