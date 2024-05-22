import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ScramSecretAssociationArgs {
  // Amazon Resource Name (ARN) of the MSK cluster.
  clusterArn?: string;

  // List of AWS Secrets Manager secret ARNs.
  secretArnLists?: Array<string>;
}
export class ScramSecretAssociation extends Resource {
  // Amazon Resource Name (ARN) of the MSK cluster.
  public clusterArn?: string;

  // List of AWS Secrets Manager secret ARNs.
  public secretArnLists?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterArn",
        "Amazon Resource Name (ARN) of the MSK cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "secretArnLists",
        "List of AWS Secrets Manager secret ARNs.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
