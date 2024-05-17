import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TargetPoolArgs {
  /*
How to distribute load. Options are "NONE" (no
affinity). "CLIENT\_IP" (hash of the source/dest addresses / ports), and
"CLIENT\_IP\_PROTO" also includes the protocol (default "NONE").
*/
  SessionAffinity?: string;

  // Textual description field.
  Description?: string;

  /*
List of zero or one health check name or self_link. Only
legacy `gcp.compute.HttpHealthCheck` is supported.
*/
  HealthChecks?: string;

  /*
List of instances in the pool. They can be given as
URLs, or in the form of "zone/name". Note that the instances need not exist
at the time of target pool creation, so there is no need to use the
interpolation to create a dependency on the instances from the
target pool.
*/
  Instances?: Array<string>;

  /*
A unique name for the resource, required by GCE. Changing
this forces a new resource to be created.

- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
Where the target pool resides. Defaults to project
region.
*/
  Region?: string;

  // The resource URL for the security policy associated with this target pool.
  SecurityPolicy?: string;

  /*
URL to the backup target pool. Must also set
failover\_ratio.
*/
  BackupPool?: string;

  /*
Ratio (0 to 1) of failed nodes before using the
backup pool (which must also be set).
*/
  FailoverRatio?: number;
}
export class TargetPool extends Resource {
  /*
Ratio (0 to 1) of failed nodes before using the
backup pool (which must also be set).
*/
  public FailoverRatio?: number;

  /*
Where the target pool resides. Defaults to project
region.
*/
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
How to distribute load. Options are "NONE" (no
affinity). "CLIENT\_IP" (hash of the source/dest addresses / ports), and
"CLIENT\_IP\_PROTO" also includes the protocol (default "NONE").
*/
  public SessionAffinity?: string;

  /*
A unique name for the resource, required by GCE. Changing
this forces a new resource to be created.

- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // The resource URL for the security policy associated with this target pool.
  public SecurityPolicy?: string;

  /*
URL to the backup target pool. Must also set
failover\_ratio.
*/
  public BackupPool?: string;

  // Textual description field.
  public Description?: string;

  /*
List of zero or one health check name or self_link. Only
legacy `gcp.compute.HttpHealthCheck` is supported.
*/
  public HealthChecks?: string;

  /*
List of instances in the pool. They can be given as
URLs, or in the form of "zone/name". Note that the instances need not exist
at the time of target pool creation, so there is no need to use the
interpolation to create a dependency on the instances from the
target pool.
*/
  public Instances?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "SessionAffinity",
        'How to distribute load. Options are "NONE" (no\naffinity). "CLIENT\\_IP" (hash of the source/dest addresses / ports), and\n"CLIENT\\_IP\\_PROTO" also includes the protocol (default "NONE").',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "HealthChecks",
        "List of zero or one health check name or self_link. Only\nlegacy `gcp.compute.HttpHealthCheck` is supported.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityPolicy",
        "The resource URL for the security policy associated with this target pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "FailoverRatio",
        "Ratio (0 to 1) of failed nodes before using the\nbackup pool (which must also be set).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Textual description field.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Instances",
        'List of instances in the pool. They can be given as\nURLs, or in the form of "zone/name". Note that the instances need not exist\nat the time of target pool creation, so there is no need to use the\ninterpolation to create a dependency on the instances from the\ntarget pool.',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the resource, required by GCE. Changing\nthis forces a new resource to be created.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Where the target pool resides. Defaults to project\nregion.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "BackupPool",
        "URL to the backup target pool. Must also set\nfailover\\_ratio.",
        [],
        false,
        false,
      ),
    ];
  }
}
