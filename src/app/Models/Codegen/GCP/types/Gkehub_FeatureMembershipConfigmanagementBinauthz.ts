import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureMembershipConfigmanagementBinauthz {
  // Whether binauthz is enabled in this cluster.
  Enabled?: boolean;
}

export function Gkehub_FeatureMembershipConfigmanagementBinauthz_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether binauthz is enabled in this cluster.",
      [],
      false,
      false,
    ),
  ];
}
