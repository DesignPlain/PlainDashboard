import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_LakeAssetStatus {
  // Number of active assets.
  ActiveAssets?: number;

  // Number of assets that are in process of updating the security policy on attached resources.
  SecurityPolicyApplyingAssets?: number;

  // Output only. The time when the lake was last updated.
  UpdateTime?: string;
}

export function Dataplex_LakeAssetStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "SecurityPolicyApplyingAssets",
      "Number of assets that are in process of updating the security policy on attached resources.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "Output only. The time when the lake was last updated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ActiveAssets",
      "Number of active assets.",
      [],
      false,
      false,
    ),
  ];
}
