import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssmincidents_ReplicationSetRegion,
  ssmincidents_ReplicationSetRegion_GetTypes,
} from "../types/ssmincidents_ReplicationSetRegion";

export interface ReplicationSetArgs {
  //
  regions?: Array<ssmincidents_ReplicationSetRegion>;

  //
  tags?: Map<string, string>;
}
export class ReplicationSet extends DS_Resource {
  // A timestamp showing when the replication set was last modified.
  public lastModifiedBy?: string;

  //
  public regions?: Array<ssmincidents_ReplicationSetRegion>;

  /*
The current status of the Region.
- Valid Values: `ACTIVE` | `CREATING` | `UPDATING` | `DELETING` | `FAILED`
*/
  public status?: string;

  //
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the replication set.
  public arn?: string;

  // The ARN of the user who created the replication set.
  public createdBy?: string;

  // If `true`, the last region in a replication set cannot be deleted.
  public deletionProtected?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "regions",
        "",
        () => ssmincidents_ReplicationSetRegion_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
