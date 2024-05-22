import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cleanrooms_CollaborationDataEncryptionMetadata,
  cleanrooms_CollaborationDataEncryptionMetadata_GetTypes,
} from "../types/cleanrooms_CollaborationDataEncryptionMetadata";
import {
  cleanrooms_CollaborationMember,
  cleanrooms_CollaborationMember_GetTypes,
} from "../types/cleanrooms_CollaborationMember";

export interface CollaborationArgs {
  /*
a collection of settings which determine how the [c3r client](https://docs.aws.amazon.com/clean-rooms/latest/userguide/crypto-computing.html) will encrypt data for use within this collaboration.
- `data_encryption_metadata.allow_clear_text` - (Required - Forces new resource) - Indicates whether encrypted tables can contain cleartext data. This is a boolea
field.
- `data_encryption_metadata.allow_duplicates` - (Required - Forces new resource ) - Indicates whether Fingerprint columns can contain duplicate entries. This is a
boolean field.
- `data_encryption_metadata.allow_joins_on_columns_with_different_names` - (Required - Forces new resource) - Indicates whether Fingerprint columns can be joined
n any other Fingerprint column with a different name. This is a boolean field.
- `data_encryption_metadata.preserve_nulls` - (Required - Forces new resource) - Indicates whether NULL values are to be copied as NULL to encrypted tables (true)
or cryptographically processed (false).
*/
  dataEncryptionMetadata?: cleanrooms_CollaborationDataEncryptionMetadata;

  // A description for a collaboration.
  description?: string;

  /*
Additional members of the collaboration which will be invited to join the collaboration.
- `member.account_id` - (Required - Forces new resource) - The account id for the invited member.
- `member.display_name` - (Required - Forces new resource) - The display name for the invited member.
- `member.member_abilities` - (Required - Forces new resource) - The list of abilities for the invited member. Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-creatorMemberAbilities).
*/
  members?: Array<cleanrooms_CollaborationMember>;

  // The name of the collaboration.  Collaboration names do not need to be unique.
  name?: string;

  /*
Determines if members of the collaboration can enable query logs within their own.
emberships. Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-queryLogStatus).
*/
  queryLogStatus?: string;

  // Key value pairs which tag the collaboration.
  tags?: Map<string, string>;

  // The name for the member record for the collaboration creator.
  creatorDisplayName?: string;

  // The list of member abilities for the creator of the collaboration.  Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-creatorMemberAbilities).
  creatorMemberAbilities?: Array<string>;
}
export class Collaboration extends Resource {
  /*
The date and time the collaboration was created.
- `member status` - For each member included in the collaboration an additional computed attribute of status is added. These values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_MemberSummary.html#API-Type-MemberSummary-status).
*/
  public createTime?: string;

  // The name for the member record for the collaboration creator.
  public creatorDisplayName?: string;

  // The list of member abilities for the creator of the collaboration.  Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-creatorMemberAbilities).
  public creatorMemberAbilities?: Array<string>;

  /*
a collection of settings which determine how the [c3r client](https://docs.aws.amazon.com/clean-rooms/latest/userguide/crypto-computing.html) will encrypt data for use within this collaboration.
- `data_encryption_metadata.allow_clear_text` - (Required - Forces new resource) - Indicates whether encrypted tables can contain cleartext data. This is a boolea
field.
- `data_encryption_metadata.allow_duplicates` - (Required - Forces new resource ) - Indicates whether Fingerprint columns can contain duplicate entries. This is a
boolean field.
- `data_encryption_metadata.allow_joins_on_columns_with_different_names` - (Required - Forces new resource) - Indicates whether Fingerprint columns can be joined
n any other Fingerprint column with a different name. This is a boolean field.
- `data_encryption_metadata.preserve_nulls` - (Required - Forces new resource) - Indicates whether NULL values are to be copied as NULL to encrypted tables (true)
or cryptographically processed (false).
*/
  public dataEncryptionMetadata?: cleanrooms_CollaborationDataEncryptionMetadata;

  /*
Additional members of the collaboration which will be invited to join the collaboration.
- `member.account_id` - (Required - Forces new resource) - The account id for the invited member.
- `member.display_name` - (Required - Forces new resource) - The display name for the invited member.
- `member.member_abilities` - (Required - Forces new resource) - The list of abilities for the invited member. Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-creatorMemberAbilities).
*/
  public members?: Array<cleanrooms_CollaborationMember>;

  /*
Determines if members of the collaboration can enable query logs within their own.
emberships. Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-queryLogStatus).
*/
  public queryLogStatus?: string;

  // Key value pairs which tag the collaboration.
  public tags?: Map<string, string>;

  // The arn of the collaboration.
  public arn?: string;

  //
  public updateTime?: string;

  // The name of the collaboration.  Collaboration names do not need to be unique.
  public name?: string;

  //
  public tagsAll?: Map<string, string>;

  // A description for a collaboration.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "creatorMemberAbilities",
        "The list of member abilities for the creator of the collaboration.  Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-creatorMemberAbilities).",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataEncryptionMetadata",
        "a collection of settings which determine how the [c3r client](https://docs.aws.amazon.com/clean-rooms/latest/userguide/crypto-computing.html) will encrypt data for use within this collaboration.\n* `data_encryption_metadata.allow_clear_text` - (Required - Forces new resource) - Indicates whether encrypted tables can contain cleartext data. This is a boolea\nfield.\n* `data_encryption_metadata.allow_duplicates` - (Required - Forces new resource ) - Indicates whether Fingerprint columns can contain duplicate entries. This is a\nboolean field.\n* `data_encryption_metadata.allow_joins_on_columns_with_different_names` - (Required - Forces new resource) - Indicates whether Fingerprint columns can be joined\nn any other Fingerprint column with a different name. This is a boolean field.\n* `data_encryption_metadata.preserve_nulls` - (Required - Forces new resource) - Indicates whether NULL values are to be copied as NULL to encrypted tables (true)\nor cryptographically processed (false).",
        cleanrooms_CollaborationDataEncryptionMetadata_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for a collaboration.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "Additional members of the collaboration which will be invited to join the collaboration.\n* `member.account_id` - (Required - Forces new resource) - The account id for the invited member.\n* `member.display_name` - (Required - Forces new resource) - The display name for the invited member.\n* `member.member_abilities` - (Required - Forces new resource) - The list of abilities for the invited member. Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-creatorMemberAbilities).",
        cleanrooms_CollaborationMember_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the collaboration.  Collaboration names do not need to be unique.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "queryLogStatus",
        "Determines if members of the collaboration can enable query logs within their own.\nemberships. Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-queryLogStatus).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key value pairs which tag the collaboration.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "creatorDisplayName",
        "The name for the member record for the collaboration creator.",
        [],
        true,
        true,
      ),
    ];
  }
}
