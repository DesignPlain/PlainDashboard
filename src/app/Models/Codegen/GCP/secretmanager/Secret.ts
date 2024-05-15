import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_SecretRotation,
  Secretmanager_SecretRotation_GetTypes,
} from "../types/Secretmanager_SecretRotation";
import {
  Secretmanager_SecretReplication,
  Secretmanager_SecretReplication_GetTypes,
} from "../types/Secretmanager_SecretReplication";
import {
  Secretmanager_SecretTopic,
  Secretmanager_SecretTopic_GetTypes,
} from "../types/Secretmanager_SecretTopic";

export interface SecretArgs {
  /*
Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
Only one of `expire_time` or `ttl` can be provided.
*/
  ExpireTime?: string;

  /*
The labels assigned to this Secret.
Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
No more than 64 labels can be assigned to a given resource.
An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The rotation time and period for a Secret. At `next_rotation_time`, Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. `topics` must be set to configure rotation.
Structure is documented below.
*/
  Rotation?: Secretmanager_SecretRotation;

  /*
Mapping from version alias to version name.
A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.
An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  VersionAliases?: Map<string, string>;

  /*
Custom metadata about the secret.
Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.
Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.
The total size of annotation keys and values must be less than 16KiB.
An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
The replication policy of the secret data attached to the Secret. It cannot be changed
after the Secret has been created.
Structure is documented below.
*/
  Replication?: Secretmanager_SecretReplication;

  // This must be unique within the project.
  SecretId?: string;

  /*
A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
Structure is documented below.
*/
  Topics?: Array<Secretmanager_SecretTopic>;

  /*
The TTL for the Secret.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
Only one of `ttl` or `expire_time` can be provided.
*/
  Ttl?: string;
}
export class Secret extends Resource {
  /*
The rotation time and period for a Secret. At `next_rotation_time`, Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. `topics` must be set to configure rotation.
Structure is documented below.
*/
  public Rotation?: Secretmanager_SecretRotation;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
Only one of `expire_time` or `ttl` can be provided.
*/
  public ExpireTime?: string;

  /*
The replication policy of the secret data attached to the Secret. It cannot be changed
after the Secret has been created.
Structure is documented below.
*/
  public Replication?: Secretmanager_SecretReplication;

  /*
A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
Structure is documented below.
*/
  public Topics?: Array<Secretmanager_SecretTopic>;

  /*
Custom metadata about the secret.
Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.
Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.
The total size of annotation keys and values must be less than 16KiB.
An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Mapping from version alias to version name.
A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.
An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  public VersionAliases?: Map<string, string>;

  // The time at which the Secret was created.
  public CreateTime?: string;

  /*
The resource name of the Pub/Sub topic that will be published to, in the following format: projects/-/topics/-.
For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.
*/
  public Name?: string;

  // This must be unique within the project.
  public SecretId?: string;

  /*
The TTL for the Secret.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
Only one of `ttl` or `expire_time` can be provided.
*/
  public Ttl?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
The labels assigned to this Secret.
Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
No more than 64 labels can be assigned to a given resource.
An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ExpireTime",
        'Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".\nOnly one of `expire_time` or `ttl` can be provided.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "VersionAliases",
        'Mapping from version alias to version name.\nA version alias is a string with a maximum length of 63 characters and can contain\nuppercase and lowercase letters, numerals, and the hyphen (-) and underscore (\'_\')\ncharacters. An alias string must start with a letter and cannot be the string\n\'latest\' or \'NEW\'. No more than 50 aliases can be assigned to a given secret.\nAn object containing a list of "key": value pairs. Example:\n{ "name": "wrench", "mass": "1.3kg", "count": "3" }.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        'Custom metadata about the secret.\nAnnotations are distinct from various forms of labels. Annotations exist to allow\nclient tools to store their own state information without requiring a database.\nAnnotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of\nmaximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and\nmay have dashes (-), underscores (_), dots (.), and alphanumerics in between these\nsymbols.\nThe total size of annotation keys and values must be less than 16KiB.\nAn object containing a list of "key": value pairs. Example:\n{ "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Replication",
        "The replication policy of the secret data attached to the Secret. It cannot be changed\nafter the Secret has been created.\nStructure is documented below.",
        Secretmanager_SecretReplication_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Topics",
        "A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.\nStructure is documented below.",
        Secretmanager_SecretTopic_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'The labels assigned to this Secret.\nLabel keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,\nand must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}_-]{0,62}\nLabel values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,\nand must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}\nNo more than 64 labels can be assigned to a given resource.\nAn object containing a list of "key": value pairs. Example:\n{ "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Rotation",
        "The rotation time and period for a Secret. At `next_rotation_time`, Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. `topics` must be set to configure rotation.\nStructure is documented below.",
        Secretmanager_SecretRotation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SecretId",
        "This must be unique within the project.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Ttl",
        "The TTL for the Secret.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".\nOnly one of `ttl` or `expire_time` can be provided.",
        [],
        false,
        false,
      ),
    ];
  }
}
