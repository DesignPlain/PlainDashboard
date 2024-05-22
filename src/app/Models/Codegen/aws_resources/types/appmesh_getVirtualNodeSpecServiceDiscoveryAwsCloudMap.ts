import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "namespaceName", "", [], true, false),
    new DynamicUIProps(InputType.String, "serviceName", "", [], true, false),
  ];
}
