import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization,
  Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization";

export interface Gkeonprem_BareMetalAdminClusterSecurityConfig {
  /*
Configures user access to the Bare Metal User cluster.
Structure is documented below.
*/
  Authorization?: Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization;
}

export function Gkeonprem_BareMetalAdminClusterSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Authorization",
      "Configures user access to the Bare Metal User cluster.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterSecurityConfigAuthorization_GetTypes(),
      false,
      false,
    ),
  ];
}
