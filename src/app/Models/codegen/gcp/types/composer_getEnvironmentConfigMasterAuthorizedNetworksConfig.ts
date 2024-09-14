import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  composer_getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock,
  composer_getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock_GetTypes,
} from "./composer_getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock";

export interface composer_getEnvironmentConfigMasterAuthorizedNetworksConfig {
  // cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS.
  cidrBlocks?: Array<composer_getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock>;

  // Whether or not master authorized networks is enabled.
  enabled?: boolean;
}

export function composer_getEnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "cidrBlocks",
      "cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS.",
      () =>
        composer_getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not master authorized networks is enabled.",
      () => [],
      true,
      false,
    ),
  ];
}
