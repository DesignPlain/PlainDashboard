import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudhsmv2_getClusterClusterCertificate {
  /*
The HSM hardware certificate issued (signed) by the hardware manufacturer.
The number of available cluster certificates may vary depending on state of the cluster.
*/
  manufacturerHardwareCertificate?: string;

  // The HSM hardware certificate issued (signed) by AWS CloudHSM.
  awsHardwareCertificate?: string;

  // The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
  clusterCertificate?: string;

  // The certificate signing request (CSR). Available only in UNINITIALIZED state.
  clusterCsr?: string;

  // The HSM certificate issued (signed) by the HSM hardware.
  hsmCertificate?: string;
}

export function cloudhsmv2_getClusterClusterCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'hsmCertificate',
      'The HSM certificate issued (signed) by the HSM hardware.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'manufacturerHardwareCertificate',
      'The HSM hardware certificate issued (signed) by the hardware manufacturer.\nThe number of available cluster certificates may vary depending on state of the cluster.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'awsHardwareCertificate',
      'The HSM hardware certificate issued (signed) by AWS CloudHSM.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterCertificate',
      "The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterCsr',
      'The certificate signing request (CSR). Available only in UNINITIALIZED state.',
      () => [],
      true,
      false,
    ),
  ];
}
