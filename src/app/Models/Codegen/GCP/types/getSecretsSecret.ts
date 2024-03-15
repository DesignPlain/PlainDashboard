import { getSecretsSecretTopic } from "./getSecretsSecretTopic";
import { getSecretsSecretReplication } from "./getSecretsSecretReplication";
import { getSecretsSecretRotation } from "./getSecretsSecretRotation";

export interface getSecretsSecret {
  /*
The TTL for the Secret.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
Only one of 'ttl' or 'expire_time' can be provided.
*/
  Ttl?: string;

  //
  EffectiveLabels?: Map<string, string>;

  // The resource name of the Pub/Sub topic that will be published to.
  Name?: string;

  // The ID of the project.
  Project?: string;

  // This must be unique within the project.
  SecretId?: string;

  /*
A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
Structure is documented below.
*/
  Topics?: Array<getSecretsSecretTopic>;

  // Custom metadata about the secret.
  Annotations?: Map<string, string>;

  // Timestamp in UTC when the Secret is scheduled to expire.
  ExpireTime?: string;

  /*
The replication policy of the secret data attached to the Secret.
Structure is documented below.
*/
  Replications?: Array<getSecretsSecretReplication>;

  /*
The rotation time and period for a Secret.
Structure is documented below.
*/
  Rotations?: Array<getSecretsSecretRotation>;

  // Mapping from version alias to version name.
  VersionAliases?: Map<string, string>;

  // The time at which the Secret was created.
  CreateTime?: string;

  //
  EffectiveAnnotations?: Map<string, string>;

  // The labels assigned to this Secret.
  Labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
 and default labels configured on the provider.
*/
  PulumiLabels?: Map<string, string>;
}
