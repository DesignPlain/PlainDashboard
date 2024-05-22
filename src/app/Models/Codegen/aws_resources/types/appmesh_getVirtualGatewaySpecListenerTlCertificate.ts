import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualGatewaySpecListenerTlCertificateFile,
  appmesh_getVirtualGatewaySpecListenerTlCertificateFile_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlCertificateFile";
import {
  appmesh_getVirtualGatewaySpecListenerTlCertificateSd,
  appmesh_getVirtualGatewaySpecListenerTlCertificateSd_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlCertificateSd";
import {
  appmesh_getVirtualGatewaySpecListenerTlCertificateAcm,
  appmesh_getVirtualGatewaySpecListenerTlCertificateAcm_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlCertificateAcm";

export interface appmesh_getVirtualGatewaySpecListenerTlCertificate {
  //
  files?: Array<appmesh_getVirtualGatewaySpecListenerTlCertificateFile>;

  //
  sds?: Array<appmesh_getVirtualGatewaySpecListenerTlCertificateSd>;

  //
  acms?: Array<appmesh_getVirtualGatewaySpecListenerTlCertificateAcm>;
}

export function appmesh_getVirtualGatewaySpecListenerTlCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualGatewaySpecListenerTlCertificateFile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      appmesh_getVirtualGatewaySpecListenerTlCertificateSd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acms",
      "",
      appmesh_getVirtualGatewaySpecListenerTlCertificateAcm_GetTypes(),
      true,
      false,
    ),
  ];
}
