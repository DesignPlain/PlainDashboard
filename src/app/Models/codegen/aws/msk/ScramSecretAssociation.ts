import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ScramSecretAssociationArgs {
  // Amazon Resource Name (ARN) of the MSK cluster.
  clusterArn?: string;

  // List of AWS Secrets Manager secret ARNs.
  secretArnLists?: Array<string>;
}
export class ScramSecretAssociation extends DS_Resource {
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
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "secretArnLists",
        "List of AWS Secrets Manager secret ARNs.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
