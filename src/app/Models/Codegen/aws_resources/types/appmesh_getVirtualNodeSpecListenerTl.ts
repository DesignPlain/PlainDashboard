import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecListenerTlCertificate,
  appmesh_getVirtualNodeSpecListenerTlCertificate_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlCertificate";
import {
  appmesh_getVirtualNodeSpecListenerTlValidation,
  appmesh_getVirtualNodeSpecListenerTlValidation_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlValidation";

export interface appmesh_getVirtualNodeSpecListenerTl {
  //
  certificates?: Array<appmesh_getVirtualNodeSpecListenerTlCertificate>;

  //
  mode?: string;

  //
  validations?: Array<appmesh_getVirtualNodeSpecListenerTlValidation>;
}

export function appmesh_getVirtualNodeSpecListenerTl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificates",
      "",
      appmesh_getVirtualNodeSpecListenerTlCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "mode", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "validations",
      "",
      appmesh_getVirtualNodeSpecListenerTlValidation_GetTypes(),
      true,
      false,
    ),
  ];
}
