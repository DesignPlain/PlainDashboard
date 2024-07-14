import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TrustArgs {
  /*
Whether to enable selective authentication.
Valid values are `Enabled` and `Disabled`.
Default value is `Disabled`.
*/
  selectiveAuth?: string;

  /*
The direction of the Trust relationship.
Valid values are `One-Way: Outgoing`, `One-Way: Incoming`, and `Two-Way`.
*/
  trustDirection?: string;

  /*
Password for the Trust.
Does not need to match the passwords for either Directory.
Can contain upper- and lower-case letters, numbers, and punctuation characters.
May be up to 128 characters long.
*/
  trustPassword?: string;

  /*
Type of the Trust relationship.
Valid values are `Forest` and `External`.
Default value is `Forest`.
*/
  trustType?: string;

  /*
Set of IPv4 addresses for the DNS server associated with the remote Directory.
Can contain between 1 and 4 values.
*/
  conditionalForwarderIpAddrs?: Array<string>;

  // Whether to delete the conditional forwarder when deleting the Trust relationship.
  deleteAssociatedConditionalForwarder?: boolean;

  // ID of the Directory.
  directoryId?: string;

  // Fully qualified domain name of the remote Directory.
  remoteDomainName?: string;
}
export class Trust extends Resource {
  /*
Set of IPv4 addresses for the DNS server associated with the remote Directory.
Can contain between 1 and 4 values.
*/
  public conditionalForwarderIpAddrs?: Array<string>;

  // Date and time when the Trust was created.
  public createdDateTime?: string;

  // Whether to delete the conditional forwarder when deleting the Trust relationship.
  public deleteAssociatedConditionalForwarder?: boolean;

  // ID of the Directory.
  public directoryId?: string;

  // Date and time when the Trust was last updated.
  public lastUpdatedDateTime?: string;

  // Fully qualified domain name of the remote Directory.
  public remoteDomainName?: string;

  /*
The direction of the Trust relationship.
Valid values are `One-Way: Outgoing`, `One-Way: Incoming`, and `Two-Way`.
*/
  public trustDirection?: string;

  // Reason for the Trust state set in `trust_state`.
  public trustStateReason?: string;

  /*
Type of the Trust relationship.
Valid values are `Forest` and `External`.
Default value is `Forest`.
*/
  public trustType?: string;

  /*
Whether to enable selective authentication.
Valid values are `Enabled` and `Disabled`.
Default value is `Disabled`.
*/
  public selectiveAuth?: string;

  // Date and time when the Trust state in `trust_state` was last updated.
  public stateLastUpdatedDateTime?: string;

  /*
Password for the Trust.
Does not need to match the passwords for either Directory.
Can contain upper- and lower-case letters, numbers, and punctuation characters.
May be up to 128 characters long.
*/
  public trustPassword?: string;

  /*
State of the Trust relationship.
One of `Created`, `VerifyFailed`,`Verified`, `UpdateFailed`,`Updated`,`Deleted`, or `Failed`.
*/
  public trustState?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "trustType",
        "Type of the Trust relationship.\nValid values are `Forest` and `External`.\nDefault value is `Forest`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "conditionalForwarderIpAddrs",
        "Set of IPv4 addresses for the DNS server associated with the remote Directory.\nCan contain between 1 and 4 values.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteAssociatedConditionalForwarder",
        "Whether to delete the conditional forwarder when deleting the Trust relationship.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "ID of the Directory.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "remoteDomainName",
        "Fully qualified domain name of the remote Directory.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "selectiveAuth",
        "Whether to enable selective authentication.\nValid values are `Enabled` and `Disabled`.\nDefault value is `Disabled`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "trustDirection",
        "The direction of the Trust relationship.\nValid values are `One-Way: Outgoing`, `One-Way: Incoming`, and `Two-Way`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "trustPassword",
        "Password for the Trust.\nDoes not need to match the passwords for either Directory.\nCan contain upper- and lower-case letters, numbers, and punctuation characters.\nMay be up to 128 characters long.",
        [],
        true,
        false,
      ),
    ];
  }
}
