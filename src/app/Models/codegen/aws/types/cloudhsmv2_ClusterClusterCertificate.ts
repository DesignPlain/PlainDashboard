import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudhsmv2_ClusterClusterCertificate {
  // The HSM hardware certificate issued (signed) by AWS CloudHSM.
  awsHardwareCertificate?: string;

  // The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
  clusterCertificate?: string;

  // The certificate signing request (CSR). Available only in `UNINITIALIZED` state after an HSM instance is added to the cluster.
  clusterCsr?: string;

  // The HSM certificate issued (signed) by the HSM hardware.
  hsmCertificate?: string;

  // The HSM hardware certificate issued (signed) by the hardware manufacturer.
  manufacturerHardwareCertificate?: string;
}

export function cloudhsmv2_ClusterClusterCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "manufacturerHardwareCertificate",
      "The HSM hardware certificate issued (signed) by the hardware manufacturer.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "awsHardwareCertificate",
      "The HSM hardware certificate issued (signed) by AWS CloudHSM.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterCertificate",
      "The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterCsr",
      "The certificate signing request (CSR). Available only in `UNINITIALIZED` state after an HSM instance is added to the cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hsmCertificate",
      "The HSM certificate issued (signed) by the HSM hardware.",
      () => [],
      false,
      false,
    ),
  ];
}
