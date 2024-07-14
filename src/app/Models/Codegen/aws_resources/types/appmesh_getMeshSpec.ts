import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getMeshSpecEgressFilter,
  appmesh_getMeshSpecEgressFilter_GetTypes,
} from "./appmesh_getMeshSpecEgressFilter";

export interface appmesh_getMeshSpec {
  //
  egressFilters?: Array<appmesh_getMeshSpecEgressFilter>;
}

export function appmesh_getMeshSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "egressFilters",
      "",
      appmesh_getMeshSpecEgressFilter_GetTypes(),
      true,
      false,
    ),
  ];
}
