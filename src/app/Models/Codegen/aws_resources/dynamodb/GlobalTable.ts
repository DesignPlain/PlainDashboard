import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dynamodb_GlobalTableReplica,
  dynamodb_GlobalTableReplica_GetTypes,
} from "../types/dynamodb_GlobalTableReplica";

export interface GlobalTableArgs {
  // The name of the global table. Must match underlying DynamoDB Table names in all regions.
  name?: string;

  // Underlying DynamoDB Table. At least 1 replica must be defined. See below.
  replicas?: Array<dynamodb_GlobalTableReplica>;
}
export class GlobalTable extends Resource {
  // The ARN of the DynamoDB Global Table
  public arn?: string;

  // The name of the global table. Must match underlying DynamoDB Table names in all regions.
  public name?: string;

  // Underlying DynamoDB Table. At least 1 replica must be defined. See below.
  public replicas?: Array<dynamodb_GlobalTableReplica>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the global table. Must match underlying DynamoDB Table names in all regions.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "replicas",
        "Underlying DynamoDB Table. At least 1 replica must be defined. See below.",
        dynamodb_GlobalTableReplica_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
