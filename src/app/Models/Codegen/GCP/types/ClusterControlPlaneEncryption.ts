import { ClusterControlPlaneEncryptionKmsStatus } from "./ClusterControlPlaneEncryptionKmsStatus";

export interface ClusterControlPlaneEncryption {
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
  KmsStatuses?: Array<ClusterControlPlaneEncryptionKmsStatus>;
}
