import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DataShareConsumerAssociationArgs {
  /*
Amazon Resource Name (ARN) of the datashare that the consumer is to use with the account or the namespace.

The following arguments are optional:
*/
  dataShareArn?: string;

  // Whether to allow write operations for a datashare.
  allowWrites?: boolean;

  // Whether the datashare is associated with the entire account. Conflicts with `consumer_arn` and `consumer_region`.
  associateEntireAccount?: boolean;

  // Amazon Resource Name (ARN) of the consumer that is associated with the datashare. Conflicts with `associate_entire_account` and `consumer_region`.
  consumerArn?: string;

  // From a datashare consumer account, associates a datashare with all existing and future namespaces in the specified AWS Region. Conflicts with `associate_entire_account` and `consumer_arn`.
  consumerRegion?: string;
}
export class DataShareConsumerAssociation extends Resource {
  // Amazon Resource Name (ARN) of the producer.
  public producerArn?: string;

  // Whether to allow write operations for a datashare.
  public allowWrites?: boolean;

  // Whether the datashare is associated with the entire account. Conflicts with `consumer_arn` and `consumer_region`.
  public associateEntireAccount?: boolean;

  // Amazon Resource Name (ARN) of the consumer that is associated with the datashare. Conflicts with `associate_entire_account` and `consumer_region`.
  public consumerArn?: string;

  // From a datashare consumer account, associates a datashare with all existing and future namespaces in the specified AWS Region. Conflicts with `associate_entire_account` and `consumer_arn`.
  public consumerRegion?: string;

  /*
Amazon Resource Name (ARN) of the datashare that the consumer is to use with the account or the namespace.

The following arguments are optional:
*/
  public dataShareArn?: string;

  // Identifier of a datashare to show its managing entity.
  public managedBy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "consumerRegion",
        "From a datashare consumer account, associates a datashare with all existing and future namespaces in the specified AWS Region. Conflicts with `associate_entire_account` and `consumer_arn`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataShareArn",
        "Amazon Resource Name (ARN) of the datashare that the consumer is to use with the account or the namespace.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowWrites",
        "Whether to allow write operations for a datashare.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "associateEntireAccount",
        "Whether the datashare is associated with the entire account. Conflicts with `consumer_arn` and `consumer_region`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "consumerArn",
        "Amazon Resource Name (ARN) of the consumer that is associated with the datashare. Conflicts with `associate_entire_account` and `consumer_region`.",
        [],
        false,
        false,
      ),
    ];
  }
}
