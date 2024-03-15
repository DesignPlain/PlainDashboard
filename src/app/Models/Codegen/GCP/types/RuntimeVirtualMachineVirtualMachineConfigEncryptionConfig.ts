export interface RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig {
  /*
The Cloud KMS resource identifier of the customer-managed
encryption key used to protect a resource, such as a disks.
It has the following format:
`projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}`
*/
  KmsKey?: string;
}
