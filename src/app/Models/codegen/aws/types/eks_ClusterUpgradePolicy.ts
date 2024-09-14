import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface eks_ClusterUpgradePolicy {
  // Support type to use for the cluster. If the cluster is set to `EXTENDED`, it will enter extended support at the end of standard support. If the cluster is set to `STANDARD`, it will be automatically upgraded at the end of standard support. Valid values are `EXTENDED`, `STANDARD`
  supportType?: string;
}

export function eks_ClusterUpgradePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "supportType",
      "Support type to use for the cluster. If the cluster is set to `EXTENDED`, it will enter extended support at the end of standard support. If the cluster is set to `STANDARD`, it will be automatically upgraded at the end of standard support. Valid values are `EXTENDED`, `STANDARD`",
      () => [],
      false,
      false,
    ),
  ];
}
