import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceFromTemplateScratchDisk,
  compute_InstanceFromTemplateScratchDisk_GetTypes,
} from "../types/compute_InstanceFromTemplateScratchDisk";
import {
  compute_InstanceFromTemplateShieldedInstanceConfig,
  compute_InstanceFromTemplateShieldedInstanceConfig_GetTypes,
} from "../types/compute_InstanceFromTemplateShieldedInstanceConfig";
import {
  compute_InstanceFromTemplateBootDisk,
  compute_InstanceFromTemplateBootDisk_GetTypes,
} from "../types/compute_InstanceFromTemplateBootDisk";
import {
  compute_InstanceFromTemplateServiceAccount,
  compute_InstanceFromTemplateServiceAccount_GetTypes,
} from "../types/compute_InstanceFromTemplateServiceAccount";
import {
  compute_InstanceFromTemplateAttachedDisk,
  compute_InstanceFromTemplateAttachedDisk_GetTypes,
} from "../types/compute_InstanceFromTemplateAttachedDisk";
import {
  compute_InstanceFromTemplateConfidentialInstanceConfig,
  compute_InstanceFromTemplateConfidentialInstanceConfig_GetTypes,
} from "../types/compute_InstanceFromTemplateConfidentialInstanceConfig";
import {
  compute_InstanceFromTemplateReservationAffinity,
  compute_InstanceFromTemplateReservationAffinity_GetTypes,
} from "../types/compute_InstanceFromTemplateReservationAffinity";
import {
  compute_InstanceFromTemplateParams,
  compute_InstanceFromTemplateParams_GetTypes,
} from "../types/compute_InstanceFromTemplateParams";
import {
  compute_InstanceFromTemplateNetworkInterface,
  compute_InstanceFromTemplateNetworkInterface_GetTypes,
} from "../types/compute_InstanceFromTemplateNetworkInterface";
import {
  compute_InstanceFromTemplateAdvancedMachineFeatures,
  compute_InstanceFromTemplateAdvancedMachineFeatures_GetTypes,
} from "../types/compute_InstanceFromTemplateAdvancedMachineFeatures";
import {
  compute_InstanceFromTemplateScheduling,
  compute_InstanceFromTemplateScheduling_GetTypes,
} from "../types/compute_InstanceFromTemplateScheduling";
import {
  compute_InstanceFromTemplateNetworkPerformanceConfig,
  compute_InstanceFromTemplateNetworkPerformanceConfig_GetTypes,
} from "../types/compute_InstanceFromTemplateNetworkPerformanceConfig";
import {
  compute_InstanceFromTemplateGuestAccelerator,
  compute_InstanceFromTemplateGuestAccelerator_GetTypes,
} from "../types/compute_InstanceFromTemplateGuestAccelerator";

export interface InstanceFromTemplateArgs {
  // Controls for advanced machine-related behavior features.
  advancedMachineFeatures?: compute_InstanceFromTemplateAdvancedMachineFeatures;

  // List of disks attached to the instance
  attachedDisks?: Array<compute_InstanceFromTemplateAttachedDisk>;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  confidentialInstanceConfig?: compute_InstanceFromTemplateConfidentialInstanceConfig;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  hostname?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  name?: string;

  // Specifies the reservations that this instance can consume from.
  reservationAffinity?: compute_InstanceFromTemplateReservationAffinity;

  // The machine type to create.
  machineType?: string;

  // Metadata key/value pairs made available within the instance.
  metadata?: Map<string, string>;

  // The minimum CPU platform specified for the VM instance.
  minCpuPlatform?: string;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  params?: compute_InstanceFromTemplateParams;

  // The scratch disks attached to the instance.
  scratchDisks?: Array<compute_InstanceFromTemplateScratchDisk>;

  // The shielded vm config being used by the instance.
  shieldedInstanceConfig?: compute_InstanceFromTemplateShieldedInstanceConfig;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  allowStoppingForUpdate?: boolean;

