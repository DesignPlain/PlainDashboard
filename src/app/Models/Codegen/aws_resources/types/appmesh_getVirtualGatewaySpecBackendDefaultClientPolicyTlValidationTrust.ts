import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd";

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust {
  //
  acms?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm>;

  //
  files?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile>;

  //
  sds?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "acms",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustFile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustSd_GetTypes(),
      true,
      false,
    ),
  ];
}
