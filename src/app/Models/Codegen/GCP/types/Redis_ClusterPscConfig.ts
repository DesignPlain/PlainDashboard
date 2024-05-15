import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Redis_ClusterPscConfig {
  /*
Required. The consumer network where the network address of
the discovery endpoint will be reserved, in the form of
projects/{network_project_id_or_number}/global/networks/{network_id}.

- - -
*/
  Network?: string;
}

export function Redis_ClusterPscConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Network",
      "Required. The consumer network where the network address of\nthe discovery endpoint will be reserved, in the form of\nprojects/{network_project_id_or_number}/global/networks/{network_id}.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
