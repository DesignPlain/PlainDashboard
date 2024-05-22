import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecListenerTlCertificateFile,
  appmesh_getVirtualNodeSpecListenerTlCertificateFile_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlCertificateFile";
import {
  appmesh_getVirtualNodeSpecListenerTlCertificateSd,
  appmesh_getVirtualNodeSpecListenerTlCertificateSd_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlCertificateSd";
import {
  appmesh_getVirtualNodeSpecListenerTlCertificateAcm,
  appmesh_getVirtualNodeSpecListenerTlCertificateAcm_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlCertificateAcm";

export interface appmesh_getVirtualNodeSpecListenerTlCertificate {
  //
  files?: Array<appmesh_getVirtualNodeSpecListenerTlCertificateFile>;

  //
  sds?: Array<appmesh_getVirtualNodeSpecListenerTlCertificateSd>;

  //
  acms?: Array<appmesh_getVirtualNodeSpecListenerTlCertificateAcm>;
}

export function appmesh_getVirtualNodeSpecListenerTlCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "acms",
      "",
      appmesh_getVirtualNodeSpecListenerTlCertificateAcm_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualNodeSpecListenerTlCertificateFile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      appmesh_getVirtualNodeSpecListenerTlCertificateSd_GetTypes(),
      true,
      false,
    ),
  ];
}
