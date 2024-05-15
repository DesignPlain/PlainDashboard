import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workstations_WorkstationConfigPersistentDirectory,
  Workstations_WorkstationConfigPersistentDirectory_GetTypes,
} from "../types/Workstations_WorkstationConfigPersistentDirectory";
import {
  Workstations_WorkstationConfigReadinessCheck,
  Workstations_WorkstationConfigReadinessCheck_GetTypes,
} from "../types/Workstations_WorkstationConfigReadinessCheck";
import {
  Workstations_WorkstationConfigContainer,
  Workstations_WorkstationConfigContainer_GetTypes,
} from "../types/Workstations_WorkstationConfigContainer";
import {
  Workstations_WorkstationConfigEncryptionKey,
  Workstations_WorkstationConfigEncryptionKey_GetTypes,
} from "../types/Workstations_WorkstationConfigEncryptionKey";
import {
  Workstations_WorkstationConfigHost,
  Workstations_WorkstationConfigHost_GetTypes,
} from "../types/Workstations_WorkstationConfigHost";
import {
  Workstations_WorkstationConfigCondition,
  Workstations_WorkstationConfigCondition_GetTypes,
} from "../types/Workstations_WorkstationConfigCondition";

export interface WorkstationConfigArgs {
  // Human-readable name for this resource.
  DisplayName?: string;

  /*
Directories to persist across workstation sessions.
Structure is documented below.
*/
  PersistentDirectories?: Array<Workstations_WorkstationConfigPersistentDirectory>;

  /*
Readiness checks to be performed on a workstation.
Structure is documented below.
*/
  ReadinessChecks?: Array<Workstations_WorkstationConfigReadinessCheck>;

  // The ID to be assigned to the workstation cluster config.
  WorkstationConfigId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
How long to wait before automatically stopping a workstation after it was started. A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if `encryption_key` is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  RunningTimeout?: string;

  // The ID of the parent workstation cluster.
  WorkstationClusterId?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
Container that will be run for each workstation using this configuration when that workstation is started.
Structure is documented below.
*/
  Container?: Workstations_WorkstationConfigContainer;

  /*
Encrypts resources of this workstation configuration using a customer-managed encryption key.
If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata.
If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost.
If the encryption key is revoked, the workstation session will automatically be stopped within 7 hours.
Structure is documented below.
*/
  EncryptionKey?: Workstations_WorkstationConfigEncryptionKey;

  /*
Runtime host for a workstation.
Structure is documented below.
*/
  Host?: Workstations_WorkstationConfigHost;

  /*
How long to wait before automatically stopping an instance that hasn't recently received any user traffic. A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  IdleTimeout?: string;

  /*
The location where the workstation cluster config should reside.


- - -
*/
  Location?: string;

  // Disables support for plain TCP connections in the workstation. By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.
  DisableTcpConnections?: boolean;

  // Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.
  EnableAuditAgent?: boolean;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.
*/
  ReplicaZones?: Array<string>;
}
export class WorkstationConfig extends Resource {
  // Time when this resource was created.
  public CreateTime?: string;

  // Whether this resource is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in the conditions field.
  public Degraded?: boolean;

  // Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.
  public EnableAuditAgent?: boolean;

  // Full name of this resource.
  public Name?: string;

  /*
Directories to persist across workstation sessions.
Structure is documented below.
*/
  public PersistentDirectories?: Array<Workstations_WorkstationConfigPersistentDirectory>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.
*/
  public ReplicaZones?: Array<string>;

  /*
How long to wait before automatically stopping a workstation after it was started. A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if `encryption_key` is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public RunningTimeout?: string;

  // Disables support for plain TCP connections in the workstation. By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.
  public DisableTcpConnections?: boolean;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
Readiness checks to be performed on a workstation.
Structure is documented below.
*/
  public ReadinessChecks?: Array<Workstations_WorkstationConfigReadinessCheck>;

  /*
Status conditions describing the current resource state.
Structure is documented below.
*/
  public Conditions?: Array<Workstations_WorkstationConfigCondition>;

  /*
Checksum computed by the server.
May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
*/
  public Etag?: string;

  /*
Runtime host for a workstation.
Structure is documented below.
*/
  public Host?: Workstations_WorkstationConfigHost;

  /*
How long to wait before automatically stopping an instance that hasn't recently received any user traffic. A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public IdleTimeout?: string;

  /*
The location where the workstation cluster config should reside.


- - -
*/
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  /*
Container that will be run for each workstation using this configuration when that workstation is started.
Structure is documented below.
*/
  public Container?: Workstations_WorkstationConfigContainer;

  // Human-readable name for this resource.
  public DisplayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Encrypts resources of this workstation configuration using a customer-managed encryption key.
If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata.
If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost.
If the encryption key is revoked, the workstation session will automatically be stopped within 7 hours.
Structure is documented below.
*/
  public EncryptionKey?: Workstations_WorkstationConfigEncryptionKey;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The system-generated UID of the resource.
  public Uid?: string;

  // The ID of the parent workstation cluster.
  public WorkstationClusterId?: string;

  // The ID to be assigned to the workstation cluster config.
  public WorkstationConfigId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "WorkstationConfigId",
        "The ID to be assigned to the workstation cluster config.",
        [],
        true,
        true,
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
        InputType.Object,
        "Host",
        "Runtime host for a workstation.\nStructure is documented below.",
        Workstations_WorkstationConfigHost_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable name for this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EncryptionKey",
        "Encrypts resources of this workstation configuration using a customer-managed encryption key.\nIf specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata.\nIf the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost.\nIf the encryption key is revoked, the workstation session will automatically be stopped within 7 hours.\nStructure is documented below.",
        Workstations_WorkstationConfigEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the workstation cluster config should reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ReplicaZones",
        "Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`.\nIf this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ReadinessChecks",
        "Readiness checks to be performed on a workstation.\nStructure is documented below.",
        Workstations_WorkstationConfigReadinessCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "RunningTimeout",
        "How long to wait before automatically stopping a workstation after it was started. A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if `encryption_key` is set. Defaults to 12 hours.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Container",
        "Container that will be run for each workstation using this configuration when that workstation is started.\nStructure is documented below.",
        Workstations_WorkstationConfigContainer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableAuditAgent",
        "Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "PersistentDirectories",
        "Directories to persist across workstation sessions.\nStructure is documented below.",
        Workstations_WorkstationConfigPersistentDirectory_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "Client-specified annotations. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "IdleTimeout",
        "How long to wait before automatically stopping an instance that hasn't recently received any user traffic. A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DisableTcpConnections",
        "Disables support for plain TCP connections in the workstation. By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkstationClusterId",
        "The ID of the parent workstation cluster.",
        [],
        true,
        true,
      ),
    ];
  }
}
