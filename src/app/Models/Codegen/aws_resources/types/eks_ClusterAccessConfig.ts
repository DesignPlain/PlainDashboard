import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eks_ClusterAccessConfig {
  // The authentication mode for the cluster. Valid values are `CONFIG_MAP`, `API` or `API_AND_CONFIG_MAP`
  authenticationMode?: string;

  // Whether or not to bootstrap the access config values to the cluster. Default is `true`.
  bootstrapClusterCreatorAdminPermissions?: boolean;
}

export function eks_ClusterAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authenticationMode",
      "The authentication mode for the cluster. Valid values are `CONFIG_MAP`, `API` or `API_AND_CONFIG_MAP`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "bootstrapClusterCreatorAdminPermissions",
      "Whether or not to bootstrap the access config values to the cluster. Default is `true`.",
      [],
      false,
      true,
    ),
  ];
}
