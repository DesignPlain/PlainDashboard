import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DataShareAuthorizationArgs {
  // Whether to allow write operations for a datashare.
  allowWrites?: boolean;

  // Identifier of the data consumer that is authorized to access the datashare. This identifier is an AWS account ID or a keyword, such as `ADX`.
  consumerIdentifier?: string;

  /*
Amazon Resource Name (ARN) of the datashare that producers are to authorize sharing for.

The following arguments are optional:
*/
  dataShareArn?: string;
}
export class DataShareAuthorization extends DS_Resource {
  // Amazon Resource Name (ARN) of the producer.
  public producerArn?: string;

  // Whether to allow write operations for a datashare.
  public allowWrites?: boolean;

  // Identifier of the data consumer that is authorized to access the datashare. This identifier is an AWS account ID or a keyword, such as `ADX`.
  public consumerIdentifier?: string;

  /*
Amazon Resource Name (ARN) of the datashare that producers are to authorize sharing for.

The following arguments are optional:
*/
  public dataShareArn?: string;

  // Identifier of a datashare to show its managing entity.
  public managedBy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "allowWrites",
        "Whether to allow write operations for a datashare.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "consumerIdentifier",
        "Identifier of the data consumer that is authorized to access the datashare. This identifier is an AWS account ID or a keyword, such as `ADX`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataShareArn",
        "Amazon Resource Name (ARN) of the datashare that producers are to authorize sharing for.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
