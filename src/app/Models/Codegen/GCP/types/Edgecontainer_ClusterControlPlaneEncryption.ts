import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_ClusterControlPlaneEncryptionKmsStatus,
  Edgecontainer_ClusterControlPlaneEncryptionKmsStatus_GetTypes,
} from "./Edgecontainer_ClusterControlPlaneEncryptionKmsStatus";

export interface Edgecontainer_ClusterControlPlaneEncryption {
  /*
The Cloud KMS CryptoKey e.g.
projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}
to use for protecting control plane disks. If not specified, a
Google-managed key will be used instead.
*/
  KmsKey?: string;

  /*
(Output)
The Cloud KMS CryptoKeyVersion currently in use for protecting control
plane disks. Only applicable if kms_key is set.
*/
  KmsKeyActiveVersion?: string;

  /*
(Output)
Availability of the Cloud KMS CryptoKey. If not `KEY_AVAILABLE`, then
nodes may go offline as they cannot access their local data. This can be
caused by a lack of permissions to use the key, or if the key is disabled
or deleted.
*/
  KmsKeyState?: string;

  /*
(Output)
Error status returned by Cloud KMS when using this key. This field may be
populated only if `kms_key_state` is not `KMS_KEY_STATE_KEY_AVAILABLE`.
If populated, this field contains the error status reported by Cloud KMS.
Structure is documented below.


<a name="nested_kms_status"></a>The `kms_status` block contains:
*/
  KmsStatuses?: Array<Edgecontainer_ClusterControlPlaneEncryptionKmsStatus>;
}

export function Edgecontainer_ClusterControlPlaneEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKey",
      "The Cloud KMS CryptoKey e.g.\nprojects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}\nto use for protecting control plane disks. If not specified, a\nGoogle-managed key will be used instead.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyActiveVersion",
      "(Output)\nThe Cloud KMS CryptoKeyVersion currently in use for protecting control\nplane disks. Only applicable if kms_key is set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyState",
      "(Output)\nAvailability of the Cloud KMS CryptoKey. If not `KEY_AVAILABLE`, then\nnodes may go offline as they cannot access their local data. This can be\ncaused by a lack of permissions to use the key, or if the key is disabled\nor deleted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "KmsStatuses",
      '(Output)\nError status returned by Cloud KMS when using this key. This field may be\npopulated only if `kms_key_state` is not `KMS_KEY_STATE_KEY_AVAILABLE`.\nIf populated, this field contains the error status reported by Cloud KMS.\nStructure is documented below.\n\n\n<a name="nested_kms_status"></a>The `kms_status` block contains:',
      Edgecontainer_ClusterControlPlaneEncryptionKmsStatus_GetTypes(),
      false,
      false,
    ),
  ];
}
