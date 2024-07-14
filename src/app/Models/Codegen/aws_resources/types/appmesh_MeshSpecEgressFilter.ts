import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_MeshSpecEgressFilter {
  /*
Egress filter type. By default, the type is `DROP_ALL`.
Valid values are `ALLOW_ALL` and `DROP_ALL`.
*/
  type?: string;
}

export function appmesh_MeshSpecEgressFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Egress filter type. By default, the type is `DROP_ALL`.\nValid values are `ALLOW_ALL` and `DROP_ALL`.",
      [],
      false,
      false,
    ),
  ];
}
