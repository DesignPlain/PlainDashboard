import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TargetPoolArgs {
  /*
URL to the backup target pool. Must also set
failover\_ratio.
*/
  backupPool?: string;

  // Textual description field.
  description?: string;

  /*
A unique name for the resource, required by GCE. Changing
this forces a new resource to be created.

- - -
*/
  name?: string;

  /*
Where the target pool resides. Defaults to project
region.
*/
  region?: string;

  // The resource URL for the security policy associated with this target pool.
  securityPolicy?: string;

  /*
How to distribute load. Options are "NONE" (no
affinity). "CLIENT\_IP" (hash of the source/dest addresses / ports), and
"CLIENT\_IP\_PROTO" also includes the protocol (default "NONE").
*/
  sessionAffinity?: string;

  /*
Ratio (0 to 1) of failed nodes before using the
backup pool (which must also be set).
*/
  failoverRatio?: number;

  /*
List of zero or one health check name or self_link. Only
legacy `gcp.compute.HttpHealthCheck` is supported.
*/
  healthChecks?: string;

  /*
List of instances in the pool. They can be given as
URLs, or in the form of "zone/name". Note that the instances need not exist
at the time of target pool creation, so there is no need to use the
interpolation to create a dependency on the instances from the
target pool.
*/
  instances?: Array<string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;
}
export class TargetPool extends DS_Resource {
  /*
Where the target pool resides. Defaults to project
region.
*/
  public region?: string;

  // The resource URL for the security policy associated with this target pool.
  public securityPolicy?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
URL to the backup target pool. Must also set
failover\_ratio.
*/
  public backupPool?: string;

  /*
Ratio (0 to 1) of failed nodes before using the
backup pool (which must also be set).
*/
  public failoverRatio?: number;

  /*
List of zero or one health check name or self_link. Only
legacy `gcp.compute.HttpHealthCheck` is supported.
*/
  public healthChecks?: string;

  /*
A unique name for the resource, required by GCE. Changing
this forces a new resource to be created.

- - -
*/
  public name?: string;

  // Textual description field.
  public description?: string;

  /*
List of instances in the pool. They can be given as
URLs, or in the form of "zone/name". Note that the instances need not exist
at the time of target pool creation, so there is no need to use the
interpolation to create a dependency on the instances from the
target pool.
*/
  public instances?: Array<string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
How to distribute load. Options are "NONE" (no
affinity). "CLIENT\_IP" (hash of the source/dest addresses / ports), and
"CLIENT\_IP\_PROTO" also includes the protocol (default "NONE").
*/
  public sessionAffinity?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique name for the resource, required by GCE. Changing\nthis forces a new resource to be created.\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityPolicy",
        "The resource URL for the security policy associated with this target pool.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sessionAffinity",
        'How to distribute load. Options are "NONE" (no\naffinity). "CLIENT\\_IP" (hash of the source/dest addresses / ports), and\n"CLIENT\\_IP\\_PROTO" also includes the protocol (default "NONE").',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "backupPool",
        "URL to the backup target pool. Must also set\nfailover\\_ratio.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "Where the target pool resides. Defaults to project\nregion.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "failoverRatio",
        "Ratio (0 to 1) of failed nodes before using the\nbackup pool (which must also be set).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "healthChecks",
        "List of zero or one health check name or self_link. Only\nlegacy `gcp.compute.HttpHealthCheck` is supported.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "instances",
        'List of instances in the pool. They can be given as\nURLs, or in the form of "zone/name". Note that the instances need not exist\nat the time of target pool creation, so there is no need to use the\ninterpolation to create a dependency on the instances from the\ntarget pool.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Textual description field.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
