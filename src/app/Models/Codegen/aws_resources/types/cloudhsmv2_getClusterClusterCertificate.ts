import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudhsmv2_getClusterClusterCertificate {
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

export function cloudhsmv2_getClusterClusterCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "hsmCertificate", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "manufacturerHardwareCertificate",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "awsHardwareCertificate",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterCertificate",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "clusterCsr", "", [], true, false),
  ];
}
