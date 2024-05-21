import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  workstations_WorkstationConfigEncryptionKey,
  workstations_WorkstationConfigEncryptionKey_GetTypes,
} from "../types/workstations_WorkstationConfigEncryptionKey";
import {
  workstations_WorkstationConfigHost,
  workstations_WorkstationConfigHost_GetTypes,
} from "../types/workstations_WorkstationConfigHost";
import {
  workstations_WorkstationConfigContainer,
  workstations_WorkstationConfigContainer_GetTypes,
} from "../types/workstations_WorkstationConfigContainer";
import {
  workstations_WorkstationConfigPersistentDirectory,
  workstations_WorkstationConfigPersistentDirectory_GetTypes,
} from "../types/workstations_WorkstationConfigPersistentDirectory";
import {
  workstations_WorkstationConfigReadinessCheck,
  workstations_WorkstationConfigReadinessCheck_GetTypes,
} from "../types/workstations_WorkstationConfigReadinessCheck";
import {
  workstations_WorkstationConfigCondition,
  workstations_WorkstationConfigCondition_GetTypes,
} from "../types/workstations_WorkstationConfigCondition";

export interface WorkstationConfigArgs {
  /*
The location where the workstation cluster config should reside.


- - -
*/
  location?: string;

  // Human-readable name for this resource.
  displayName?: string;

  // Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.
  enableAuditAgent?: boolean;

  /*
Encrypts resources of this workstation configuration using a customer-managed encryption key.
If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata.
If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost.
If the encryption key is revoked, the workstation session will automatically be stopped within 7 hours.
Structure is documented below.
*/
  encryptionKey?: workstations_WorkstationConfigEncryptionKey;

  /*
Runtime host for a workstation.
Structure is documented below.
*/
  host?: workstations_WorkstationConfigHost;

  // The ID of the parent workstation cluster.
  workstationClusterId?: string;

  /*
Container that will be run for each workstation using this configuration when that workstation is started.
Structure is documented below.
*/
  container?: workstations_WorkstationConfigContainer;

  // Disables support for plain TCP connections in the workstation. By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.
  disableTcpConnections?: boolean;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
How long to wait before automatically stopping a workstation after it was started. A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if `encryption_key` is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  runningTimeout?: string;

  // The ID to be assigned to the workstation cluster config.
  workstationConfigId?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  /*
How long to wait before automatically stopping an instance that hasn't recently received any user traffic. A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  idleTimeout?: string;

  /*
Directories to persist across workstation sessions.
Structure is documented below.
*/
  persistentDirectories?: Array<workstations_WorkstationConfigPersistentDirectory>;

  /*
Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.
*/
  replicaZones?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Readiness checks to be performed on a workstation.
Structure is documented below.
*/
  readinessChecks?: Array<workstations_WorkstationConfigReadinessCheck>;
}
export class WorkstationConfig extends Resource {
  // The ID to be assigned to the workstation cluster config.
  public workstationConfigId?: string;

  /*
Encrypts resources of this workstation configuration using a customer-managed encryption key.
If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata.
If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost.
If the encryption key is revoked, the workstation session will automatically be stopped within 7 hours.
Structure is documented below.
*/
  public encryptionKey?: workstations_WorkstationConfigEncryptionKey;

  /*
Runtime host for a workstation.
Structure is documented below.
*/
  public host?: workstations_WorkstationConfigHost;

  /*
How long to wait before automatically stopping an instance that hasn't recently received any user traffic. A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public idleTimeout?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.
*/
  public replicaZones?: Array<string>;

  /*
How long to wait before automatically stopping a workstation after it was started. A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if `encryption_key` is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public runningTimeout?: string;

  // Full name of this resource.
  public name?: string;

  /*
Readiness checks to be performed on a workstation.
Structure is documented below.
*/
  public readinessChecks?: Array<workstations_WorkstationConfigReadinessCheck>;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // Time when this resource was created.
  public createTime?: string;

  // Whether this resource is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in the conditions field.
  public degraded?: boolean;

  // Human-readable name for this resource.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Checksum computed by the server.
May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
*/
  public etag?: string;

  // The ID of the parent workstation cluster.
  public workstationClusterId?: string;

  // Disables support for plain TCP connections in the workstation. By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.
  public disableTcpConnections?: boolean;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Directories to persist across workstation sessions.
Structure is documented below.
*/
  public persistentDirectories?: Array<workstations_WorkstationConfigPersistentDirectory>;

  // The system-generated UID of the resource.
  public uid?: string;

  /*
Status conditions describing the current resource state.
Structure is documented below.
*/
  public conditions?: Array<workstations_WorkstationConfigCondition>;

  /*
Container that will be run for each workstation using this configuration when that workstation is started.
Structure is documented below.
*/
  public container?: workstations_WorkstationConfigContainer;

  // Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.
  public enableAuditAgent?: boolean;

  /*
The location where the workstation cluster config should reside.


- - -
*/
  public location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "container",
        "Container that will be run for each workstation using this configuration when that workstation is started.\nStructure is documented below.",
        workstations_WorkstationConfigContainer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "persistentDirectories",
        "Directories to persist across workstation sessions.\nStructure is documented below.",
        workstations_WorkstationConfigPersistentDirectory_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "replicaZones",
        "Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`.\nIf this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "readinessChecks",
        "Readiness checks to be performed on a workstation.\nStructure is documented below.",
        workstations_WorkstationConfigReadinessCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Human-readable name for this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "host",
        "Runtime host for a workstation.\nStructure is documented below.",
        workstations_WorkstationConfigHost_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableTcpConnections",
        "Disables support for plain TCP connections in the workstation. By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runningTimeout",
        "How long to wait before automatically stopping a workstation after it was started. A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if `encryption_key` is set. Defaults to 12 hours.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workstationConfigId",
        "The ID to be assigned to the workstation cluster config.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Client-specified annotations. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the workstation cluster config should reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableAuditAgent",
        "Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workstationClusterId",
        "The ID of the parent workstation cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionKey",
        "Encrypts resources of this workstation configuration using a customer-managed encryption key.\nIf specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata.\nIf the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost.\nIf the encryption key is revoked, the workstation session will automatically be stopped within 7 hours.\nStructure is documented below.",
        workstations_WorkstationConfigEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "idleTimeout",
        "How long to wait before automatically stopping an instance that hasn't recently received any user traffic. A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
        [],
        false,
        false,
      ),
    ];
  }
}