  // The boot disk for the instance.
  bootDisk?: compute_InstanceFromTemplateBootDisk;

  // A brief description of the resource.
  description?: string;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, all arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the template. All exported attributes
from `gcp.compute.Instance` are likewise exported here.
*/
  zone?: string;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  project?: string;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  resourcePolicies?: string;

  // The scheduling strategy being used by the instance.
  scheduling?: compute_InstanceFromTemplateScheduling;

  // Whether deletion protection is enabled on this instance.
  deletionProtection?: boolean;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  networkPerformanceConfig?: compute_InstanceFromTemplateNetworkPerformanceConfig;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  canIpForward?: boolean;

  // Whether the instance has virtual displays enabled.
  enableDisplay?: boolean;

  // The list of tags attached to the instance.
  tags?: Array<string>;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  desiredStatus?: string;

  // List of the type and count of accelerator cards attached to the instance.
  guestAccelerators?: Array<compute_InstanceFromTemplateGuestAccelerator>;

  // The service account to attach to the instance.
  serviceAccount?: compute_InstanceFromTemplateServiceAccount;

  /*
Name or self link of an instance
template to create the instance based on. It is recommended to reference
instance templates through their unique id (`self_link_unique` attribute).

- - -
*/
  sourceInstanceTemplate?: string;

  // Metadata startup scripts made available within the instance.
  metadataStartupScript?: string;

  // The networks attached to the instance.
  networkInterfaces?: Array<compute_InstanceFromTemplateNetworkInterface>;
}
export class InstanceFromTemplate extends Resource {
  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  public allowStoppingForUpdate?: boolean;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  public confidentialInstanceConfig?: compute_InstanceFromTemplateConfidentialInstanceConfig;

  // The unique fingerprint of the labels.
  public labelFingerprint?: string;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  public networkPerformanceConfig?: compute_InstanceFromTemplateNetworkPerformanceConfig;

  // The scheduling strategy being used by the instance.
  public scheduling?: compute_InstanceFromTemplateScheduling;

  // The unique fingerprint of the tags.
  public tagsFingerprint?: string;

  // Controls for advanced machine-related behavior features.
  public advancedMachineFeatures?: compute_InstanceFromTemplateAdvancedMachineFeatures;

  // The boot disk for the instance.
  public bootDisk?: compute_InstanceFromTemplateBootDisk;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  public hostname?: string;

  // The scratch disks attached to the instance.
  public scratchDisks?: Array<compute_InstanceFromTemplateScratchDisk>;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  public canIpForward?: boolean;

  // The CPU platform used by this instance.
  public cpuPlatform?: string;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  public labels?: Map<string, string>;

  // Metadata key/value pairs made available within the instance.
  public metadata?: Map<string, string>;

  // List of disks attached to the instance
  public attachedDisks?: Array<compute_InstanceFromTemplateAttachedDisk>;

  // The networks attached to the instance.
  public networkInterfaces?: Array<compute_InstanceFromTemplateNetworkInterface>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // A brief description of the resource.
  public description?: string;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  public desiredStatus?: string;

  // The unique fingerprint of the metadata.
  public metadataFingerprint?: string;

  // Specifies the reservations that this instance can consume from.
  public reservationAffinity?: compute_InstanceFromTemplateReservationAffinity;

  // Whether the instance has virtual displays enabled.
  public enableDisplay?: boolean;

  // Metadata startup scripts made available within the instance.
  public metadataStartupScript?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  public name?: string;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  public params?: compute_InstanceFromTemplateParams;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Name or self link of an instance
template to create the instance based on. It is recommended to reference
instance templates through their unique id (`self_link_unique` attribute).

- - -
*/
  public sourceInstanceTemplate?: string;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, all arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the template. All exported attributes
from `gcp.compute.Instance` are likewise exported here.
*/
  public zone?: string;

  /*
Current status of the instance. This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING,
SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see [Instance
life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).
*/
  public currentStatus?: string;

