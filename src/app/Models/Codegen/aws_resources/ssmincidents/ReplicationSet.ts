import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssmincidents_ReplicationSetRegion,
  ssmincidents_ReplicationSetRegion_GetTypes,
} from "../types/ssmincidents_ReplicationSetRegion";

export interface ReplicationSetArgs {
  //
  regions?: Array<ssmincidents_ReplicationSetRegion>;

  /*
Tags applied to the replication set.

For information about the maximum allowed number of Regions and tag value constraints, see [CreateReplicationSet in the -AWS Systems Manager Incident Manager API Reference-](https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateReplicationSet.html).
*/
  tags?: Map<string, string>;
}
export class ReplicationSet extends Resource {
  // If `true`, the last region in a replication set cannot be deleted.
  public deletionProtected?: boolean;

  // A timestamp showing when the replication set was last modified.
  public lastModifiedBy?: string;

  //
  public regions?: Array<ssmincidents_ReplicationSetRegion>;

  /*
The current status of the Region.
- Valid Values: `ACTIVE` | `CREATING` | `UPDATING` | `DELETING` | `FAILED`
*/
  public status?: string;

  /*
Tags applied to the replication set.

For information about the maximum allowed number of Regions and tag value constraints, see [CreateReplicationSet in the -AWS Systems Manager Incident Manager API Reference-](https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateReplicationSet.html).
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the replication set.
  public arn?: string;

  // The ARN of the user who created the replication set.
  public createdBy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "regions",
        "",
        ssmincidents_ReplicationSetRegion_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags applied to the replication set.\n\nFor information about the maximum allowed number of Regions and tag value constraints, see [CreateReplicationSet in the *AWS Systems Manager Incident Manager API Reference*](https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateReplicationSet.html).",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
