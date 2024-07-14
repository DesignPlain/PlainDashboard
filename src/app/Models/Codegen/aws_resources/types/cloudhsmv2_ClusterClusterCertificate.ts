import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudhsmv2_ClusterClusterCertificate {
  //
  hsmCertificate?: string;

  //
  manufacturerHardwareCertificate?: string;

  //
  awsHardwareCertificate?: string;

  //
  clusterCertificate?: string;

  //
  clusterCsr?: string;
}

export function cloudhsmv2_ClusterClusterCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hsmCertificate",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "manufacturerHardwareCertificate",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "awsHardwareCertificate",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterCertificate",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "clusterCsr", "", [], false, false),
  ];
}
