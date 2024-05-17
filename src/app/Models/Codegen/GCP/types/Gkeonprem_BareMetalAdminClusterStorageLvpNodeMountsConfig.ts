import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig {
  // The host machine path.
  Path?: string;

  // The StorageClass name that PVs will be created with.
  StorageClass?: string;
}

export function Gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Path",
      "The host machine path.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StorageClass",
      "The StorageClass name that PVs will be created with.",
      [],
      true,
      false,
    ),
  ];
}
