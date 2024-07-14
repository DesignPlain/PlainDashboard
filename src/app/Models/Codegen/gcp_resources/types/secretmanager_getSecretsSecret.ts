import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  secretmanager_getSecretsSecretReplication,
  secretmanager_getSecretsSecretReplication_GetTypes,
} from "./secretmanager_getSecretsSecretReplication";
import {
  secretmanager_getSecretsSecretRotation,
  secretmanager_getSecretsSecretRotation_GetTypes,
} from "./secretmanager_getSecretsSecretRotation";
import {
  secretmanager_getSecretsSecretTopic,
  secretmanager_getSecretsSecretTopic_GetTypes,
} from "./secretmanager_getSecretsSecretTopic";

export interface secretmanager_getSecretsSecret {
  //
  effectiveLabels?: Map<string, string>;

  // The ID of the project.
  project?: string;

  /*
The replication policy of the secret data attached to the Secret.
Structure is documented below.
*/
  replications?: Array<secretmanager_getSecretsSecretReplication>;

  // This must be unique within the project.
  secretId?: string;

  // Mapping from version alias to version name.
  versionAliases?: Map<string, string>;

  // Custom metadata about the secret.
  annotations?: Map<string, string>;

  // The labels assigned to this Secret.
  labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
 and default labels configured on the provider.
*/
  pulumiLabels?: Map<string, string>;

  /*
The TTL for the Secret.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
Only one of 'ttl' or 'expire_time' can be provided.
*/
  ttl?: string;

  //
  effectiveAnnotations?: Map<string, string>;

  // The time at which the Secret was created.
  createTime?: string;

  // Timestamp in UTC when the Secret is scheduled to expire.
  expireTime?: string;

  // The resource name of the Pub/Sub topic that will be published to.
  name?: string;

  /*
The rotation time and period for a Secret.
Structure is documented below.
*/
  rotations?: Array<secretmanager_getSecretsSecretRotation>;

  /*
A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
Structure is documented below.
*/
  topics?: Array<secretmanager_getSecretsSecretTopic>;
}

export function secretmanager_getSecretsSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "pulumiLabels",
      "The combination of labels configured directly on the resource\n and default labels configured on the provider.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rotations",
      "The rotation time and period for a Secret.\nStructure is documented below.",
      secretmanager_getSecretsSecretRotation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The resource name of the Pub/Sub topic that will be published to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "topics",
      "A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.\nStructure is documented below.",
      secretmanager_getSecretsSecretTopic_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The ID of the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretId",
      "This must be unique within the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "The labels assigned to this Secret.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ttl",
      "The TTL for the Secret.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".\nOnly one of 'ttl' or 'expire_time' can be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "effectiveAnnotations",
      "",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expireTime",
      "Timestamp in UTC when the Secret is scheduled to expire.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "effectiveLabels",
      "",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "replications",
      "The replication policy of the secret data attached to the Secret.\nStructure is documented below.",
      secretmanager_getSecretsSecretReplication_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "versionAliases",
      "Mapping from version alias to version name.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "annotations",
      "Custom metadata about the secret.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "The time at which the Secret was created.",
      [],
      true,
      false,
    ),
  ];
}
