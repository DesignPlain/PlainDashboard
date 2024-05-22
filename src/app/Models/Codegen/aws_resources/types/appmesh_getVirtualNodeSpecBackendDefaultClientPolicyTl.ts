import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation";
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate";

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl {
  //
  ports?: Array<number>;

  //
  validations?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation>;

  //
  certificates?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate>;

  //
  enforce?: boolean;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "validations",
      "",
      appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "certificates",
      "",
      appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enforce", "", [], true, false),
  ];
}
