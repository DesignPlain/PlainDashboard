import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile";

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate {
  //
  files?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile>;

  //
  sds?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      () =>
        appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateFile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      () =>
        appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificateSd_GetTypes(),
      true,
      false,
    ),
  ];
}
