import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_ClusterFleet {
  /*
(Output)
The name of the managed Hub Membership resource associated to this cluster.
Membership names are formatted as
`projects/<project-number>/locations/global/membership/<cluster-id>`.
*/
  Membership?: string;

  /*
The name of the Fleet host project where this cluster will be registered.
Project names are formatted as
`projects/<project-number>`.
*/
  Project?: string;
}

export function Edgecontainer_ClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Membership",
      "(Output)\nThe name of the managed Hub Membership resource associated to this cluster.\nMembership names are formatted as\n`projects/<project-number>/locations/global/membership/<cluster-id>`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The name of the Fleet host project where this cluster will be registered.\nProject names are formatted as\n`projects/<project-number>`.",
      [],
      true,
      true,
    ),
  ];
}