  // Whether deletion protection is enabled on this instance.
  public deletionProtection?: boolean;

  // The server-assigned unique identifier of this instance.
  public instanceId?: string;

  // The machine type to create.
  public machineType?: string;

  // The minimum CPU platform specified for the VM instance.
  public minCpuPlatform?: string;

  // The list of tags attached to the instance.
  public tags?: Array<string>;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public effectiveLabels?: Map<string, string>;

  // List of the type and count of accelerator cards attached to the instance.
  public guestAccelerators?: Array<compute_InstanceFromTemplateGuestAccelerator>;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  public project?: string;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  public resourcePolicies?: string;

  // The service account to attach to the instance.
  public serviceAccount?: compute_InstanceFromTemplateServiceAccount;

  // The shielded vm config being used by the instance.
  public shieldedInstanceConfig?: compute_InstanceFromTemplateShieldedInstanceConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The zone that the machine should be created in. If not\nset, the provider zone is used.\n\nIn addition to these, all arguments from `gcp.compute.Instance` are supported\nas a way to override the properties in the template. All exported attributes\nfrom `gcp.compute.Instance` are likewise exported here.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Whether deletion protection is enabled on this instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "metadataStartupScript",
        "Metadata startup scripts made available within the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "confidentialInstanceConfig",
        "The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail\nto create.",
        compute_InstanceFromTemplateConfidentialInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostname",
        "A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of\nlabels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The\nentire hostname must not exceed 253 characters. Changing this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reservationAffinity",
        "Specifies the reservations that this instance can consume from.",
        compute_InstanceFromTemplateReservationAffinity_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Metadata key/value pairs made available within the instance.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowStoppingForUpdate",
        "If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires\nstopping the instance without setting this field, the update will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourcePolicies",
        "A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "canIpForward",
        "Whether sending and receiving of packets with non-matching source or destination IPs is allowed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedMachineFeatures",
        "Controls for advanced machine-related behavior features.",
        compute_InstanceFromTemplateAdvancedMachineFeatures_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "machineType",
        "The machine type to create.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither\nself_link nor project are provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduling",
        "The scheduling strategy being used by the instance.",
        compute_InstanceFromTemplateScheduling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "guestAccelerators",
        "List of the type and count of accelerator cards attached to the instance.",
        compute_InstanceFromTemplateGuestAccelerator_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "attachedDisks",
        "List of disks attached to the instance",
        compute_InstanceFromTemplateAttachedDisk_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceInstanceTemplate",
        "Name or self link of an instance\ntemplate to create the instance based on. It is recommended to reference\ninstance templates through their unique id (`self_link_unique` attribute).\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkPerformanceConfig",
        "Configures network performance settings for the instance. If not specified, the instance will be created with its\ndefault network performance configuration.",
        compute_InstanceFromTemplateNetworkPerformanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "desiredStatus",
        'Desired status of the instance. Either "RUNNING" or "TERMINATED".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "params",
        "Stores additional params passed with the request, but not persisted as part of resource payload.",
        compute_InstanceFromTemplateParams_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDisplay",
        "Whether the instance has virtual displays enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "minCpuPlatform",
        "The minimum CPU platform specified for the VM instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "shieldedInstanceConfig",
        "The shielded vm config being used by the instance.",
        compute_InstanceFromTemplateShieldedInstanceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bootDisk",
        "The boot disk for the instance.",
        compute_InstanceFromTemplateBootDisk_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "scratchDisks",
        "The scratch disks attached to the instance.",
        compute_InstanceFromTemplateScratchDisk_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tags",
        "The list of tags attached to the instance.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceAccount",
        "The service account to attach to the instance.",
        compute_InstanceFromTemplateServiceAccount_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networkInterfaces",
        "The networks attached to the instance.",
        compute_InstanceFromTemplateNetworkInterface_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs assigned to the instance. **Note**: This field is non-authoritative, and will only manage\nthe labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on\nthe resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
