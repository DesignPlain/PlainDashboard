import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterFleet {
  /*
(Output)
The name of the managed Hub Membership resource associated to this cluster.
Membership names are formatted as
`projects/<project-number>/locations/<location>/memberships/<cluster-id>`.
*/
  Membership?: string;
}

export function Gkeonprem_BareMetalClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Membership",
      "(Output)\nThe name of the managed Hub Membership resource associated to this cluster.\nMembership names are formatted as\n`projects/<project-number>/locations/<location>/memberships/<cluster-id>`.",
      [],
      false,
      false,
    ),
  ];
}
