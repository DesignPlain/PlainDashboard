import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretsSecretReplication,
  Secretmanager_getSecretsSecretReplication_GetTypes,
} from "./Secretmanager_getSecretsSecretReplication";
import {
  Secretmanager_getSecretsSecretTopic,
  Secretmanager_getSecretsSecretTopic_GetTypes,
} from "./Secretmanager_getSecretsSecretTopic";
import {
  Secretmanager_getSecretsSecretRotation,
  Secretmanager_getSecretsSecretRotation_GetTypes,
} from "./Secretmanager_getSecretsSecretRotation";

export interface Secretmanager_getSecretsSecret {
  // The labels assigned to this Secret.
  Labels?: Map<string, string>;

  /*
The replication policy of the secret data attached to the Secret.
Structure is documented below.
*/
  Replications?: Array<Secretmanager_getSecretsSecretReplication>;

  // The time at which the Secret was created.
  CreateTime?: string;

  //
  EffectiveAnnotations?: Map<string, string>;

  // The ID of the project.
  Project?: string;

  /*
A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
Structure is documented below.
*/
  Topics?: Array<Secretmanager_getSecretsSecretTopic>;

  // Mapping from version alias to version name.
  VersionAliases?: Map<string, string>;

  // Custom metadata about the secret.
  Annotations?: Map<string, string>;

  //
  EffectiveLabels?: Map<string, string>;

  // This must be unique within the project.
  SecretId?: string;

  /*
The TTL for the Secret.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
Only one of 'ttl' or 'expire_time' can be provided.
*/
  Ttl?: string;

  /*
The combination of labels configured directly on the resource
 and default labels configured on the provider.
*/
  PulumiLabels?: Map<string, string>;

  /*
The rotation time and period for a Secret.
Structure is documented below.
*/
  Rotations?: Array<Secretmanager_getSecretsSecretRotation>;

  // Timestamp in UTC when the Secret is scheduled to expire.
  ExpireTime?: string;

  // The resource name of the Pub/Sub topic that will be published to.
  Name?: string;
}

export function Secretmanager_getSecretsSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The resource name of the Pub/Sub topic that will be published to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "The time at which the Secret was created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The ID of the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "EffectiveLabels",
      "",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ttl",
      "The TTL for the Secret.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".\nOnly one of 'ttl' or 'expire_time' can be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "EffectiveAnnotations",
      "",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecretId",
      "This must be unique within the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "PulumiLabels",
      "The combination of labels configured directly on the resource\n and default labels configured on the provider.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Rotations",
      "The rotation time and period for a Secret.\nStructure is documented below.",
      Secretmanager_getSecretsSecretRotation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The labels assigned to this Secret.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Replications",
      "The replication policy of the secret data attached to the Secret.\nStructure is documented below.",
      Secretmanager_getSecretsSecretReplication_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Topics",
      "A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.\nStructure is documented below.",
      Secretmanager_getSecretsSecretTopic_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "VersionAliases",
      "Mapping from version alias to version name.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Annotations",
      "Custom metadata about the secret.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExpireTime",
      "Timestamp in UTC when the Secret is scheduled to expire.",
      [],
      true,
      false,
    ),
  ];
}
