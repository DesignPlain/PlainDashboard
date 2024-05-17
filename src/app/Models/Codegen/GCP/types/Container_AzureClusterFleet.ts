import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AzureClusterFleet {
  // The name of the managed Hub Membership resource associated to this cluster. Membership names are formatted as projects/<project-number>/locations/global/membership/<cluster-id>.
  Membership?: string;

  // The number of the Fleet host project where this cluster will be registered.
  Project?: string;
}

export function Container_AzureClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Membership",
      "The name of the managed Hub Membership resource associated to this cluster. Membership names are formatted as projects/<project-number>/locations/global/membership/<cluster-id>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The number of the Fleet host project where this cluster will be registered.",
      [],
      false,
      true,
    ),
  ];
}
