import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AttachedClusterFleet {
  /*
(Output)
The name of the managed Hub Membership resource associated to this
cluster. Membership names are formatted as
projects/<project-number>/locations/global/membership/<cluster-id>.
*/
  membership?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}

export function container_AttachedClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "membership",
      "(Output)\nThe name of the managed Hub Membership resource associated to this\ncluster. Membership names are formatted as\nprojects/<project-number>/locations/global/membership/<cluster-id>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      [],
      true,
      true,
    ),
  ];
}
