import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterSecurityConfigAuthorization,
  Gkeonprem_BareMetalClusterSecurityConfigAuthorization_GetTypes,
} from "./Gkeonprem_BareMetalClusterSecurityConfigAuthorization";

export interface Gkeonprem_BareMetalClusterSecurityConfig {
  /*
Configures user access to the Bare Metal User cluster.
Structure is documented below.
*/
  Authorization?: Gkeonprem_BareMetalClusterSecurityConfigAuthorization;
}

export function Gkeonprem_BareMetalClusterSecurityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Authorization",
      "Configures user access to the Bare Metal User cluster.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterSecurityConfigAuthorization_GetTypes(),
      false,
      false,
    ),
  ];
}
