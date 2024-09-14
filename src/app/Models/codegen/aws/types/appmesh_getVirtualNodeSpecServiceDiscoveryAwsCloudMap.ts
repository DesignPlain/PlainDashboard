import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap {
  //
  attributes?: Map<string, string>;

  //
  namespaceName?: string;

  //
  serviceName?: string;
}

export function appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "attributes",
      "",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespaceName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
