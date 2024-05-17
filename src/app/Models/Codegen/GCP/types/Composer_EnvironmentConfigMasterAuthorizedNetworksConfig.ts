import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock,
  Composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock_GetTypes,
} from "./Composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock";

export interface Composer_EnvironmentConfigMasterAuthorizedNetworksConfig {
  // cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS.
  CidrBlocks?: Array<Composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock>;

  // Whether or not master authorized networks is enabled.
  Enabled?: boolean;
}

export function Composer_EnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CidrBlocks",
      "cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS.",
      Composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether or not master authorized networks is enabled.",
      [],
      true,
      false,
    ),
  ];
}
